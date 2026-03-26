'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

/* ─────────────────────────────────────────────
   KEYFRAMES  (injected once, no extra dep)
───────────────────────────────────────────── */
const KEYFRAMES = `
@keyframes orbitFloat {
  0%,100% { transform: translateY(0px) scale(1); }
  50%      { transform: translateY(-10px) scale(1.03); }
}
@keyframes pulseRing {
  0%   { transform: scale(0.9); opacity: 0.6; }
  70%  { transform: scale(1.35); opacity: 0; }
  100% { transform: scale(0.9); opacity: 0; }
}
@keyframes dashDraw {
  from { stroke-dashoffset: 400; }
  to   { stroke-dashoffset: 0; }
}
@keyframes countUp {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes screenBlink {
  0%,100% { opacity: 0.9; }
  50%      { opacity: 1; }
}
`

/* ─────────────────────────────────────────────
   FLOATING BUBBLE DATA
───────────────────────────────────────────── */
const bubbles = [
  {
    id: 'products',
    label: '5 Products',
    sub: 'Shipped & Live',
    icon: '🚀',
    size: 96,
    pos: { top: '12%', right: '30%' },
    delay: 0,
    dur: 4.2,
    accent: '#4F46E5',
  },
  {
    id: 'rating',
    label: '4.9 / 5',
    sub: 'Client Rating',
    icon: '⭐',
    size: 110,
    pos: { top: '42%', right: '6%' },
    delay: 0.4,
    dur: 3.8,
    accent: '#F59E0B',
  },
  {
    id: 'india',
    label: 'India',
    sub: 'Built in 🇮🇳',
    icon: '📍',
    size: 84,
    pos: { bottom: '22%', right: '26%' },
    delay: 0.8,
    dur: 5.0,
    accent: '#0ABFA3',
  },
  {
    id: 'clients',
    label: '20+',
    sub: 'Happy Clients',
    icon: '🤝',
    size: 88,
    pos: { top: '68%', right: '50%' },
    delay: 1.2,
    dur: 4.6,
    accent: '#EC4899',
  },
]

/* ─────────────────────────────────────────────
   CENTRAL DASHBOARD CARD
───────────────────────────────────────────── */
function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="absolute"
      style={{ top: '28%', right: '34%', zIndex: 10 }}
    >
      <div
        className="rounded-2xl shadow-2xl overflow-hidden border border-white/80"
        style={{
          width: 180,
          background: 'white',
          boxShadow: '0 20px 60px rgba(79,70,229,0.18)',
        }}
      >
        {/* Header */}
        <div
          className="px-4 py-3 flex items-center gap-2"
          style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
        >
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <span
            className="text-white text-xs font-semibold ml-1 font-mono"
            style={{ animation: 'screenBlink 3s ease-in-out infinite' }}
          >
            ZenTech OS
          </span>
        </div>
        {/* Body */}
        <div className="p-3 space-y-2">
          {[
            { label: 'Uptime', val: '99.9%', color: '#0ABFA3' },
            { label: 'Deploy', val: 'Live ✓', color: '#4F46E5' },
            { label: 'Users', val: '12.4K', color: '#F59E0B' },
          ].map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.12 }}
              className="flex items-center justify-between"
            >
              <span className="text-xs text-gray-400">{row.label}</span>
              <span className="text-xs font-bold" style={{ color: row.color }}>
                {row.val}
              </span>
            </motion.div>
          ))}
          {/* Mini bar chart */}
          <div className="flex items-end gap-0.5 pt-2 h-10">
            {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                style={{ background: i === 5 ? '#4F46E5' : '#E0E7FF' }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.3 + i * 0.06, duration: 0.4, ease: 'backOut' }}
                style={{
                  height: `${h}%`,
                  background: i === 5 ? '#4F46E5' : '#E0E7FF',
                  transformOrigin: 'bottom',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   FLOATING BUBBLE
───────────────────────────────────────────── */
function Bubble({ bubble }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 + bubble.delay, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className="absolute flex flex-col items-center justify-center rounded-full bg-white border border-white/90 cursor-default select-none"
      style={{
        ...bubble.pos,
        width: bubble.size,
        height: bubble.size,
        boxShadow: `0 8px 32px ${bubble.accent}22, 0 2px 8px rgba(0,0,0,0.06)`,
        animation: `orbitFloat ${bubble.dur}s ease-in-out ${bubble.delay}s infinite`,
        zIndex: 12,
      }}
    >
      {/* Pulse ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `2px solid ${bubble.accent}`,
          animation: `pulseRing 2.8s ease-out ${bubble.delay}s infinite`,
        }}
      />
      <span className="text-xl leading-none">{bubble.icon}</span>
      <span className="text-xs font-bold text-gray-800 mt-0.5 leading-tight">{bubble.label}</span>
      <span className="text-[9px] text-gray-400 leading-tight text-center px-1">{bubble.sub}</span>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   CONNECTION LINES (SVG — drawn on load)
───────────────────────────────────────────── */
function ConnectionLines() {
  // Lines from approximate center of dashboard card to each bubble
  // All in % of the right-side panel (600px wide, 560px tall conceptually)
  const lines = [
    { x1: '48%', y1: '38%', x2: '70%', y2: '18%' }, // → products
    { x1: '48%', y1: '42%', x2: '94%', y2: '52%' }, // → rating
    { x1: '48%', y1: '46%', x2: '74%', y2: '74%' }, // → india
    { x1: '48%', y1: '44%', x2: '50%', y2: '73%' }, // → clients
  ]
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 8 }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={`rgba(79,70,229,${0.15 + i * 0.04})`}
          strokeWidth="0.3"
          strokeDasharray="2 2"
          style={{
            animation: `dashDraw 1.2s ease ${0.8 + i * 0.15}s both`,
            strokeDashoffset: 400,
          }}
        />
      ))}
    </svg>
  )
}

/* ─────────────────────────────────────────────
   MULTI-LAYER BOTTOM WAVE — tall & dramatic
   Waves overlap so they visually "flow into"
   the Products section below
───────────────────────────────────────────── */
function BottomWave() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none"
      style={{ zIndex: 20, lineHeight: 0 }}
    >
      {/* Layer 4 — deepest blush, widest peak */}
      <svg
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: 220, marginBottom: -4 }}
      >
        <path
          d="M0,140 C160,230 360,40 560,110 C760,180 960,30 1140,100 C1280,150 1380,80 1440,100 L1440,260 L0,260 Z"
          fill="rgba(224,231,255,0.50)"
        />
      </svg>

      {/* Layer 3 — mid violet tint */}
      <svg
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: 195, marginTop: -120, marginBottom: -4 }}
      >
        <path
          d="M0,80 C200,180 440,20 660,90 C880,160 1080,30 1260,95 C1360,128 1420,70 1440,85 L1440,240 L0,240 Z"
          fill="rgba(199,210,254,0.42)"
        />
      </svg>

      {/* Layer 2 — soft indigo */}
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: 165, marginTop: -100, marginBottom: -4 }}
      >
        <path
          d="M0,100 C100,40 280,160 480,100 C680,40 860,145 1060,85 C1200,42 1340,120 1440,95 L1440,220 L0,220 Z"
          fill="rgba(238,242,255,0.65)"
        />
      </svg>

      {/* Layer 1 — top white, the crisp edge */}
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: 140, marginTop: -80 }}
      >
        <path
          d="M0,120 C120,55 320,175 520,115 C720,55 900,160 1100,105 C1240,65 1370,135 1440,110 L1440,200 L0,200 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  )
}

/* ─────────────────────────────────────────────
   HERO  (main export)
───────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      <style>{KEYFRAMES}</style>

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-visible pt-24 pb-56"
        style={{ background: 'linear-gradient(160deg, #F0F4FF 0%, #F8F6FF 50%, #EEF4FF 100%)' }}
      >
        {/* Very subtle radial highlight top-left */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-container mx-auto px-6 md:px-16 lg:px-24 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="space-y-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border"
              style={{
                background: 'rgba(79,70,229,0.07)',
                borderColor: 'rgba(79,70,229,0.18)',
                color: '#4F46E5',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: '#4F46E5', boxShadow: '0 0 6px #4F46E5' }}
              />
              Custom Software Studio · Est. India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne font-extrabold leading-[1.08]"
              style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.9rem)', color: '#0F172A' }}
            >
              Turning Ideas Into<br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #4F46E5, #7C3AED)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Scalable Software.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-base leading-relaxed max-w-lg"
              style={{ color: '#475569' }}
            >
              We design, build, and deploy custom SaaS platforms, mobile apps,
              and business automation tools — from your first idea to your first
              thousand users.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-8 pt-2"
            >
              {[
                { val: '5+', label: 'Products shipped' },
                { val: '20+', label: 'Happy clients' },
                { val: '4.9★', label: 'Average rating' },
              ].map((s, i) => (
                <div key={s.label} className="text-center md:text-left">
                  <motion.div
                    className="font-syne font-extrabold text-2xl"
                    style={{ color: '#4F46E5', animation: `countUp 0.5s ease ${0.8 + i * 0.12}s both`, opacity: 0 }}
                  >
                    {s.val}
                  </motion.div>
                  <div className="text-xs" style={{ color: '#94A3B8' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-px w-20 origin-left"
              style={{ background: 'linear-gradient(90deg, #4F46E5, transparent)' }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-base px-7 py-3.5 rounded-full text-white transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                  boxShadow: '0 8px 24px rgba(79,70,229,0.35)',
                }}
              >
                Start Your Project →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 border"
                style={{ borderColor: 'rgba(79,70,229,0.28)', color: '#4F46E5', background: 'rgba(79,70,229,0.04)' }}
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT: Illustration ── */}
          <div className="relative hidden md:block" style={{ height: 520 }}>
            {/* Connection lines */}
            <ConnectionLines />

            {/* Dashboard card (center anchor) */}
            <DashboardCard />

            {/* Floating bubbles */}
            {bubbles.map((b) => (
              <Bubble key={b.id} bubble={b} />
            ))}

            {/* Reach chip (like GRIN's "REACH 353.4K" card) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute rounded-2xl bg-white border border-indigo/10 px-5 py-3 shadow-xl"
              style={{
                bottom: '14%',
                right: '4%',
                zIndex: 14,
                boxShadow: '0 12px 40px rgba(79,70,229,0.14)',
                animation: 'orbitFloat 5.5s ease-in-out 1.4s infinite',
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#94A3B8' }}>
                Projects Deployed
              </p>
              <p className="font-syne font-extrabold text-2xl" style={{ color: '#4F46E5' }}>
                5 Live
              </p>
            </motion.div>

            {/* Interests / tags chip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="absolute rounded-2xl bg-white/80 backdrop-blur-sm border border-indigo/10 px-4 py-2 shadow-lg text-xs"
              style={{ bottom: '5%', left: '4%', zIndex: 14, color: '#475569' }}
            >
              <span className="font-semibold text-indigo-600">STACK:</span>{' '}
              Next.js · Flutter · Node.js
            </motion.div>
          </div>
        </div>

        {/* Multi-layer bottom wave */}
        <BottomWave />
      </section>
    </>
  )
}