'use client'

import { motion } from 'framer-motion'
import { Briefcase, FileText, Users } from 'lucide-react'

const useCases = [
  {
    icon: Briefcase,
    title: 'Legal Firms',
    description: 'Manage contracts and legal documents with secure, auditable access.'
  },
  {
    icon: FileText,
    title: 'Financial Services',
    description: 'Share sensitive financial documents with compliance and security built-in.'
  },
  {
    icon: Users,
    title: 'HR Departments',
    description: 'Handle employee documents securely with permission-based access controls.'
  }
]

export default function UseCases() {
  return (
    <section id="usecases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Perfect For</h2>
          <p className="text-xl text-gray-600">Trusted by organizations across industries</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition"
              >
                <Icon className="w-12 h-12 text-black mb-4" />
                <h3 className="text-2xl font-semibold text-black mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
