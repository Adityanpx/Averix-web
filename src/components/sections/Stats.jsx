import FadeUp from '../ui/FadeUp'
import AnimatedCounter from '../ui/AnimatedCounter'

const stats = [
  { value: 5, suffix: '+', label: 'Products Delivered', color: 'text-indigo' },
  { value: 4.9, suffix: '★', label: 'Average Client Rating', color: 'text-teal' },
  { value: 1200, suffix: '+', label: 'Active Users Across Apps', color: 'text-coral' },
]

export default function Stats() {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24 border-y border-border">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.15} className="text-center px-8 py-12">
              <div className={`font-mono font-bold text-6xl md:text-7xl ${stat.color}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <span className={`block w-10 h-1 mx-auto mt-4 mb-4 ${i === 0 ? 'bg-indigo' : i === 1 ? 'bg-teal' : 'bg-coral'} rounded-full`} />
              <p className="text-muted text-sm uppercase tracking-widest font-semibold">{stat.label}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}