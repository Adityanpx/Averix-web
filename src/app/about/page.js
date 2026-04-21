'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, MapPin, Lightbulb, Users, Rocket, Star } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const team = [
  {
    name: 'Suresh Gavali',
    role: 'Founder & CEO',
    email: 'info@averixsolutions.co.in',
    initials: 'SG',
    gradient: 'from-indigo-500 to-purple-600',
    bio: 'Visionary entrepreneur with a passion for building software that solves real business problems. Suresh founded Averix Solutions with a clear mission — deliver reliable, scalable technology that grows with your business.',
  },
  {
    name: 'Aditya Gavali',
    role: 'Software Developer',
    email: 'aditya@averixsolutions.co.in',
    initials: 'AG',
    gradient: 'from-teal-400 to-cyan-500',
    bio: 'Full-stack developer specialising in modern web and mobile applications. Aditya brings ideas to life through clean code, thoughtful architecture, and an eye for great user experience.',
  },
]

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    desc: 'We stay ahead of the curve — using the latest technologies to build solutions that stand the test of time.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    desc: 'Your success is our success. We listen deeply, communicate clearly, and deliver exactly what your business needs.',
  },
  {
    icon: Rocket,
    title: 'Ship & Scale',
    desc: 'We build to scale from day one. Whether you have 10 users or 10,000, our products grow with you.',
  },
  {
    icon: Star,
    title: 'Quality Code',
    desc: 'Every line of code is written with care. We maintain high standards so your product is always reliable and secure.',
  },
]

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-soft pt-24">

        {/* Hero */}
        <section className="max-w-container mx-auto px-6 md:px-16 lg:px-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-indigo/10 text-indigo text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>
            <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-dark leading-tight mb-6">
              We Turn Ideas Into<br />
              <span className="text-indigo">Scalable Software</span>
            </h1>
            <p className="text-body text-lg max-w-2xl mx-auto leading-relaxed">
              Averix Solutions is a software studio based in Pune, India. We build custom SaaS platforms,
              mobile applications, and business automation tools that help companies grow faster and work smarter.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 md:gap-8 bg-white rounded-3xl shadow-card p-8 mb-20"
          >
            {[
              { value: '5+', label: 'Products Shipped' },
              { value: '20+', label: 'Happy Clients' },
              { value: '4.9★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-syne font-bold text-3xl md:text-4xl text-indigo">{stat.value}</p>
                <p className="text-body text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div>
              <span className="inline-block bg-teal/10 text-teal text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-dark mb-6 leading-tight">
                Built to Solve Real Problems
              </h2>
              <p className="text-body leading-relaxed mb-4">
                Averix Solutions was founded with a simple belief — great software should be accessible to every business,
                not just the biggest ones. We started by building products that solve everyday pain points for small and
                medium-sized businesses, and we have not looked back since.
              </p>
              <p className="text-body leading-relaxed mb-4">
                From employee management systems and digital voting platforms to WhatsApp automation tools, each product
                we ship is a result of deep listening, careful design, and relentless development.
              </p>
              <p className="text-body leading-relaxed">
                Today, our software is used by businesses across India — and we are just getting started.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo/5 to-purple-100 rounded-3xl p-10 flex flex-col gap-5">
              {[
                'Custom SaaS Platforms',
                'Flutter Mobile Applications',
                'Business Process Automation',
                'WhatsApp & CRM Integrations',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo flex-shrink-0" />
                  <span className="text-dark font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-coral/10 text-coral text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                What We Stand For
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-dark">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-card p-6 hover:shadow-card-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo/10 flex items-center justify-center mb-4">
                    <val.icon size={22} className="text-indigo" />
                  </div>
                  <h3 className="font-syne font-bold text-dark mb-2">{val.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-indigo/10 text-indigo text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                The Team
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-dark">Meet the People Behind Averix</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-white rounded-3xl shadow-card p-8 flex flex-col items-center text-center hover:shadow-card-hover transition-all"
                >
                  {/* Avatar */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                    <span className="text-white font-syne font-bold text-2xl">{member.initials}</span>
                  </div>
                  <h3 className="font-syne font-bold text-xl text-dark mb-1">{member.name}</h3>
                  <span className="text-indigo text-sm font-semibold mb-4">{member.role}</span>
                  <p className="text-body text-sm leading-relaxed mb-5">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-indigo text-sm font-medium hover:underline"
                  >
                    <Mail size={15} />
                    {member.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Location & Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <span className="inline-block bg-teal/10 text-teal text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                Where We Are
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-dark">Find Us</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Address card */}
              <div className="bg-white rounded-3xl shadow-card p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-indigo/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin size={22} className="text-indigo" />
                    </div>
                    <div>
                      <h3 className="font-syne font-bold text-dark text-lg mb-1">Our Office</h3>
                      <p className="text-body leading-relaxed">
                        Flat No. 302, NR Jakat Naka<br />
                        Dhamal Wadi, Dhamal Properties<br />
                        Phursungi, Pune – 412308<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-indigo flex-shrink-0" />
                      <a href="mailto:info@averixsolutions.co.in" className="text-body text-sm hover:text-indigo transition-colors">
                        info@averixsolutions.co.in
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-teal flex-shrink-0" />
                      <a href="mailto:aditya@averixsolutions.co.in" className="text-body text-sm hover:text-indigo transition-colors">
                        aditya@averixsolutions.co.in
                      </a>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-indigo text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-dark transition-all text-sm"
                >
                  Get in Touch →
                </Link>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-card min-h-[320px]">
                <iframe
                  title="Averix Solutions Office Location"
                  src="https://maps.google.com/maps?q=Phursungi,+Pune+412308,+Maharashtra,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '320px', display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-indigo to-purple-600 rounded-3xl p-10 md:p-14 text-center text-white"
          >
            <h2 className="font-syne font-bold text-3xl md:text-4xl mb-4">Ready to Build Something Great?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Let us turn your idea into a product that makes an impact. Reach out and we will get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo px-8 py-4 rounded-full font-bold hover:bg-soft transition-all hover:shadow-xl"
            >
              Start a Conversation →
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
