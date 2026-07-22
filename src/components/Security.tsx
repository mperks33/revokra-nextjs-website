'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const securityFeatures = [
  'End-to-end encryption',
  'SOC 2 Type II Certified',
  'GDPR & CCPA Compliant',
  'Multi-factor authentication',
  '99.9% Uptime SLA',
  'Regular security audits'
]

export default function Security() {
  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Security You Can Trust</h2>
            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-lg p-12 h-96 flex items-center justify-center"
          >
            <p className="text-gray-400">Security Visualization</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
