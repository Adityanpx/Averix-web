import FadeUp from '../ui/FadeUp'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <FadeUp>
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            We are building the future of software.
          </h2>
          <p className="text-white/80 text-lg mt-4 max-w-lg">
            Sign up today and see how we can help you do more with less.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <Link
            href="/contact"
            className="bg-white text-indigo px-8 py-4 rounded-full font-bold text-sm hover:shadow-xl transition-all duration-200 whitespace-nowrap flex items-center gap-2"
          >
            BOOK A FREE CALL →
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}