import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Upload,
  Wifi,
  Activity,
  AlertCircle,
  CheckCircle2,
  Trophy,
  Gamepad2,
  Video,
  MonitorPlay,
  Share2,
  Trash2,
  Clock,
  Globe,
  Cpu,
  BarChart3,
  RefreshCw,
  X,
  ChevronDown,
  Rocket,
} from "lucide-react";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { SEO } from "@/components/SEO";
import { Speedometer } from "@/components/SpeedTest/Speedometer";
import { useSpeedTest } from "@/hooks/useSpeedTest";
import { cn } from "@/lib/utils";
import type { TestResult, NetworkQuality, TestPhase } from "@/types/speedTest";

// ── Helpers ───────────────────────────────────────────────────────────────────

function fmtSpeed(mbps: number): string {
  if (mbps === 0) return "0 Mbps";
  if (mbps >= 1000) return `${(mbps / 1000).toFixed(2)} Gbps`;
  if (mbps >= 100) return `${Math.round(mbps)} Mbps`;
  return `${mbps.toFixed(1)} Mbps`;
}

function fmtDate(ts: number): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(ts));
}

const QUALITY_CONFIG: Record<
  NetworkQuality,
  { label: string; color: string; bg: string; ring: string }
> = {
  excellent: {
    label: "Excellent",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/30",
  },
  good: {
    label: "Good",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    ring: "ring-blue-500/30",
  },
  fair: {
    label: "Fair",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    ring: "ring-amber-500/30",
  },
  poor: {
    label: "Poor",
    color: "text-red-400",
    bg: "bg-red-500/10",
    ring: "ring-red-500/30",
  },
};

const PHASE_LABEL: Record<TestPhase, string> = {
  idle: "",
  warmup: "Initialising…",
  ping: "Measuring latency…",
  download: "Testing download…",
  upload: "Testing upload…",
  complete: "Test complete",
  error: "Test failed",
};

// ── Diagnostic capability check ──────────────────────────────────────────────

interface Capability {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  requirement: string;
  check: (r: TestResult) => boolean;
}

const CAPABILITIES: Capability[] = [
  {
    icon: MonitorPlay,
    label: "4K Streaming",
    requirement: "≥ 25 Mbps",
    check: (r) => r.download >= 25,
  },
  {
    icon: Video,
    label: "Video Calls",
    requirement: "≥ 10 Mbps / ≤ 100ms ping",
    check: (r) => r.download >= 10 && r.ping <= 100,
  },
  {
    icon: Gamepad2,
    label: "Online Gaming",
    requirement: "≥ 5 Mbps / ≤ 50ms ping",
    check: (r) => r.download >= 5 && r.ping <= 50,
  },
  {
    icon: Trophy,
    label: "Competitive Gaming",
    requirement: "≥ 25 Mbps / ≤ 20ms ping",
    check: (r) => r.download >= 25 && r.ping <= 20,
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function MetricCard({
  icon: Icon,
  label,
  value,
  unit,
  color,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  unit?: string;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/60 p-5"
    >
      <div className={cn("mb-3 inline-flex rounded-xl p-2.5", color)}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-2xl font-extrabold text-foreground leading-none">
        {value}
        {unit && (
          <span className="ml-1 text-sm font-medium text-muted-foreground">
            {unit}
          </span>
        )}
      </div>
      <div className="mt-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

function ProgressBar({
  progress,
  phase,
}: {
  progress: number;
  phase: TestPhase;
}) {
  const isActive =
    phase !== "idle" && phase !== "complete" && phase !== "error";

  return (
    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700/60">
      <motion.div
        className={cn(
          "absolute inset-y-0 left-0 rounded-full",
          phase === "download" || phase === "warmup" || phase === "ping"
            ? "bg-gradient-to-r from-indigo-500 to-cyan-400"
            : "bg-gradient-to-r from-emerald-500 to-cyan-400",
        )}
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      {isActive && (
        <motion.div
          className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ["-80px", "100vw"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}

function QualityBadge({ quality }: { quality: NetworkQuality }) {
  const cfg = QUALITY_CONFIG[quality];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold ring-1",
        cfg.bg,
        cfg.color,
        cfg.ring,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            quality === "excellent"
              ? "bg-emerald-400"
              : quality === "good"
                ? "bg-blue-400"
                : quality === "fair"
                  ? "bg-amber-400"
                  : "bg-red-400",
          )}
        />
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            quality === "excellent"
              ? "bg-emerald-400"
              : quality === "good"
                ? "bg-blue-400"
                : quality === "fair"
                  ? "bg-amber-400"
                  : "bg-red-400",
          )}
        />
      </span>
      {cfg.label}
    </span>
  );
}

function GaugeTab({
  active,
  label,
  value,
  onClick,
}: {
  active: boolean;
  label: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-0.5 rounded-xl px-4 py-2.5 transition-all text-sm font-semibold",
        active
          ? "bg-slate-100 dark:bg-white/10 text-foreground ring-1 ring-slate-300 dark:ring-white/15"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      <span className="text-[11px] font-bold uppercase tracking-widest opacity-60">
        {label}
      </span>
      <span>{value}</span>
    </button>
  );
}

// ── History table row ─────────────────────────────────────────────────────────

function HistoryRow({ result, index }: { result: TestResult; index: number }) {
  const cfg = QUALITY_CONFIG[result.quality];
  return (
    <motion.tr
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04 }}
      className="border-t border-slate-200 dark:border-slate-700/50 text-sm"
    >
      <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">
        {fmtDate(result.timestamp)}
      </td>
      <td className="py-3 pr-4 font-semibold">{fmtSpeed(result.download)}</td>
      <td className="py-3 pr-4 font-semibold">{fmtSpeed(result.upload)}</td>
      <td className="py-3 pr-4">{result.ping} ms</td>
      <td className="py-3">
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-bold",
            cfg.bg,
            cfg.color,
          )}
        >
          {cfg.label}
        </span>
      </td>
    </motion.tr>
  );
}

// ── Export helpers ────────────────────────────────────────────────────────────

function exportJSON(history: TestResult[]) {
  const blob = new Blob([JSON.stringify(history, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `speed-results-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportCSV(history: TestResult[]) {
  const header =
    "Date,Download (Mbps),Upload (Mbps),Ping (ms),Jitter (ms),Packet Loss (%),Quality\n";
  const rows = history
    .map(
      (r) =>
        `"${fmtDate(r.timestamp)}",${r.download},${r.upload},${r.ping},${r.jitter},${r.packetLoss},${r.quality}`,
    )
    .join("\n");
  const blob = new Blob([header + rows], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `speed-results-${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function copyResult(result: TestResult) {
  const text = [
    `Speed Test Results — ${fmtDate(result.timestamp)}`,
    `Download: ${fmtSpeed(result.download)}`,
    `Upload:   ${fmtSpeed(result.upload)}`,
    `Ping:     ${result.ping} ms`,
    `Jitter:   ${result.jitter} ms`,
    `Packet Loss: ${result.packetLoss}%`,
    `Quality:  ${QUALITY_CONFIG[result.quality].label}`,
  ].join("\n");
  navigator.clipboard.writeText(text).catch(() => {});
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function SpeedTest() {
  const {
    phase,
    progress,
    liveSpeed,
    result,
    history,
    error,
    startTest,
    cancelTest,
    clearHistory,
  } = useSpeedTest();

  // Which metric the gauge shows (only meaningful after complete)
  const [gaugeView, setGaugeView] = useState<"download" | "upload" | "ping">(
    "download",
  );
  const [copied, setCopied] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showDetailedMetrics, setShowDetailedMetrics] = useState(false);

  // Auto-switch gauge view during test
  useEffect(() => {
    if (phase === "download") setGaugeView("download");
    if (phase === "upload") setGaugeView("upload");
  }, [phase]);

  const isRunning =
    phase === "warmup" ||
    phase === "ping" ||
    phase === "download" ||
    phase === "upload";

  // Determine what value to show on gauge
  let gaugeValue = 0;
  let gaugeMax = 1000;
  let gaugePhase: TestPhase = phase;
  let gaugeLabel = "";

  if (isRunning) {
    gaugeValue = liveSpeed;
    if (phase === "download") gaugeLabel = "Download";
    else if (phase === "upload") gaugeLabel = "Upload";
    else if (phase === "ping") gaugeLabel = "Ping";
    else if (phase === "warmup") gaugeLabel = "Warmup";
  } else if (phase === "complete" && result) {
    if (gaugeView === "download") {
      gaugeValue = result.download;
      gaugePhase = "download";
      gaugeLabel = "Download";
    } else if (gaugeView === "upload") {
      gaugeValue = result.upload;
      gaugePhase = "upload";
      gaugeLabel = "Upload";
    } else {
      gaugeValue = result.ping;
      gaugeMax = 200;
      gaugePhase = "download"; // neutral colour
      gaugeLabel = "Ping";
    }
  }

  // Adapt gauge max to connection speed
  if (isRunning && liveSpeed > 900) gaugeMax = 10000;
  else if (isRunning && liveSpeed > 90) gaugeMax = 1000;
  else if (isRunning) gaugeMax = 100;

  const handleCopy = useCallback(() => {
    if (!result) return;
    copyResult(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [result]);

  const deviceInfo = (() => {
    const ua = navigator.userAgent;
    const mobile = /Mobi|Android/i.test(ua);
    return mobile ? "Mobile" : "Desktop";
  })();

  const browserInfo = (() => {
    const ua = navigator.userAgent;
    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("Edg")) return "Edge";
    if (ua.includes("Chrome")) return "Chrome";
    if (ua.includes("Safari")) return "Safari";
    return "Browser";
  })();

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] text-foreground overflow-x-clip selection:bg-indigo-500/30 transition-colors duration-300">
      <SEO
        title="Internet Speed Test | MindSync Solutions"
        description="Test your internet connection speed: download, upload, ping, jitter, and packet loss. Real-time results with historical tracking."
        canonicalUrl="https://mindsync.solutions/speed"
      />

      <Navbar />

      {/* Background blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/8 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-cyan-500/5 dark:bg-cyan-500/8 blur-[100px]" />
        <div className="absolute top-[40%] left-[50%] w-[25%] h-[25%] rounded-full bg-purple-500/4 dark:bg-purple-500/6 blur-[80px]" />
      </div>

      <main className="relative z-10 px-4 pb-24 pt-28">
        <div className="mx-auto max-w-3xl">
          {/* ── Hero heading ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Internet Speed Test
            </h1>
            <p className="mt-3 text-base text-muted-foreground max-w-md mx-auto">
              Measure download, upload, latency, jitter, and packet loss across
              multiple parallel connections.
            </p>
          </motion.div>

          {/* ── Main test card ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/50"
          >
            {/* Card inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/3 via-transparent to-transparent" />

            <div className="relative p-6 sm:p-8">
              {/* ── Gauge view tabs (visible after complete) ───────────── */}
              <AnimatePresence>
                {phase === "complete" && result && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mb-4 flex items-center justify-center gap-1"
                  >
                    <GaugeTab
                      active={gaugeView === "download"}
                      label="Download"
                      value={fmtSpeed(result.download)}
                      onClick={() => setGaugeView("download")}
                    />
                    <GaugeTab
                      active={gaugeView === "upload"}
                      label="Upload"
                      value={fmtSpeed(result.upload)}
                      onClick={() => setGaugeView("upload")}
                    />
                    <GaugeTab
                      active={gaugeView === "ping"}
                      label="Ping"
                      value={`${result.ping} ms`}
                      onClick={() => setGaugeView("ping")}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Speedometer ────────────────────────────────────────── */}
              <div className="flex flex-col items-center gap-1">
                <Speedometer
                  value={gaugeValue}
                  maxValue={gaugeMax}
                  phase={gaugePhase}
                />
                {/* Speed readout below the gauge */}
                <div className="flex flex-col items-center -mt-2 mb-2">
                  <motion.span
                    key={gaugeValue}
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className="text-5xl font-extrabold tabular-nums leading-none tracking-tight text-foreground"
                  >
                    {gaugeValue >= 1000
                      ? (gaugeValue / 1000).toFixed(2)
                      : gaugeValue >= 100
                        ? Math.round(gaugeValue).toString()
                        : gaugeValue === 0
                          ? "0"
                          : gaugeValue.toFixed(1)}
                  </motion.span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                      {gaugeValue >= 1000 ? "Gbps" : "Mbps"}
                    </span>
                    {gaugeLabel && (
                      <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">
                        {gaugeLabel}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Phase status ───────────────────────────────────────── */}
              <AnimatePresence mode="wait">
                {isRunning && (
                  <motion.div
                    key={phase}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mb-4 text-center"
                  >
                    <p className="text-sm font-semibold text-muted-foreground">
                      {PHASE_LABEL[phase]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Progress bar ───────────────────────────────────────── */}
              <div className="mb-6 px-2">
                <ProgressBar progress={progress} phase={phase} />
                {isRunning && (
                  <div className="mt-1.5 flex justify-between text-[11px] text-muted-foreground">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                )}
              </div>

              {/* ── Live mini-metrics during test ──────────────────────── */}
              <AnimatePresence>
                {isRunning && phase === "ping" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 flex justify-center gap-6 text-sm text-muted-foreground"
                  >
                    <div className="flex items-center gap-1.5">
                      <Wifi className="h-4 w-4 text-indigo-400" />
                      Measuring latency…
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Error message ──────────────────────────────────────── */}
              <AnimatePresence>
                {phase === "error" && error && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/8 p-4 text-sm text-red-400"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <div>
                      <p className="font-semibold">Test failed</p>
                      <p className="mt-0.5 opacity-80">{error}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── CTA button ─────────────────────────────────────────── */}
              <div className="flex justify-center gap-3">
                {!isRunning ? (
                  <motion.button
                    onClick={startTest}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-12 py-4 text-base font-black text-white shadow-lg shadow-indigo-500/30 transition-shadow hover:shadow-indigo-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    aria-label="Start speed test"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {phase === "complete" || phase === "error" ? (
                        <>
                          <RefreshCw className="h-4 w-4" /> Retest
                        </>
                      ) : (
                        <>
                          <Rocket className="h-4 w-4" /> Start Test
                        </>
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%", skewX: -15 }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={cancelTest}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/60 px-8 py-4 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Cancel test"
                  >
                    <X className="h-4 w-4" />
                    Cancel
                  </motion.button>
                )}
              </div>

              {/* ── Device / browser info ──────────────────────────────── */}
              <div className="mt-5 flex flex-wrap justify-center gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Cpu className="h-3 w-3" /> {deviceInfo}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="h-3 w-3" /> {browserInfo}
                </span>
                {result?.connectionType && (
                  <span className="flex items-center gap-1">
                    <Wifi className="h-3 w-3" />{" "}
                    {result.connectionType.toUpperCase()}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── Results dashboard ─────────────────────────────────────── */}
          <AnimatePresence>
            {phase === "complete" && result && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6 space-y-4"
              >
                {/* Quality badge + timestamp */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-1">
                  <div className="flex items-center gap-3">
                    <QualityBadge quality={result.quality} />
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {fmtDate(result.timestamp)}
                    </span>
                  </div>
                  {/* Share / copy actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />{" "}
                          Copied
                        </>
                      ) : (
                        <>
                          <Share2 className="h-3.5 w-3.5" /> Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* ── Diagnostics (Capability Check) ─────────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/50 p-5"
                >
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Capability Check
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {CAPABILITIES.map(
                      ({ icon: Icon, label, requirement, check }) => {
                        const ok = check(result);
                        return (
                          <div
                            key={label}
                            className={cn(
                              "flex items-start gap-3 rounded-xl p-3 transition-colors",
                              ok
                                ? "bg-emerald-50 dark:bg-emerald-500/10 ring-1 ring-emerald-200 dark:ring-emerald-500/20"
                                : "bg-slate-100 dark:bg-slate-700/30 ring-1 ring-slate-200 dark:ring-slate-700/50 opacity-60",
                            )}
                          >
                            <div
                              className={cn(
                                "mt-0.5 rounded-lg p-1.5",
                                ok
                                  ? "bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                                  : "bg-slate-200 dark:bg-slate-700/60 text-muted-foreground",
                              )}
                            >
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <p
                                className={cn(
                                  "text-xs font-bold",
                                  ok
                                    ? "text-foreground"
                                    : "text-muted-foreground",
                                )}
                              >
                                {label}
                              </p>
                              <p className="text-[10px] text-muted-foreground mt-0.5">
                                {requirement}
                              </p>
                            </div>
                            <div className="ml-auto shrink-0">
                              {ok ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <X className="h-4 w-4 text-muted-foreground/50" />
                              )}
                            </div>
                          </div>
                        );
                      },
                    )}
                  </div>
                </motion.div>

                {/* ── Toggle button for detailed breakdown ─────────────────── */}
                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => setShowDetailedMetrics(!showDetailedMetrics)}
                    className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider py-2.5 px-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 hover:bg-slate-100 dark:hover:bg-slate-800/50 border border-slate-200 dark:border-slate-700/40"
                  >
                    {showDetailedMetrics
                      ? "Hide Detailed Metrics"
                      : "Show Detailed Metrics"}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        showDetailedMetrics && "rotate-180",
                      )}
                    />
                  </button>
                </div>

                {/* ── Expandable Metric Cards Grid ─────────────────────────── */}
                <AnimatePresence initial={false}>
                  {showDetailedMetrics && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 pt-3">
                        <MetricCard
                          icon={Download}
                          label="Download"
                          value={
                            result.download >= 1000
                              ? (result.download / 1000).toFixed(2)
                              : result.download.toFixed(1)
                          }
                          unit={result.download >= 1000 ? "Gbps" : "Mbps"}
                          color="bg-indigo-500/12 text-indigo-400"
                          delay={0}
                        />
                        <MetricCard
                          icon={Upload}
                          label="Upload"
                          value={
                            result.upload >= 1000
                              ? (result.upload / 1000).toFixed(2)
                              : result.upload.toFixed(1)
                          }
                          unit={result.upload >= 1000 ? "Gbps" : "Mbps"}
                          color="bg-emerald-500/12 text-emerald-400"
                          delay={0.05}
                        />
                        <MetricCard
                          icon={Wifi}
                          label="Ping"
                          value={String(result.ping)}
                          unit="ms"
                          color="bg-cyan-500/12 text-cyan-400"
                          delay={0.1}
                        />
                        <MetricCard
                          icon={Activity}
                          label="Jitter"
                          value={String(result.jitter)}
                          unit="ms"
                          color="bg-purple-500/12 text-purple-400"
                          delay={0.15}
                        />
                        <MetricCard
                          icon={AlertCircle}
                          label="Packet Loss"
                          value={String(result.packetLoss)}
                          unit="%"
                          color="bg-amber-500/12 text-amber-400"
                          delay={0.2}
                        />
                        <MetricCard
                          icon={BarChart3}
                          label="Quality"
                          value={QUALITY_CONFIG[result.quality].label}
                          color={cn(
                            "bg-white/8",
                            QUALITY_CONFIG[result.quality].color,
                          )}
                          delay={0.25}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── History section ───────────────────────────────────────── */}
          {history.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/50 overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setShowHistory((v) => !v)}
                className="flex w-full items-center justify-between px-5 py-4 text-sm font-bold text-foreground hover:bg-slate-100 dark:hover:bg-slate-700/40 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-indigo-400" />
                  Test History
                  <span className="rounded-full bg-indigo-500/15 px-2 py-0.5 text-xs text-indigo-400">
                    {history.length}
                  </span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      exportJSON(history);
                    }}
                    className="rounded-lg px-2.5 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors"
                  >
                    JSON
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      exportCSV(history);
                    }}
                    className="rounded-lg px-2.5 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors"
                  >
                    CSV
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearHistory();
                    }}
                    className="rounded-lg p-1 text-muted-foreground hover:text-red-400 transition-colors"
                    title="Clear history"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform",
                      showHistory && "rotate-180",
                    )}
                  />
                </div>
              </button>

              {/* Table */}
              <AnimatePresence>
                {showHistory && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="overflow-x-auto px-5 pb-4">
                      <table className="w-full min-w-[480px]">
                        <thead>
                          <tr className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            <th className="pb-2 pr-4 text-left">Time</th>
                            <th className="pb-2 pr-4 text-left">Download</th>
                            <th className="pb-2 pr-4 text-left">Upload</th>
                            <th className="pb-2 pr-4 text-left">Ping</th>
                            <th className="pb-2 text-left">Quality</th>
                          </tr>
                        </thead>
                        <tbody>
                          {history.map((r, i) => (
                            <HistoryRow key={r.id} result={r} index={i} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ── Info strip ────────────────────────────────────────────── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center text-xs text-muted-foreground"
          >
            Tests use multiple parallel connections via Cloudflare's global
            network. Results reflect real-world throughput from your location.
          </motion.p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
