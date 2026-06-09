export type TestPhase =
  | 'idle'
  | 'warmup'
  | 'ping'
  | 'download'
  | 'upload'
  | 'complete'
  | 'error';

export type NetworkQuality = 'excellent' | 'good' | 'fair' | 'poor';

export interface TestResult {
  id: string;
  timestamp: number;
  download: number;    // Mbps
  upload: number;      // Mbps
  ping: number;        // ms
  jitter: number;      // ms
  packetLoss: number;  // %
  quality: NetworkQuality;
  connectionType?: string;
}
