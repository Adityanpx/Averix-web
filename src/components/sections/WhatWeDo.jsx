import FadeUp from '../ui/FadeUp'
import { Search, Code2, Rocket } from 'lucide-react'

const cards = [
  {
    icon: Search,
    iconBg: 'from-indigo to-purple-600',
    title: 'Discover & Consult',
    text: 'We map your idea into user flows, technical architecture, and a clear project plan before any code is written.',
  },
  {
    icon: Code2,
    iconBg: 'from-teal to-cyan-600',
    title: 'Design & Develop',
    text: 'Our team builds production-grade systems — SaaS dashboards, REST APIs, mobile apps — all tested and optimized.',
  },
  {
    icon: Rocket,
    iconBg: 'from-coral to-orange-500',
    title: 'Deploy & Scale',
    text: 'We launch on cloud infrastructure and stay as your technical partner through growth, features, and scaling.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="services" className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-container mx-auto">
        <FadeUp className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-dark">
            Take control of your software vision
          </h2>
          <span className="teal-underline mx-auto" />
          <p className="text-body text-lg max-w-xl mx-auto">
            From discovery to deployment — we handle everything.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-soft rounded-2xl p-8 lg:p-10 border border-border hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center`}>
                  <card.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-xl text-dark">{card.title}</h3>
                <p className="text-body leading-relaxed">{card.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* As seen in */}
        <FadeUp delay={0.3} className="mt-20 pt-12 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <span className="text-muted text-sm uppercase tracking-widest font-semibold">As seen in</span>
            {['Adweek', 'Forbes', 'Entrepreneur', 'Neil Patel'].map((brand) => (
              <span key={brand} className="text-muted text-xl font-bold opacity-40 hover:opacity-70 transition-opacity">
                {brand}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}