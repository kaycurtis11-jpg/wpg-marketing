'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface MarketingNavProps {
  clientPortalUrl: string
}

export default function MarketingNav({ clientPortalUrl }: MarketingNavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`wd-nav${scrolled ? ' wd-nav-scrolled' : ''}`}>
      <div className="wd-nav-inner">
        <Link href="/" className="wd-nav-logo">
          <Image src="/images/logo.png" alt="WPG Local Cleaners" width={120} height={36} style={{ objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
        </Link>

        <div className="wd-nav-links">
          <a href="#services" className="wd-nav-link">Services</a>
          <a href="#about" className="wd-nav-link">About</a>
          <a href="#team" className="wd-nav-link">Team</a>
          <a href="#estimate" className="wd-nav-link">Contact</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a href={clientPortalUrl} target="_blank" rel="noopener noreferrer" className="wd-btn-outline-pine" style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}>
            Client login
          </a>
          <a href="#estimate" className="wd-btn-pine">
            Get an estimate
          </a>
        </div>
      </div>
    </nav>
  )
}
