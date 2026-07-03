'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface MarketingNavProps {
  clientPortalUrl: string
}

export default function MarketingNav({ clientPortalUrl }: MarketingNavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`wd-nav${scrolled ? ' wd-nav-scrolled' : ''}`}>
        <div className="wd-nav-inner">
          <Link href="/" className="wd-nav-logo" onClick={close}>
            <Image src="/logo.png" alt="WPG Local Cleaners" width={120} height={36} style={{ objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
          </Link>

          <div className="wd-nav-links">
            <a href="#services" className="wd-nav-link">Services</a>
            <a href="#about" className="wd-nav-link">About</a>
            <a href="#team" className="wd-nav-link">Team</a>
            <a href="#estimate" className="wd-nav-link">Contact</a>
          </div>

          <div className="wd-nav-cta">
            <a href={clientPortalUrl} target="_blank" rel="noopener noreferrer" className="wd-btn-outline-pine" style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}>
              Client login
            </a>
            <a href="#estimate" className="wd-btn-pine">
              Get an estimate
            </a>
          </div>

          <button
            className="wd-nav-burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="wd-mobile-menu">
          <a href="#services" className="wd-mobile-link" onClick={close}>Services</a>
          <a href="#about" className="wd-mobile-link" onClick={close}>About</a>
          <a href="#team" className="wd-mobile-link" onClick={close}>Team</a>
          <a href="#estimate" className="wd-mobile-link" onClick={close}>Contact</a>
          <div className="wd-mobile-cta">
            <a href={clientPortalUrl} target="_blank" rel="noopener noreferrer" className="wd-btn-outline-pine" onClick={close}>
              Client login
            </a>
            <a href="#estimate" className="wd-btn-pine" onClick={close}>
              Get an estimate
            </a>
          </div>
        </div>
      )}
    </>
  )
}
