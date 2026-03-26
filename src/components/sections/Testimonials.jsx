'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { products } from '@/data/products'
import FadeUp from '../ui/FadeUp'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const reviews = products.map(p => ({ ...p.reviewer, review: p.review, rating: p.rating, product: p.name }))

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % reviews.length), 5000)
    return () => clearInterval(t)
  }, [reviews.length])

  const prev = () => setActive(a => (a - 1 + reviews.length) % reviews.length)
  const next = () => setActive(a => (a + 1) % reviews.length)

  return (
    <section id="testimonials" className="bg-hero py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-container mx-auto">
        <FadeUp className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-dark">Loved by our clients</h2>
          <span className="teal-underline mx-auto" />
        </FadeUp>

        <div className="relative flex items-center justify-center gap-6">
          {/* Prev */}
          <button onClick={prev} className="hidden md:flex w-10 h-10 rounded-full border border-border bg-white shadow-sm items-center justify-center hover:border-indigo hover:text-indigo transition-colors">
            <ChevronLeft size={18} />
          </button>

          {/* Cards */}
          <div className="flex-1 max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl shadow-card p-10 lg:p-12 text-center relative"
              >
                <div className="text-7xl text-indigo/20 leading-none absolute top-4 left-8">"</div>
                <div className="flex justify-center mb-6">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={16} className={i <= Math.round(reviews[active].rating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted'} />
                  ))}
                </div>
                <p className="text-dark text-lg leading-relaxed mb-8 relative z-10">
                  "{reviews[active].review}"
                </p>
                <div className="w-10 h-0.5 bg-indigo mx-auto mb-6" />
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: reviews[active].color }}>
                    {reviews[active].initials}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-dark text-sm">{reviews[active].name}</p>
                    <p className="text-muted text-xs uppercase tracking-wide">{reviews[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={next} className="hidden md:flex w-10 h-10 rounded-full border border-border bg-white shadow-sm items-center justify-center hover:border-indigo hover:text-indigo transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-indigo w-6' : 'bg-border'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}