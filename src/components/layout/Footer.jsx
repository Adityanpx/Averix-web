import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const menuLinks = ['Products', 'Services', 'Use Cases', 'Pricing', 'Blog', 'Contact']
const infoLinks = ['About Us', 'Privacy Policy', 'Terms & Conditions', 'FAQ', 'Careers', 'Support']

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-container mx-auto px-6 md:px-16 lg:px-24 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {/* About */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo flex items-center justify-center">
              <span className="font-syne font-bold text-white text-sm">Z</span>
            </div>
            <span className="font-syne font-bold text-dark text-lg">ZenTech Softwares</span>
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
          </div>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-syne font-bold text-dark mb-6">Menu</h4>
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
          <h4 className="font-syne font-bold text-dark mb-6">Information</h4>
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
          <p className="text-muted text-sm">© 2025 ZenTech Softwares · All Rights Reserved</p>
          <p className="text-muted text-sm">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  )
}