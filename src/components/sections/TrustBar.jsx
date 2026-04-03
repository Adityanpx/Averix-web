'use client'

export default function TrustBar() {
  const items = ['SG-EMS', 'QuickCab', 'Janmat Voting', 'StitchTrack', 'ApnaBot']
  const doubled = [...items, ...items]

  return (
    <section className="bg-white border-y border-border py-5 overflow-hidden">
      <div className="flex items-center gap-3 text-xs text-muted uppercase tracking-widest font-semibold px-6 md:px-20 mb-3">
        Delivered by Averix
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="text-sm font-semibold text-muted uppercase tracking-widest flex items-center gap-3">
              {item} <span className="text-teal">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}