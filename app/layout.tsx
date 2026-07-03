import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import 'leaflet/dist/leaflet.css'
import './marketing.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WPG Local Cleaners — Winnipeg Residential & Commercial Cleaning',
  description:
    'Locally owned professional cleaning in Winnipeg, MB. Residential, commercial, and move-in/out cleaning by experienced, background-checked cleaners.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${jakartaSans.variable} website-root`}>
        {children}
      </body>
    </html>
  )
}
