import { Plus_Jakarta_Sans, Space_Mono } from 'next/font/google'
import '../styles/globals.css'

// Only load Plus Jakarta Sans and Space Mono via next/font
// Syne is replaced with Arial (system font)

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'ZenTech Softwares — Turning Ideas Into Scalable Software',
  description: 'Custom SaaS platforms, mobile apps, and business automation tools built by ZenTech Softwares.',
  icons: {
    icon: '/z.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}