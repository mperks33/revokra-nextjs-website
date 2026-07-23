'use client'

import { motion } from 'framer-motion'
import { Lock, Eye, Shield, PenTool } from 'lucide-react'

const features = [
  {
    icon: Lock,
    title: 'Revoke Access Anytime',
    description: 'Instantly revoke access to a document or link—even after it\'s been opened.'
  },
  {
    icon: Eye,
    title: 'Page-by-Page Analytics',
    description: 'See exactly what\'s viewed, for how long, and by whom—in real time.'
  },
  {
    icon: Shield,
    title: 'Secure Document Sharing',
    description: 'Your data is protected with bank-level encryption and enterprise-grade security.'
  },
  {
    icon: PenTool,
    title: 'eSignatures Built-In',
    description: 'Send, sign, and manage documents without leaving the platform.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
