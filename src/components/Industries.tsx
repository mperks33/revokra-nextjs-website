'use client'

import { motion } from 'framer-motion'
import { Building2, Scale, BarChart3, Heart, GraduationCap } from 'lucide-react'

const industries = [
  {
    icon: Building2,
    title: 'Sales & Business Development',
    description: 'Share proposals and close deals faster.'
  },
  {
    icon: Scale,
    title: 'Legal',
    description: 'Share contracts and confidential documents with confidence.'
  },
  {
    icon: BarChart3,
    title: 'Finance',
    description: 'Deliver sensitive reports and due diligence securely.'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Protect patient and business information with ease.'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Share admissions, research, and sensitive documents securely.'
  }
]

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Built for Professionals Who Share What Matters
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-black hover:text-white transition">
                  <Icon className="w-8 h-8 text-gray-700 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
