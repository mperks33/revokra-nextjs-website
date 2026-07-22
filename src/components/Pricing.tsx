'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for small teams',
    features: [
      '5 GB storage',
      'Up to 5 team members',
      'Basic sharing controls',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    description: 'For growing businesses',
    features: [
      '500 GB storage',
      'Up to 50 team members',
      'Advanced sharing & permissions',
      'Engagement tracking',
      'Priority support',
      'Custom branding'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited storage',
      'Unlimited team members',
      'Advanced security',
      'eSignatures',
      'Dedicated support',
      'Custom integrations'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-lg transition ${
                plan.highlighted
                  ? 'bg-black text-white border-2 border-black transform scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={plan.highlighted ? 'text-gray-300' : 'text-gray-600'}>{plan.description}</p>
              
              <div className="my-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlighted ? 'text-gray-300' : 'text-gray-600'}>{plan.period}</span>
              </div>

              <button className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                plan.highlighted
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}>
                Get Started
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
