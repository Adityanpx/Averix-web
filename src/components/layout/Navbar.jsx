'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#features' },
  { label: 'Work', href: '#products' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-16 lg:px-24 w-full flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0 }}>
          <img
            src="/Averix_Logo.png"
            alt="Averix Logo"
            className="h-10 md:h-14 w-auto"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            gap: '5px',
            width: '36px',
            height: '36px',
            position: 'relative',
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // X (close) icon when open
            <>
              <span style={{ width: '20px', height: '2px', background: '#1A2340', borderRadius: '1px', transform: 'rotate(45deg)', position: 'absolute', top: '50%', left: '50%', marginLeft: '-10px', marginTop: '-1px' }}></span>
              <span style={{ width: '20px', height: '2px', background: '#1A2340', borderRadius: '1px', transform: 'rotate(-45deg)', position: 'absolute', top: '50%', left: '50%', marginLeft: '-10px', marginTop: '-1px' }}></span>
            </>
          ) : (
            // Hamburger bars when closed
            <>
              <span style={{ width: '20px', height: '2px', background: '#1A2340', borderRadius: '1px', display: 'block' }}></span>
              <span style={{ width: '20px', height: '2px', background: '#1A2340', borderRadius: '1px', display: 'block' }}></span>
              <span style={{ width: '20px', height: '2px', background: '#1A2340', borderRadius: '1px', display: 'block' }}></span>
            </>
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-body text-sm font-medium hover:text-indigo transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="bg-indigo text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-dark transition-all duration-200 hover:shadow-lg hover:shadow-indigo/25 flex items-center gap-2"
          >
            Let's Talk <span>→</span>
          </Link>
        </div>
      </div>

      {/* Backdrop — tapping outside closes the menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border px-6 md:px-16 lg:px-24 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-body text-base font-medium hover:text-indigo transition-colors duration-200 relative group py-2"
              >
                {link.label}
                <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-indigo text-white px-6 py-3.5 rounded-full text-sm font-semibold text-center mt-2 cursor-pointer"
              style={{ boxShadow: '0 4px 16px rgba(79,70,229,0.3)' }}
            >
              Let's Talk →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}