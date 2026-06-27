import { useState, useRef, useCallback } from 'react';
import type { TestPhase, NetworkQuality, TestResult } from '@/types/speedTest';

const CF = 'https://speed.cloudflare.com';
const HISTORY_KEY = 'speedtest-history';

// ── Statistical helpers ──────────────────────────────────────────────────────

function median(arr: number[]): number {
  if (!arr.length) return 0;
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function calcJitter(arr: number[]): number {
  if (arr.length < 2) return 0;
  return median(arr.slice(1).map((t, i) => Math.abs(t - arr[i])));
}

function calcQuality(dl: number, ping: number, loss: number): NetworkQuality {
  if (dl >= 100 && ping <= 20 && loss < 0.1) return 'excellent';
  if (dl >= 25 && ping <= 50 && loss <= 1) return 'good';
  if (dl >= 5 && ping <= 100 && loss <= 5) return 'fair';
  return 'poor';
}

function r1(n: number) {
  return Math.round(n * 10) / 10;
}

function loadHistory(): TestResult[] {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch {
    return [];
  }
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useSpeedTest() {
  const [phase, setPhase] = useState<TestPhase>('idle');
  const [progress, setProgress] = useState(0);
  const [liveSpeed, setLiveSpeed] = useState(0);
  const [result, setResult] = useState<TestResult | null>(null);
  const [history, setHistory] = useState<TestResult[]>(loadHistory);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  // ── Ping ────────────────────────────────────────────────────────────────

  async function doPing(signal: AbortSignal): Promise<{
    ping: number;
    jitter: number;
    packetLoss: number;
  }> {
    const times: number[] = [];
    let failed = 0;
    const N = 8;

    for (let i = 0; i < N; i++) {
      if (signal.aborted) break;
      const t = performance.now();
      try {
        await fetch(`${CF}/__down?bytes=0`, {
          signal,
          cache: 'no-store',
          mode: 'cors',
        });
        times.push(performance.now() - t);
      } catch {
        if (signal.aborted) break;
        failed++;
      }
      setProgress(5 + (i / N) * 15);
    }

    return {
      ping: Math.round(median(times)),
      jitter: Math.round(calcJitter(times)),
      packetLoss: r1((failed / N) * 100),
    };
  }

  // ── Download ────────────────────────────────────────────────────────────

  async function doDownload(
    signal: AbortSignal,
    onLive: (s: number) => void,
  ): Promise<number> {
    // Warmup: small fetch to prime the connection
    const wt = performance.now();
    const wr = await fetch(`${CF}/__down?bytes=500000`, {
      signal,
      cache: 'no-store',
      mode: 'cors',
    });
    await wr.arrayBuffer();
    const warmupSpeed =
      (500_000 * 8) / ((performance.now() - wt) / 1000) / 1_000_000;

    // Adapt chunk size to connection speed
    const chunkBytes =
      warmupSpeed > 200
        ? 50_000_000
        : warmupSpeed > 50
          ? 20_000_000
          : warmupSpeed > 10
            ? 10_000_000
            : 3_000_000;
    const concurrency = warmupSpeed > 100 ? 4 : warmupSpeed > 20 ? 3 : 2;

    const samples: number[] = [];

    for (let round = 0; round < 3 && !signal.aborted; round++) {
      const t0 = performance.now();
      let total = 0;

      await Promise.all(
        Array.from({ length: concurrency }, async () => {
          const resp = await fetch(`${CF}/__down?bytes=${chunkBytes}`, {
            signal,
            cache: 'no-store',
            mode: 'cors',
          });
          if (!resp.body) {
            await resp.arrayBuffer();
            return;
          }
          const reader = resp.body.getReader();
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              total += value.length;
              const elapsed = (performance.now() - t0) / 1000;
              if (elapsed > 0) onLive((total * 8) / elapsed / 1_000_000);
            }
          } finally {
            reader.releaseLock();
          }
        }),
      );

      const elapsed = (performance.now() - t0) / 1000;
      if (elapsed > 0) samples.push((total * 8) / elapsed / 1_000_000);
      setProgress(20 + (round + 1) * 13);
    }

    return r1(median(samples));
  }

  // ── Upload ──────────────────────────────────────────────────────────────

  async function doUpload(
    signal: AbortSignal,
    onLive: (s: number) => void,
  ): Promise<number> {
    const CHUNK = 2_000_000; // 2 MB per round
    const samples: number[] = [];

    for (let i = 0; i < 4 && !signal.aborted; i++) {
      const body = new ArrayBuffer(CHUNK);
      const t0 = performance.now();
      try {
        await fetch(`${CF}/__up`, {
          method: 'POST',
          body,
          signal,
          cache: 'no-store',
          mode: 'cors',
          headers: { 'Content-Type': 'text/plain' },
        });
        const speed =
          (CHUNK * 8) / ((performance.now() - t0) / 1000) / 1_000_000;
        samples.push(speed);
        onLive(speed);
      } catch {
        if (signal.aborted) break;
      }
      setProgress(60 + (i + 1) * 9);
    }

    return r1(median(samples));
  }

  // ── Orchestration ────────────────────────────────────────────────────────

  const startTest = useCallback(async () => {
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    const { signal } = ctrl;

    setPhase('warmup');
    setProgress(2);
    setLiveSpeed(0);
    setError(null);
    setResult(null);

    try {
      setPhase('ping');
      const pingData = await doPing(signal);

      setPhase('download');
      const download = await doDownload(signal, s => setLiveSpeed(s));
      setLiveSpeed(0);

      setPhase('upload');
      const upload = await doUpload(signal, s => setLiveSpeed(s));
      setLiveSpeed(0);
      setProgress(100);

      const conn = (navigator as { connection?: { effectiveType?: string } })
        .connection;
      const res: TestResult = {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        download,
        upload,
        ping: pingData.ping,
        jitter: pingData.jitter,
        packetLoss: pingData.packetLoss,
        quality: calcQuality(download, pingData.ping, pingData.packetLoss),
        connectionType: conn?.effectiveType,
      };

      setResult(res);
      setHistory(prev => {
        const updated = [res, ...prev].slice(0, 10);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
        return updated;
      });
      setPhase('complete');
    } catch (e) {
      if ((e as Error)?.name === 'AbortError') return;
      setError((e as Error)?.message || 'Test failed. Please try again.');
      setPhase('error');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cancelTest = useCallback(() => {
    abortRef.current?.abort();
    setPhase('idle');
    setProgress(0);
    setLiveSpeed(0);
  }, []);

  const clearHistory = useCallback(() => {
    localStorage.removeItem(HISTORY_KEY);
    setHistory([]);
  }, []);

  return {
    phase,
    progress,
    liveSpeed,
    result,
    history,
    error,
    startTest,
    cancelTest,
    clearHistory,
  };
}
