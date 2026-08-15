import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const menuLinks = ['Products', 'Services', 'Use Cases', 'Pricing', 'Blog', 'Contact']
const infoLinks = ['About Us', 'Privacy Policy', 'Terms & Conditions', 'FAQ', 'Careers', 'Support']

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-container mx-auto px-6 md:px-16 lg:px-24 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {/* About */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo flex items-center justify-center">
              <span className="font-bold text-white text-sm">Z</span>
            </div>
            <span className="font-bold text-dark text-lg">Averix Solution</span>
          </div>
          <p className="text-body text-sm leading-relaxed max-w-xs">
            We are a software studio based in India, passionate about building tools that help businesses grow in the digital era.
          </p>
          <div className="flex gap-4">
            <a href="/contact" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-indigo hover:border-indigo transition-colors duration-200">
              <Mail size={16} />
            </a>
            <a href="/contact" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-indigo hover:border-indigo transition-colors duration-200">
              <Phone size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-indigo hover:border-indigo transition-colors duration-200">
              <MapPin size={16} />
            </a>
            <a
              href="https://www.instagram.com/averix_solutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Averix Solutions on Instagram"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-pink-500/30 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/averix-solutions-private-limited/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Averix Solutions on LinkedIn"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#0A66C2]/30 hover:bg-[#0A66C2]"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-bold text-dark mb-6">Menu</h4>
          <ul className="space-y-3">
            {menuLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-body text-sm hover:text-indigo transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-bold text-dark mb-6">Information</h4>
          <ul className="space-y-3">
            {infoLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-body text-sm hover:text-indigo transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-container mx-auto px-6 md:px-16 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">© 2025 
aditya@averixsolutions.co.in · All Rights Reserved</p>
          <p className="text-muted text-sm"></p>
        </div>
      </div>
    </footer>
  )
}