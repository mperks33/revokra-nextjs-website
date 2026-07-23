'use client'

import Navigation from '@/components/Navigation'
import DigitalClock from '@/components/DigitalClock'
import Footer from '@/components/Footer'

export default function ClockPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <DigitalClock />
      <Footer />
    </main>
  )
}
