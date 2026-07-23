'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Lock, Shield, FileCheck, Zap } from 'lucide-react'

export default function Security() {
  return (
    <section id="security" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Security Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Security. Visibility. Control.
            </h2>
            <p className="text-lg text-gray-300 mb-8">All in one platform.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-gray-100">End-to-end encryption</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-gray-100">Granular access controls</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-gray-100">Audit logs & compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-gray-100">SOC 2 Type II Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-gray-100">Designed for enterprise scale</span>
              </div>
            </div>

            <button className="mt-10 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition">
              Start free today
            </button>
            <p className="text-gray-400 text-sm mt-3">No credit card required</p>
          </motion.div>

          {/* Right - QR Code & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center bg-white/5 rounded-2xl p-12 border border-white/10"
          >
            <Shield className="w-16 h-16 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
            
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-6">
              <div className="text-center text-black text-xs">
                <p className="font-bold">QR Code</p>
                <p className="text-gray-600">Placeholder</p>
              </div>
            </div>
            
            <a href="#" className="text-white hover:text-gray-300 transition font-semibold mb-4">
              revokra.com
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition font-semibold">
              Scan to start
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
