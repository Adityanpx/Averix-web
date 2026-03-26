import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import WhatWeDo from '@/components/sections/WhatWeDo'
import Products from '@/components/sections/Products'
import Stats from '@/components/sections/Stats'
import HowWeWork from '@/components/sections/HowWeWork'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import CTABanner from '@/components/sections/CTABanner'
import CustomCursor from '@/components/ui/CustomCursor'

export default function Home() {
  return (
    <>
      {/* Global animated cursor — renders above everything, hidden on touch */}
      <CustomCursor />

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhatWeDo />
        <Products />
        <Stats />
        <HowWeWork />
        <Testimonials />
        {/* <Pricing /> */}
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}