'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function Testimonial() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <Quote className="w-12 h-12 text-gray-400" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
            Revokra gives us the visibility and control we need when sharing sensitive documents. It&apos;s a game changer.
          </h3>
          
          <p className="text-lg text-gray-600 mb-2">
            Director of Sales, Global Enterprise Company
          </p>
          
          {/* Trust Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-gray-300"
          >
            <p className="text-gray-600 font-semibold mb-6">Trusted by Professional & Teams</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-gray-400 font-bold text-lg">PwC</div>
              <div className="text-gray-400 font-bold text-lg">Deloitte</div>
              <div className="text-gray-400 font-bold text-lg">KPMG</div>
              <div className="text-gray-400 font-bold text-lg">BCG</div>
              <div className="text-gray-400 font-bold text-lg">Cushman & Wakefield</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
