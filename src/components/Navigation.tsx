'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black">Revokra</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-black transition">Features</a>
            <a href="#usecases" className="text-gray-700 hover:text-black transition">Use Cases</a>
            <a href="#security" className="text-gray-700 hover:text-black transition">Security</a>
            <a href="#pricing" className="text-gray-700 hover:text-black transition">Pricing</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex space-x-4">
            <button className="px-6 py-2 text-black hover:bg-gray-100 rounded-lg transition">Sign In</button>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2"
          >
            <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Features</a>
            <a href="#usecases" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Use Cases</a>
            <a href="#security" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Security</a>
            <a href="#pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Pricing</a>
            <button className="w-full mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition">Get Started</button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
