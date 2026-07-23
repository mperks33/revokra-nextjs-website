'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

interface TimeZone {
  name: string
  timezone: string
  label: string
}

const timezones: TimeZone[] = [
  { name: 'New York', timezone: 'America/New_York', label: 'EST' },
  { name: 'London', timezone: 'Europe/London', label: 'GMT' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo', label: 'JST' },
  { name: 'Sydney', timezone: 'Australia/Sydney', label: 'AEDT' },
  { name: 'Dubai', timezone: 'Asia/Dubai', label: 'GST' },
  { name: 'Singapore', timezone: 'Asia/Singapore', label: 'SGT' },
]

export default function DigitalClock() {
  const [times, setTimes] = useState<{ [key: string]: string }>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {}
      const now = new Date()

      timezones.forEach((tz) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
        newTimes[tz.timezone] = formatter.format(now)
      })
      setTimes(newTimes)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-blue-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">Global Time Zones</h1>
          </div>
          <p className="text-xl text-gray-400">Current time around the world</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timezones.map((tz, index) => (
            <motion.div
              key={tz.timezone}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{tz.name}</h3>
                  <p className="text-sm text-gray-400">{tz.label}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
              </div>

              <div className="bg-black rounded-lg p-6 border border-gray-700">
                <div className="font-mono text-4xl font-bold text-green-400 tracking-wider text-center">
                  {times[tz.timezone] || '00:00:00'}
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-400 text-center">
                <p>Timezone: {tz.timezone}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30"
        >
          <h2 className="text-2xl font-bold text-white mb-4">About Time Zones</h2>
          <p className="text-gray-300 leading-relaxed">
            Time zones are regions of Earth that use the same standard time. They are defined by their offset from Coordinated Universal Time (UTC). 
            This clock displays real-time updates for major cities and financial hubs around the world, helping teams coordinate across different regions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
