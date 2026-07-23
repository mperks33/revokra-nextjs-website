'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Upload, Send, Eye, Lock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 leading-tight">
              Control doesn{"'"}t end at send.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Secure document delivery with complete visibility and control—before, during, and long after you send.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Revoke access anytime, even after opening</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">See exactly how your documents are engaged</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Protect sensitive content with enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Close deals faster with built-in eSignatures</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <button className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition flex items-center gap-2">
                Start free <ArrowRight size={20} />
              </button>
              <span className="text-gray-600">No credit card required</span>
            </motion.div>
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="bg-black text-white p-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">R</span>
                </div>
                <span className="font-semibold">revokra</span>
                <span className="text-gray-400 ml-auto">Dashboard</span>
              </div>

              {/* Sidebar + Content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="bg-gray-50 w-32 p-4 border-r border-gray-200">
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-black bg-white rounded px-3 py-2">Dashboard</div>
                    <div className="text-sm text-gray-600 hover:bg-white rounded px-3 py-2 cursor-pointer">Documents</div>
                    <div className="text-sm text-gray-600 hover:bg-white rounded px-3 py-2 cursor-pointer">Links</div>
                    <div className="text-sm text-gray-600 hover:bg-white rounded px-3 py-2 cursor-pointer">eSignatures</div>
                    <div className="text-sm text-gray-600 hover:bg-white rounded px-3 py-2 cursor-pointer">Contacts</div>
                    <div className="text-sm text-gray-600 hover:bg-white rounded px-3 py-2 cursor-pointer">Reports</div>
                    <div className="text-sm text-gray-600 hover:bg-white rounded px-3 py-2 cursor-pointer">Team</div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-black">238</div>
                      <div className="text-xs text-gray-500">Views</div>
                      <div className="text-xs text-gray-400">↑ 24% this week</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-black">72</div>
                      <div className="text-xs text-gray-500">Unique Viewers</div>
                      <div className="text-xs text-gray-400">↑ 18% this week</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-black">04:32</div>
                      <div className="text-xs text-gray-500">Avg. Time Viewed</div>
                      <div className="text-xs text-gray-400">↑ 35% this week</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-black">68%</div>
                      <div className="text-xs text-gray-500">Completion Rate</div>
                      <div className="text-xs text-gray-400">↑ 12% this week</div>
                    </div>
                  </div>

                  {/* Charts Placeholder */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded h-32 flex items-center justify-center text-xs text-gray-400">Engagement Chart</div>
                    <div className="bg-gray-100 rounded h-32 flex items-center justify-center text-xs text-gray-400">Recent Activity</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
