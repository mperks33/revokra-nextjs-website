'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Industries from '@/components/Industries'
import Testimonial from '@/components/Testimonial'
import Security from '@/components/Security'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Industries />
      <Testimonial />
      <Security />
      <Pricing />
      <Footer />
    </main>
  )
}
