'use client'
import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────────────────────
   CustomCursor
   • Small sharp dot  — snaps to mouse instantly
   • Large ring       — follows with smooth spring lag
   • States: default | hover (links/buttons) | click | text
   • Hides on touch devices automatically
   • Uses RAF for 60fps tracking, no Framer Motion dep needed
───────────────────────────────────────────────────────────── */

const KEYFRAMES = `
  /* Hide the real cursor everywhere */
  *, *::before, *::after { cursor: none !important; }

  @keyframes cursorEnter {
    from { opacity: 0; transform: scale(0.4); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes clickBurst {
    0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.7; }
    100% { transform: translate(-50%,-50%) scale(2.8); opacity: 0; }
  }
`

// Selectors that trigger the "hover" enlarged state
const HOVER_SELECTORS = [
  'a', 'button', '[role="button"]',
  'input', 'textarea', 'select', 'label',
  '[data-cursor="pointer"]',
].join(', ')

// Selectors that trigger the "text" beam state
const TEXT_SELECTORS = [
  'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'span', 'li', 'blockquote',
  '[data-cursor="text"]',
].join(', ')

export default function CustomCursor() {
  const dotRef  = useRef(null)   // tiny 6px dot
  const ringRef = useRef(null)   // large trailing ring

  // Smooth ring position (spring)
  const ringPos  = useRef({ x: -100, y: -100 })
  const targetPos = useRef({ x: -100, y: -100 })

  const [state, setState] = useState('default') // 'default' | 'hover' | 'text' | 'click'
  const [visible, setVisible] = useState(false)
  const stateRef = useRef('default')

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    let rafId

    // ── Mouse move ──────────────────────────────────────
    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY

      targetPos.current = { x, y }

      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`
      }

      if (!visible) setVisible(true)

      // Detect hover / text target
      const el = document.elementFromPoint(x, y)
      if (!el) return

      let newState = 'default'
      if (el.closest(HOVER_SELECTORS))     newState = 'hover'
      else if (el.closest(TEXT_SELECTORS)) newState = 'text'

      if (newState !== stateRef.current) {
        stateRef.current = newState
        setState(newState)
      }
    }

    // ── Click burst ──────────────────────────────────────
    const onDown = () => {
      stateRef.current = 'click'
      setState('click')
    }
    const onUp = () => {
      const el = document.elementFromPoint(targetPos.current.x, targetPos.current.y)
      let restored = 'default'
      if (el?.closest(HOVER_SELECTORS)) restored = 'hover'
      stateRef.current = restored
      setState(restored)
    }

    // ── Leave / enter window ─────────────────────────────
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    // ── RAF spring loop ──────────────────────────────────
    const SPRING = 0.13
    const loop = () => {
      const t = targetPos.current
      const r = ringPos.current
      r.x += (t.x - r.x) * SPRING
      r.y += (t.y - r.y) * SPRING

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${r.x}px, ${r.y}px)`
      }

      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    window.addEventListener('mousemove',  onMove,  { passive: true })
    window.addEventListener('mousedown',  onDown)
    window.addEventListener('mouseup',    onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('mousedown',  onDown)
      window.removeEventListener('mouseup',    onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  // ── Style maps per state ─────────────────────────────────
  const ringSize = state === 'hover' ? 48 : state === 'text' ? 4 : state === 'click' ? 20 : 36
  const ringBorder = state === 'hover'
    ? '2px solid #4F46E5'
    : state === 'text'
    ? '2px solid transparent'
    : state === 'click'
    ? '2px solid #7C3AED'
    : '1.5px solid rgba(79,70,229,0.55)'

  const ringBg = state === 'hover'
    ? 'rgba(79,70,229,0.08)'
    : state === 'click'
    ? 'rgba(124,58,237,0.15)'
    : 'transparent'

  const dotSize  = state === 'text' ? 2 : state === 'click' ? 4 : 6
  const dotColor = state === 'hover' ? '#4F46E5' : state === 'click' ? '#7C3AED' : '#4F46E5'

  const ringMixBlend = state === 'hover' ? 'normal' : 'normal'

  return (
    <>
      <style>{KEYFRAMES}</style>

      {/* ── Large trailing ring ── */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          width:           ringSize,
          height:          ringSize,
          borderRadius:    '50%',
          border:          ringBorder,
          background:      ringBg,
          transform:       'translate(-100px,-100px)',
          // offset so center aligns to cursor
          marginLeft:      -(ringSize / 2),
          marginTop:       -(ringSize / 2),
          pointerEvents:   'none',
          zIndex:          99999,
          opacity:         visible ? 1 : 0,
          transition:      [
            `width 0.22s cubic-bezier(0.34,1.56,0.64,1)`,
            `height 0.22s cubic-bezier(0.34,1.56,0.64,1)`,
            `margin 0.22s cubic-bezier(0.34,1.56,0.64,1)`,
            `border 0.18s ease`,
            `background 0.18s ease`,
            `opacity 0.3s ease`,
          ].join(', '),
          willChange:      'transform',
        }}
      />

      {/* ── Sharp center dot ── */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         dotSize,
          height:        dotSize,
          borderRadius:  '50%',
          background:    dotColor,
          transform:     'translate(-100px,-100px)',
          marginLeft:    -(dotSize / 2),
          marginTop:     -(dotSize / 2),
          pointerEvents: 'none',
          zIndex:        100000,
          opacity:       visible ? 1 : 0,
          boxShadow:     `0 0 ${state === 'hover' ? 10 : 4}px ${dotColor}99`,
          transition:    [
            `width 0.18s cubic-bezier(0.34,1.56,0.64,1)`,
            `height 0.18s cubic-bezier(0.34,1.56,0.64,1)`,
            `margin 0.18s cubic-bezier(0.34,1.56,0.64,1)`,
            `background 0.18s ease`,
            `box-shadow 0.18s ease`,
            `opacity 0.3s ease`,
          ].join(', '),
          willChange:    'transform',
        }}
      />

      {/* ── Click burst ring (pure CSS, no JS needed) ── */}
      {state === 'click' && (
        <div
          aria-hidden
          style={{
            position:      'fixed',
            top:           targetPos.current.y,
            left:          targetPos.current.x,
            width:         32,
            height:        32,
            borderRadius:  '50%',
            border:        '2px solid #7C3AED',
            pointerEvents: 'none',
            zIndex:        99998,
            animation:     'clickBurst 0.45s ease-out forwards',
          }}
        />
      )}
    </>
  )
}