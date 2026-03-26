import '../styles/globals.css'

export const metadata = {
  title: 'ZenTech Softwares — Turning Ideas Into Scalable Software',
  description: 'Custom SaaS platforms, mobile apps, and business automation tools built by ZenTech Softwares.',
  icons: {
    icon: '/z.png', // favicon
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}