import { motion } from 'framer-motion';
import { useMemo } from 'react';
import type { TestPhase } from '@/types/speedTest';

interface SpeedometerProps {
  value: number;       // Mbps
  maxValue?: number;   // Mbps
  phase: TestPhase;
  label?: string;
}

const CX = 200;
const CY = 185;
const R = 138;
const START_DEG = 225; // 7:30 position (lower-left)
const SWEEP = 270;     // degrees
const CIRCUMFERENCE = (SWEEP / 360) * 2 * Math.PI * R; // arc length

// Convert "clock degrees" (0=12 o'clock, CW) to SVG x,y coords
function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

// Full background arc path (always 270°)
function backgroundArcPath() {
  const s = polar(CX, CY, R, START_DEG);
  const e = polar(CX, CY, R, START_DEG + SWEEP);
  // 270° sweep — large arc (> 180°), clockwise
  return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${R} ${R} 0 1 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
}

function formatValue(v: number): string {
  if (v === 0) return '0';
  if (v >= 1000) return (v / 1000).toFixed(2);
  if (v >= 100) return Math.round(v).toString();
  return v.toFixed(1);
}

function getUnit(v: number): string {
  return v >= 1000 ? 'Gbps' : 'Mbps';
}

export function Speedometer({ value, maxValue = 1000, phase, label }: SpeedometerProps) {
  const fraction = Math.min(1, Math.max(0, value / maxValue));
  const dashOffset = CIRCUMFERENCE * (1 - fraction);

  const isUpload = phase === 'upload';
  const isActive = phase === 'download' || phase === 'upload';

  const gradId = isUpload ? 'ulGrad' : 'dlGrad';

  // Tick marks: 9 evenly spaced ticks (0% → 100%)
  const ticks = useMemo(() => {
    return Array.from({ length: 9 }, (_, i) => {
      const frac = i / 8;
      const deg = START_DEG + frac * SWEEP;
      const outer = polar(CX, CY, R + 16, deg);
      const inner = polar(CX, CY, R + 6, deg);
      const labelPos = polar(CX, CY, R + 30, deg);
      const major = i % 2 === 0;
      const speed = Math.round(maxValue * frac);
      return { outer, inner, labelPos, major, speed, i };
    });
  }, [maxValue]);

  // Needle tip position
  const needleAngle = START_DEG + fraction * SWEEP;
  const needleTip = polar(CX, CY, R - 12, needleAngle);
  const needleBase1 = polar(CX, CY, 18, needleAngle + 90);
  const needleBase2 = polar(CX, CY, 18, needleAngle - 90);

  const bgPath = backgroundArcPath();

  return (
    <svg
      viewBox="0 0 400 290"
      className="w-full max-w-[420px]"
      aria-label={`Speed: ${formatValue(value)} ${getUnit(value)}`}
      role="img"
    >
      <defs>
        {/* Download gradient: indigo → cyan */}
        <linearGradient id="dlGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="60%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        {/* Upload gradient: emerald → cyan */}
        <linearGradient id="ulGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="needleGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Track arc ──────────────────────────────────────────────── */}
      <path
        d={bgPath}
        fill="none"
        stroke="currentColor"
        strokeOpacity={0.1}
        strokeWidth={14}
        strokeLinecap="round"
      />

      {/* ── Fill arc ───────────────────────────────────────────────── */}
      <motion.path
        d={bgPath}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth={14}
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        initial={{ strokeDashoffset: CIRCUMFERENCE }}
        animate={{ strokeDashoffset: dashOffset }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        filter={isActive ? 'url(#arcGlow)' : undefined}
      />

      {/* ── Tick marks ─────────────────────────────────────────────── */}
      {ticks.map(({ outer, inner, labelPos, major, speed, i }) => (
        <g key={i}>
          <line
            x1={inner.x}
            y1={inner.y}
            x2={outer.x}
            y2={outer.y}
            stroke="currentColor"
            strokeOpacity={major ? 0.35 : 0.18}
            strokeWidth={major ? 2 : 1}
          />
          {major && (
            <text
              x={labelPos.x}
              y={labelPos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={9}
              fill="currentColor"
              fillOpacity={0.35}
              fontFamily="inherit"
            >
              {speed >= 1000 ? `${speed / 1000}G` : speed}
            </text>
          )}
        </g>
      ))}

      {/* ── Needle ─────────────────────────────────────────────────── */}
      {fraction > 0 && (
        <motion.polygon
          points={`${needleTip.x},${needleTip.y} ${needleBase1.x},${needleBase1.y} ${needleBase2.x},${needleBase2.y}`}
          fill={`url(#${gradId})`}
          fillOpacity={0.9}
          filter="url(#needleGlow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* ── Needle hub ─────────────────────────────────────────────── */}
      <circle cx={CX} cy={CY} r={10} fill="currentColor" fillOpacity={0.15} />
      <circle cx={CX} cy={CY} r={5} fill="currentColor" fillOpacity={0.4} />

      {/* ── Speed value ────────────────────────────────────────────── */}
      <motion.text
        key={formatValue(value)}
        x={CX}
        y={CY - 28}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={56}
        fontWeight={800}
        fill="currentColor"
        fontFamily="inherit"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
      >
        {formatValue(value)}
      </motion.text>

      {/* ── Unit ───────────────────────────────────────────────────── */}
      <text
        x={CX}
        y={CY + 14}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={15}
        fill="currentColor"
        fillOpacity={0.45}
        fontFamily="inherit"
        fontWeight={500}
        letterSpacing={1}
      >
        {getUnit(value).toUpperCase()}
      </text>

      {/* ── Phase label ────────────────────────────────────────────── */}
      {label && (
        <text
          x={CX}
          y={CY + 36}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={11}
          fill="currentColor"
          fillOpacity={0.4}
          fontFamily="inherit"
          fontWeight={600}
          letterSpacing={2}
        >
          {label.toUpperCase()}
        </text>
      )}
    </svg>
  );
}
