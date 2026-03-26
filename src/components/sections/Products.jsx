'use client'
import { products } from '@/data/products'
import FadeUp from '../ui/FadeUp'
import { ExternalLink, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// ─── Badge color map ────────────────────────────────────────────────────────
const badgeColorMap = {
  indigo: 'bg-indigo/10 text-indigo border-indigo/20',
  teal: 'bg-teal/10 text-teal border-teal/20',
  coral: 'bg-coral/10 text-coral border-coral/20',
}

// ─── Inline keyframes injected once ─────────────────────────────────────────
const KEYFRAMES = `
@keyframes floatDevice {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-14px); }
}
@keyframes glowPulse {
  0%,100% { opacity: 0.82; }
  50%      { opacity: 1; }
}
@keyframes chipPop {
  0%   { opacity: 0; transform: translateY(8px) scale(0.88); }
  60%  { transform: translateY(-3px) scale(1.04); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes starFill {
  0%   { opacity: 0; transform: scale(0.5) rotate(-20deg); }
  70%  { transform: scale(1.3) rotate(6deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
}
@keyframes ratingSlideUp {
  0%   { opacity: 0; transform: translateY(22px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes borderGrow {
  0%   { transform: scaleY(0); }
  100% { transform: scaleY(1); }
}
@keyframes featuredBg {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes drawLine {
  from { stroke-dashoffset: var(--line-total); }
  to   { stroke-dashoffset: 0; }
}
`

// ─── Hook: fires once when element enters viewport ───────────────────────────
function useInView(threshold = 0.18) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

// ─── Hook: parallax offset on scroll ────────────────────────────────────────
function useParallax(speed = 0.12) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const handler = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      setOffset(center * speed)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [speed])
  return [ref, offset]
}

// ─── Animated star rating ────────────────────────────────────────────────────
function StarRating({ rating, animate }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          style={
            animate
              ? {
                  animation: `starFill 0.4s cubic-bezier(.34,1.56,.64,1) both`,
                  animationDelay: `${0.08 * (i - 1)}s`,
                  color: i <= Math.round(rating) ? '#facc15' : 'var(--color-muted, #94a3b8)',
                  fill: i <= Math.round(rating) ? '#facc15' : 'transparent',
                }
              : {
                  color: i <= Math.round(rating) ? '#facc15' : 'var(--color-muted, #94a3b8)',
                  fill: i <= Math.round(rating) ? '#facc15' : 'transparent',
                }
          }
        />
      ))}
      <span className="text-sm font-semibold text-dark ml-1">{rating}/5</span>
    </div>
  )
}

// ─── Device mockup (same SVG, adds glow + float style) ───────────────────────
function DeviceMockup({ type, colorClass, animate }) {
  const floatStyle = animate
    ? { animation: 'floatDevice 4.2s ease-in-out infinite' }
    : {}

  const glowStyle = animate
    ? { animation: 'glowPulse 3s ease-in-out infinite' }
    : {}

  if (type === 'phone') {
    return (
      <svg
        viewBox="0 0 220 400"
        className="w-44 mx-auto drop-shadow-xl"
        style={floatStyle}
      >
        <rect x="10" y="5" width="200" height="390" rx="32" fill="#1A2340" />
        <rect
          x="18" y="14" width="184" height="372" rx="26"
          fill={`url(#ph${colorClass})`}
          style={glowStyle}
        />
        <rect x="80" y="18" width="60" height="8" rx="4" fill="#1A2340" opacity="0.5" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x="28" y={60 + i * 50} width="164" height="36" rx="8" fill="white" opacity="0.15" />
        ))}
        <defs>
          <linearGradient id={`ph${colorClass}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ABFA3" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 500 320"
      className="w-full max-w-sm mx-auto drop-shadow-xl"
      style={floatStyle}
    >
      <rect x="20" y="10" width="460" height="270" rx="12" fill="#1A2340" />
      <rect
        x="30" y="20" width="440" height="250" rx="8"
        fill={`url(#lp${colorClass})`}
        style={glowStyle}
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <circle cx="55" cy={60 + i * 42} r="12" fill="white" opacity="0.2" />
          <rect x="78" y={53 + i * 42} width="160" height="7" rx="3" fill="white" opacity="0.25" />
          <rect x="78" y={65 + i * 42} width="100" height="5" rx="2" fill="white" opacity="0.15" />
          <rect x="320" y={55 + i * 42} width="80" height="7" rx="3" fill="white" opacity="0.2" />
        </g>
      ))}
      <rect x="0" y="280" width="500" height="18" rx="4" fill="#E2E8F0" />
      <rect x="180" y="296" width="140" height="6" rx="3" fill="#CBD5E1" />
      <defs>
        <linearGradient id={`lp${colorClass}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// ─── Progress line (SVG draw-on-scroll) ──────────────────────────────────────
function ProgressLine({ totalProducts }) {
  const ref = useRef(null)
  const pathRef = useRef(null)
  const [length, setLength] = useState(0)
  const [drawn, setDrawn] = useState(0)

  // measure path length after mount
  useEffect(() => {
    if (pathRef.current) {
      const l = pathRef.current.getTotalLength()
      setLength(l)
      setDrawn(l) // start invisible
    }
  }, [])

  // scroll-drive the draw
  useEffect(() => {
    if (!length || !ref.current) return
    const section = ref.current.closest('section')
    const handler = () => {
      if (!section) return
      const rect = section.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1,
        (-rect.top) / (rect.height - window.innerHeight)
      ))
      setDrawn(length * (1 - progress))
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [length])

  const lineHeight = 160 + (totalProducts - 1) * 260

  return (
    <div
      ref={ref}
      className="absolute left-0 top-0 hidden md:block"
      style={{ width: 40, height: lineHeight, pointerEvents: 'none' }}
      aria-hidden
    >
      <svg width="40" height={lineHeight} viewBox={`0 0 40 ${lineHeight}`}>
        {/* Static dotted track */}
        <line
          x1="20" y1="0" x2="20" y2={lineHeight}
          stroke="var(--color-border, #e2e8f0)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        {/* Animated indigo fill */}
        <line
          ref={pathRef}
          x1="20" y1="0" x2="20" y2={lineHeight}
          stroke="#4F46E5"
          strokeWidth="2.5"
          strokeDasharray={length}
          strokeDashoffset={drawn}
          strokeLinecap="round"
        />
        {/* Dot per product */}
        {Array.from({ length: totalProducts }).map((_, i) => (
          <circle
            key={i}
            cx="20"
            cy={40 + i * 260}
            r="5"
            fill="white"
            stroke="#4F46E5"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  )
}

// ─── Single product row with all animations ───────────────────────────────────
function ProductRow({ product, index }) {
  const isEven = index % 2 === 1
  const isFeatured = !!product.featured

  const [rowRef, rowInView] = useInView(0.12)
  const [ratingRef, ratingInView] = useInView(0.6)
  const [deviceRef, deviceOffset] = useParallax(0.08)

  // slide-in direction: odd rows come from right, even from left
  const slideFrom = isEven ? 60 : -60
  const rowStyle = {
    opacity: rowInView ? 1 : 0,
    transform: rowInView ? 'translateX(0)' : `translateX(${slideFrom}px)`,
    transition: 'opacity 0.72s cubic-bezier(0.22,1,0.36,1), transform 0.72s cubic-bezier(0.22,1,0.36,1)',
    transitionDelay: '0.05s',
  }

  // featured card: animated indigo left border + bg fade
  const featuredBorderStyle = isFeatured
    ? {
        transformOrigin: 'top',
        animation: rowInView ? 'borderGrow 0.55s cubic-bezier(0.22,1,0.36,1) 0.35s both' : 'none',
      }
    : {}

  const featuredBgStyle = isFeatured
    ? {
        animation: rowInView ? 'featuredBg 0.6s ease 0.25s both' : 'none',
        opacity: rowInView ? 1 : 0,
      }
    : {}

  return (
    <div ref={rowRef} style={rowStyle}>
      {/* Featured card wrapper */}
      {isFeatured ? (
        <div className="relative rounded-2xl overflow-hidden">
          {/* Animated background */}
          <div
            className="absolute inset-0 bg-indigo/5 rounded-2xl"
            style={featuredBgStyle}
            aria-hidden
          />
          {/* Animated left border */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 bg-indigo rounded-l-2xl"
            style={featuredBorderStyle}
            aria-hidden
          />
          <div className="relative p-8 md:p-12">
            <RowInner
              product={product}
              isEven={isEven}
              ratingRef={ratingRef}
              ratingInView={ratingInView}
              deviceRef={deviceRef}
              deviceOffset={deviceOffset}
              rowInView={rowInView}
              isFeatured
            />
          </div>
        </div>
      ) : (
        <RowInner
          product={product}
          isEven={isEven}
          ratingRef={ratingRef}
          ratingInView={ratingInView}
          deviceRef={deviceRef}
          deviceOffset={deviceOffset}
          rowInView={rowInView}
          isFeatured={false}
        />
      )}
    </div>
  )
}

// ─── Inner grid (text + device) ───────────────────────────────────────────────
function RowInner({ product, isEven, ratingRef, ratingInView, deviceRef, deviceOffset, rowInView, isFeatured }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center`}
      style={{ direction: isEven ? 'rtl' : 'ltr' }}
    >
      {/* ── Text column ── */}
      <div style={{ direction: 'ltr' }} className="space-y-6">
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {product.badges.map((badge, bi) => (
            <span
              key={badge}
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeColorMap[product.badgeColors[bi]] || badgeColorMap.indigo}`}
            >
              {badge}
            </span>
          ))}
        </div>

        <h3 className="font-syne font-bold text-2xl md:text-3xl text-dark">{product.fullName}</h3>
        <span className="teal-underline" />
        <p className="text-body leading-relaxed text-lg">{product.description}</p>

        {/* Feature chips — cascade in one-by-one */}
        {product.featureChips && (
          <div className="flex flex-wrap gap-2">
            {product.featureChips.map((chip, ci) => (
              <span
                key={chip}
                className="text-xs bg-soft border border-border text-body px-3 py-1 rounded-full"
                style={
                  rowInView
                    ? {
                        animation: `chipPop 0.45s cubic-bezier(0.34,1.56,0.64,1) both`,
                        animationDelay: `${0.3 + ci * 0.07}s`,
                      }
                    : { opacity: 0 }
                }
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        {/* Tech stack chips — cascade after feature chips */}
        <div className="flex flex-wrap gap-2">
          {product.tech.map((t, ti) => (
            <span
              key={t}
              className="text-xs bg-soft border border-border text-body px-3 py-1 rounded-full font-mono"
              style={
                rowInView
                  ? {
                      animation: `chipPop 0.45s cubic-bezier(0.34,1.56,0.64,1) both`,
                      animationDelay: `${0.45 + ti * 0.07}s`,
                    }
                  : { opacity: 0 }
              }
            >
              {t}
            </span>
          ))}
        </div>

        {/* Live URL */}
        {product.liveUrl && (
          <a
            href={`${product.liveUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo font-semibold text-sm hover:underline"
          >
            <ExternalLink size={14} /> {product.liveUrl}
          </a>
        )}

        {/* Rating block — slides up after main text */}
        <div
          ref={ratingRef}
          className="bg-soft rounded-xl p-6 border border-border space-y-4"
          style={
            ratingInView
              ? { animation: 'ratingSlideUp 0.55s cubic-bezier(0.22,1,0.36,1) 0.1s both' }
              : { opacity: 0, transform: 'translateY(22px)' }
          }
        >
          <StarRating rating={product.rating} animate={ratingInView} />
          <p className="text-body text-sm italic">"{product.review}"</p>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: product.reviewer.color }}
            >
              {product.reviewer.initials}
            </div>
            <div>
              <p className="font-semibold text-dark text-sm">{product.reviewer.name}</p>
              <p className="text-muted text-xs">{product.reviewer.role}</p>
            </div>
          </div>
        </div>

        {isFeatured && (
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-dark hover:shadow-lg hover:shadow-indigo/30 transition-all"
          >
            Try ApnaBot Free →
          </a>
        )}
      </div>

      {/* ── Device column — parallax wrapper ── */}
      <div
        ref={deviceRef}
        style={{ direction: 'ltr', transform: `translateY(${deviceOffset}px)`, willChange: 'transform' }}
        className="flex items-center justify-center py-8"
      >
        {product.imageUrl ? (
          /* Show actual project image instead of device mockup */
          <a
            href={product.liveUrl ? `${product.liveUrl}` : '#'}
            target={product.liveUrl ? '_blank' : '_self'}
            rel={product.liveUrl ? 'noopener noreferrer' : undefined}
            className="block w-full max-w-md group"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 transform transition-transform group-hover:scale-[1.02] group-hover:shadow-2xl">
              {/* Browser bar */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-2 flex items-center gap-2 border-b border-gray-300">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1.5 ml-2 text-xs text-gray-600 truncate border border-gray-200 font-mono">
                  {product.liveUrl ? `🔗 ${product.liveUrl}` : `📱 ${product.name}`}
                </div>
              </div>
              {/* Project screenshot/image */}
              <div className="bg-gray-50">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '320px' }}
                />
              </div>
            </div>
            {/* {product.liveUrl && (
              <p className="text-center text-indigo text-sm font-medium mt-2 group-hover:underline">
                Click to visit live →
              </p>
            )} */}
          </a>
        ) : (
          <DeviceMockup type={product.device} colorClass={product.id} animate={rowInView} />
        )}
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function Products() {
  return (
    <>
      {/* Inject keyframes once */}
      <style>{KEYFRAMES}</style>

      <section id="products" className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-container mx-auto">
          <FadeUp>
            <span className="text-teal text-sm font-semibold uppercase tracking-widest">Our Work</span>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-dark mt-2">
              Real Products. Real Impact.
            </h2>
            <span className="teal-underline" />
            <p className="text-body text-lg max-w-xl">
              We don't just build — we ship. Here are 5 products designed, built, and deployed by ZenTech Softwares.
            </p>
          </FadeUp>

          {/* Products list with vertical progress line */}
          <div className="mt-20 relative pl-0 md:pl-12">
            <ProgressLine totalProducts={products.length} />

            <div className="space-y-32">
              {products.map((product, i) => (
                <ProductRow key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}