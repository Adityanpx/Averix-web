'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, Phone, Send, Mail, User, MessageSquare, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const PHONE_NUMBER = '+919049606115'
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, '')}`
const MAILTO_URL = 'mailto:zentechsoftwares@gmail.com'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-soft pt-24">
        {/* Back Button */}
        <div className="max-w-container mx-auto px-6 md:px-16 lg:px-24 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-body hover:text-indigo transition-colors">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="max-w-container mx-auto px-6 md:px-16 lg:px-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-card p-8 lg:p-10"
            >
              <div className="mb-8">
                <h1 className="font-syne font-bold text-3xl md:text-4xl text-dark mb-3">
                  Get in Touch
                </h1>
                <p className="text-body">
                  Have a project in mind? Send us a message and we will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-soft border border-border rounded-xl text-dark placeholder-muted focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-soft border border-border rounded-xl text-dark placeholder-muted focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-muted" size={20} />
                  <textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 bg-soft border border-border rounded-xl text-dark placeholder-muted focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full bg-indigo text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-dark transition-all disabled:opacity-70"
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : submitted ? (
                    <span className="flex items-center gap-2">
                      <span>✓</span> Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Side - Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Or divider */}
              <div className="flex items-center gap-4 py-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-muted font-medium">OR</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Quick Connect Options */}
              <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h2 className="font-syne font-bold text-2xl text-dark mb-6">
                  Connect with us directly
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* WhatsApp Option */}
                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group relative bg-[#25D366] text-white p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-[#20BD5A] transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dark text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Let's chat on WhatsApp
                    </div>
                    <MessageCircle size={32} />
                    <span className="font-semibold">WhatsApp</span>
                    <span className="text-sm opacity-80">Chat with us</span>
                  </motion.a>

                  {/* Call Option */}
                  <motion.a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex-1 group relative bg-indigo text-white p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-indigo-dark transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dark text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Call us now
                    </div>
                    <Phone size={32} />
                    <span className="font-semibold">Call</span>
                    <span className="text-sm opacity-80">{PHONE_NUMBER}</span>
                  </motion.a>
                </div>
              </div>

              {/* Email Direct Option */}
              <motion.a
                href={MAILTO_URL}
                className="block bg-white rounded-3xl shadow-card p-6 flex items-center gap-4 hover:shadow-card-hover transition-all"
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-soft flex items-center justify-center">
                  <Mail size={24} className="text-indigo" />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-dark">Email us directly</h3>
                  <p className="text-body text-sm">zentechsoftwares@gmail.com</p>
                </div>
              </motion.a>

              {/* Office Info */}
              <div className="bg-gradient-to-br from-indigo to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="font-syne font-bold text-xl mb-4">Visit our office</h3>
                <p className="text-white/80 leading-relaxed">
                  We are based in India and work with clients worldwide. Schedule a meeting and we will be happy to assist you.
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal rounded-full animate-pulse"></span>
                  <span className="text-sm">Typically reply within 24 hours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}