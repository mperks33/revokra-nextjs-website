'use client'

import { motion } from 'framer-motion'
import { Lock, Share2, Eye, Zap } from 'lucide-react'

const features = [
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Military-grade encryption keeps your documents safe and compliant with regulations.'
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share documents securely with customizable permissions and expiration dates.'
  },
  {
    icon: Eye,
    title: 'Engagement Tracking',
    description: 'Know exactly who viewed your documents and when they engaged with them.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures smooth operation even with large files.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to manage documents securely</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg border border-gray-200 hover:border-black transition"
              >
                <Icon className="w-8 h-8 text-black mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
