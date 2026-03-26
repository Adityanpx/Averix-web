import FadeUp from '../ui/FadeUp'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    label: 'For MVPs & Small Tools',
    price: '₹3,49,999',
    priceNote: 'starting',
    features: ['Single module SaaS', 'Basic admin panel', '~4 week delivery', 'Email support', 'Cloud deployment', 'Basic analytics'],
    cta: 'Get Started',
    ctaStyle: 'border border-indigo text-indigo hover:bg-indigo hover:text-white',
    highlight: false,
  },
  {
    name: 'Growth',
    label: 'Full SaaS Platforms',
    price: '₹6,49,999',
    priceNote: 'starting',
    features: ['Full stack SaaS', 'Custom admin panel', '~3 month delivery', 'Priority support', 'Cloud deployment', 'Custom domain', 'Analytics dashboard', 'API integrations'],
    cta: 'Start Building',
    ctaStyle: 'bg-indigo text-white hover:bg-indigo-dark',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    label: 'Custom & Large Scale',
    price: "Let's Talk",
    priceNote: 'custom pricing',
    features: ['Custom ERP / Platform', 'Dedicated team', 'Ongoing contract', 'SLA-based support', 'All integrations', 'White-label option', 'On-premise or cloud', 'Training included'],
    cta: 'Contact Us →',
    ctaStyle: 'border border-coral text-coral hover:bg-coral hover:text-white',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 px-6 md:px-24 lg:px-56">
      <div className="max-w-container mx-auto">
        <FadeUp className="text-center mb-16">
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-dark">Pricing for every stage</h2>
          <span className="teal-underline mx-auto" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
          {plans.map((plan, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className={`rounded-2xl p-8 lg:p-10 border relative flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? 'border-indigo shadow-card-hover ring-1 ring-indigo/20'
                  : 'border-border hover:shadow-card'
              }`}>
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}
                <div className="mb-6">
                  <p className="text-muted text-sm uppercase tracking-widest font-semibold mb-2">{plan.label}</p>
                  <h3 className="font-syne font-bold text-2xl text-dark">{plan.name}</h3>
                </div>
                <div className="mb-6">
                  <span className="font-mono font-bold text-3xl text-dark">{plan.price}</span>
                  <span className="text-muted text-sm ml-2">{plan.priceNote}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-body text-sm">
                      <Check size={14} className="text-teal flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`w-full py-4 rounded-full text-sm font-semibold text-center transition-all duration-200 ${plan.ctaStyle}`}>
                  {plan.cta}
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}