'use client'

import { motion } from 'framer-motion'
import { Upload, Send, Eye, Lock } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Upload,
    title: 'Upload',
    description: 'Upload your document securely to Revokra.'
  },
  {
    number: 2,
    icon: Send,
    title: 'Send',
    description: 'Share a secure link with your recipient.'
  },
  {
    number: 3,
    icon: Eye,
    title: 'Track',
    description: 'See real-time engagement and page-by-page analytics.'
  },
  {
    number: 4,
    icon: Lock,
    title: 'Revoke',
    description: 'Revoke access anytime. You\'re always in control.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">How It Works</h2>
        </motion.div>

        <div className="flex items-center justify-between gap-4 md:gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center flex-1"
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-black">{step.number}</span>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute w-12 h-0.5 bg-gray-300 ml-8 mt-4" />
                )}

                {/* Title and Description */}
                <h3 className="text-lg font-bold text-black mb-2 text-center">{step.title}</h3>
                <p className="text-sm text-gray-600 text-center">{step.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Improved Layout with SVG connector */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-8 flex-wrap md:flex-nowrap">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex items-center gap-8 flex-1 max-w-xs">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 hover:border-black transition">
                      <Icon className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-bold text-black text-center">{step.title}</h3>
                    <p className="text-sm text-gray-600 text-center mt-2">{step.description}</p>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block text-3xl text-gray-300">→</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
