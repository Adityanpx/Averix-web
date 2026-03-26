'use client'
import FadeUp from '../ui/FadeUp'
import { Phone, FileText, Paintbrush, Code2, TestTube2, Rocket } from 'lucide-react'

const steps = [
  { n: '01', icon: Phone, title: 'Discovery Call', desc: 'We understand your idea, goals, and target users in depth.' },
  { n: '02', icon: FileText, title: 'Proposal & Scope', desc: 'We deliver a clear proposal with timeline and tech stack.' },
  { n: '03', icon: Paintbrush, title: 'UI/UX Design', desc: 'We design every screen, interaction, and user flow.' },
  { n: '04', icon: Code2, title: 'Development', desc: 'Our engineers build your product sprint by sprint.' },
  { n: '05', icon: TestTube2, title: 'QA & Testing', desc: 'Rigorous testing across all devices and edge cases.' },
  { n: '06', icon: Rocket, title: 'Launch 🚀', desc: 'We deploy to production and stay as your tech partner.' },
]

export default function HowWeWork() {
  return (
    <section id="process" className="bg-soft py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-container mx-auto">
        <FadeUp className="text-center mb-16">
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-dark">
            From your idea to live product
          </h2>
          <span className="teal-underline mx-auto" />
          <p className="text-body text-lg">In weeks, not months.</p>
        </FadeUp>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 border-t-2 border-dashed border-indigo/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.1} className="text-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-indigo/20 shadow-card flex items-center justify-center mb-4 relative">
                    <step.icon className="text-indigo" size={24} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo text-white text-xs font-bold flex items-center justify-center font-mono">
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="font-syne font-bold text-dark text-sm mb-2">{step.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}