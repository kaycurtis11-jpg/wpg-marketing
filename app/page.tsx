import dynamic from 'next/dynamic'
import Image from 'next/image'
import MarketingNav from '@/components/MarketingNav'
import Marquee from '@/components/Marquee'
import ScrollReveal from '@/components/ScrollReveal'
import FAQSection from '@/components/FAQSection'
import PetScroll from '@/components/PetScroll'
import TransformationScroll from '@/components/TransformationScroll'

const WinnipegMap = dynamic(() => import('@/components/WinnipegMap'), { ssr: false })

// ─── Update these URLs when configuring Jobber ───
const JOBBER_CLIENT_PORTAL = 'https://clienthub.getjobber.com/client_hubs/2f141443-ea63-497c-9a52-35043f6f5033/login/new?source=share_login'
const ARTICLE_URL = 'https://www.winnipegfreepress.com/business/2025/09/22/leap-of-faith-lands-with-strength'

const PHONE_DISPLAY = '204-500-1894'
const PHONE_HREF = 'tel:+12045001894'
const EMAIL = 'mailto:info@wpglocalcleaners.ca'
const INSTAGRAM = 'https://www.instagram.com/wpglocalcleaners'
const INSTAGRAM_HANDLE = '@wpglocalcleaners'

// Stock photos of clean homes (replace with your own as you get them)
const HOME_PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&auto=format&fit=crop', alt: 'Clean bright kitchen' },
  { src: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80&auto=format&fit=crop', alt: 'Modern clean living room' },
  { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format&fit=crop', alt: 'Spotless bathroom' },
  { src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80&auto=format&fit=crop', alt: 'Clean bedroom' },
]

// ─── Google reviews (5★ only) — paste real review text here ───
const REVIEWS = [
  {
    name: 'Ally Panico',
    text: 'They did a lovely job cleaning my house. Extreme attention to detail and fine tuning where necessary. I also appreciated the seamless online booking process. Very lovely to work with! Definitely recommend.',
    date: 'Recent',
  },
  {
    name: 'Kyla Wanderlust',
    text: 'I had a lot going on in life and hired WPG Local Cleaners to help with some cleaning when I got behind on the house. They did such an amazing job and it was so nice to not have to worry about the stress of coming home to a dirty house on top of everything else! Thank you!',
    date: 'Recent',
  },
  {
    name: 'Ashley Tobin',
    text: 'We had a variety of cleaning companies come to our home over the years and although they presented well in their first few visits, they would slowly start missing the most obvious of areas. When we found WPG Local Cleaners we were immediately impressed with their home evaluation and the subsequent cleaning appointments. No matter which staff member came to our home, we have never been disappointed. Their price point is amazing, and each staff member speaks so highly of Kayla — knowing we hired a company that respects and appreciates their staff is a cherry on top of a great clean! I want to be selfish and keep them as my hidden gem secret, but anytime I hear of someone looking for a cleaning company I proudly recommend this team!',
    date: 'Recent',
  },
]

function StarRow({ count = 5, color = '#A3BADC' }: { count?: number; color?: string }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill={color}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ArrowRight({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill={color}>
      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

export default function WebsitePage() {
  return (
    <main>
      <MarketingNav clientPortalUrl={JOBBER_CLIENT_PORTAL} />

      {/* ─── HERO ─── */}
      <section className="wd-hero">
        <div className="wd-hero-text">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ width: 28, height: 1, background: '#1B50AF', display: 'inline-block' }} />
            <span className="wd-mono" style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8C94A1' }}>
              Est. 2024 · Winnipeg, MB
            </span>
          </div>
          <h1
            className="wd-display"
            style={{
              fontSize: 'clamp(3.5rem, 8.5vw, 9rem)',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              fontWeight: 700,
              color: '#14161C',
              marginBottom: '2rem',
            }}
          >
            Your local<br />
            cleaning{' '}
            <em style={{ color: '#1B50AF', fontStyle: 'italic' }}>professionals</em>
            <br />in Winnipeg, MB.
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#8C94A1', marginBottom: '2.5rem', maxWidth: '38ch', lineHeight: 1.65 }}>
            We match Winnipeg homes and businesses with vetted local cleaning professionals — experienced, background-checked, and priced fairly.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#estimate" className="wd-btn-pine-lg">Get an estimate</a>
            <a href={PHONE_HREF} style={{ color: '#8C94A1', fontSize: '0.9375rem', textDecoration: 'none' }}>
              or call{' '}
              <span className="wd-mono" style={{ color: '#3A3F4C' }}>{PHONE_DISPLAY}</span>
            </a>
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <StarRow color="#1B50AF" />
            <span style={{ fontSize: '0.8125rem', color: '#8C94A1' }}>Rated 5 stars on Google</span>
          </div>
          <p style={{ marginTop: '2.5rem', fontSize: '0.8125rem', color: '#B4BAC4', lineHeight: 1.5, maxWidth: '34ch' }}>
            Locally owned and operated in Winnipeg since 2024.
          </p>
        </div>
        <div className="wd-hero-image">
          {/* Replace with your own photo of a clean space */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400&q=90&auto=format&fit=crop"
            alt="Beautifully clean, bright home interior"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(246,248,252,0.15) 0%, transparent 30%)' }} />
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee />

      {/* ─── STATS ─── */}
      <section className="wd-stats">
        <div className="wd-stats-grid">
          {[
            { num: '46', label: '5-Star Google Reviews' },
            { num: '5,000+', label: 'Cleanings Completed' },
            { num: '150', label: 'Homes Served Monthly' },
            { num: 'WPG', label: 'Locally Owned' },
          ].map(({ num, label }) => (
            <div key={label} className="wd-stat">
              <span className="wd-stat-num">{num}</span>
              <span className="wd-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="wd-services">
        <a href="#estimate" className="wd-service wd-service-dark">
          <div className="wd-service-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80&auto=format&fit=crop)' }} />
          <div className="wd-service-inner">
            <span className="wd-label" style={{ color: '#A3BADC', marginBottom: '1.25rem' }}>Residential</span>
            <h2 className="wd-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'white', marginBottom: '1rem' }}>
              Home Cleaning
            </h2>
            <p style={{ color: '#8C94A1', fontSize: '0.9375rem', maxWidth: '32ch', lineHeight: 1.65, marginBottom: '2rem' }}>
              Weekly, biweekly, or monthly — customized to your home. One-time and move-in/out cleans available. We pair you with a cleaning professional in your area.
            </p>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#A3BADC', fontSize: '0.875rem', fontWeight: 600 }}>
              Book now <ArrowRight color="#A3BADC" />
            </span>
          </div>
        </a>

        <a href="#estimate" className="wd-service wd-service-sage">
          <div className="wd-service-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop)' }} />
          <div className="wd-service-inner">
            <span className="wd-label" style={{ color: '#1648A0', marginBottom: '1.25rem' }}>Commercial</span>
            <h2 className="wd-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#14161C', marginBottom: '1rem' }}>
              Commercial Cleaning
            </h2>
            <p style={{ color: '#6B7580', fontSize: '0.9375rem', maxWidth: '32ch', lineHeight: 1.65, marginBottom: '2rem' }}>
              Customized cleaning plans for offices, clinics, retail spaces, and more. Reliable, flexible scheduling built around your business hours.
            </p>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1B50AF', fontSize: '0.875rem', fontWeight: 600 }}>
              Get a quote <ArrowRight color="#1B50AF" />
            </span>
          </div>
        </a>
      </section>

      {/* ─── WHY WPG ─── */}
      <ScrollReveal>
      <section className="wd-why">
        <div className="wd-why-header">
          <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '0.75rem' }}>Why WPG Local Cleaners</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#14161C' }}>
            Local professionals. Honest rates. No surprises.
          </h2>
        </div>
        <div className="wd-why-grid">
          {[
            {
              title: 'Vetted local cleaners',
              body: 'We work with experienced Winnipeg cleaning professionals — all background-checked and selected for their attention to detail.',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B50AF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              ),
            },
            {
              title: 'Matched to your home',
              body: 'We pair you with the right cleaner for your space, schedule, and preferences — not whoever happens to be available.',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B50AF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7" r="3"/>
                  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  <path d="M21 21v-2a4 4 0 0 0-3-3.85"/>
                </svg>
              ),
            },
            {
              title: 'Transparent, fair pricing',
              body: 'Our rates are designed to be accessible without cutting corners. No hidden fees, no bait-and-switch quotes.',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B50AF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              ),
            },
            {
              title: 'Seamless booking & communication',
              body: 'Our management team handles all scheduling and communications — so you\'re never chasing someone down or left wondering.',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B50AF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
                </svg>
              ),
            },
          ].map(({ title, body, icon }) => (
            <div key={title} className="wd-why-card">
              <div className="wd-why-icon">{icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#14161C', marginBottom: '0.625rem' }}>{title}</h3>
              <p style={{ fontSize: '0.9375rem', color: '#6B7580', lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* ─── MAP ─── */}
      <section className="wd-map-section">
        <div className="wd-map-text">
          <span className="wd-label" style={{ color: '#A3BADC', marginBottom: '0.75rem' }}>Where we clean</span>
          <h2 className="wd-display" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>
            Cleaners across<br />all of Winnipeg.
          </h2>
          <p style={{ color: '#8C94A1', fontSize: '0.9375rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            We have cleaning professionals based in neighbourhoods across the city — so we can pair you with someone local to you.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Downtown & Osborne Village', 'River Heights & Tuxedo', 'St. Vital & St. Boniface', 'St. James & Charleswood', 'Transcona & North End', 'Fort Rouge & Wolseley'].map(area => (
              <div key={area} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1B50AF', flexShrink: 0, display: 'inline-block' }} />
                <span style={{ fontSize: '0.875rem', color: '#6B7580' }}>{area}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="wd-map-container">
          <WinnipegMap />
        </div>
      </section>

      {/* ─── FOUNDER STORY + PRESS ─── */}
      <ScrollReveal>
      <section id="about" className="wd-story">
        <div className="wd-story-text">
          <span className="wd-pine-bar" />
          <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '1rem' }}>Our story</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#14161C', marginBottom: '1.5rem' }}>
            Built from a leap of faith
          </h2>
          <p style={{ color: '#6B7580', lineHeight: 1.75, marginBottom: '1.25rem', maxWidth: '44ch' }}>
            WPG Local Cleaners was started in 2024 by Kayla Curtis — a Winnipeg medical student who wanted to build something that mattered while putting herself through school.
          </p>
          <p style={{ color: '#6B7580', lineHeight: 1.75, marginBottom: '1.25rem', maxWidth: '44ch' }}>
            What began as a practical solution became a company with a bigger mission: to transform cleaning into a respected profession where every team member is valued, fairly compensated, and supported.
          </p>
          <p style={{ color: '#6B7580', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '44ch' }}>
            Today WPG Local Cleaners serves homes and businesses across Winnipeg — with the same personal accountability that earned us a feature in the Winnipeg Free Press.
          </p>
          <div style={{ padding: '1.25rem', background: '#F6F8FC', borderRadius: '8px', border: '1px solid #E8EDF5', marginBottom: '1.75rem', maxWidth: '44ch' }}>
            <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '0.5rem' }}>Winnipeg Free Press · September 22, 2025</span>
            <p style={{ color: '#14161C', fontWeight: 600, fontSize: '0.9375rem', lineHeight: 1.4, marginBottom: '0.875rem' }}>
              &lsquo;Leap of faith&rsquo; lands with strength
            </p>
            <a href={ARTICLE_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#1B50AF', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
              Read the article <ArrowRight color="#1B50AF" />
            </a>
          </div>
        </div>
        <div className="wd-story-image">
          <Image
            src="/article.jpg"
            alt="WPG Local Cleaners featured in Winnipeg Free Press"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
      </section>
      </ScrollReveal>

      {/* ─── BENTO GALLERY ─── */}
      <div className="wd-bento">
        <div className="wd-bento-cell wd-bento-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=85&auto=format&fit=crop" alt="Bright clean kitchen" />
        </div>
        <div className="wd-bento-cell wd-bento-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=85&auto=format&fit=crop" alt="Spotless bathroom" />
        </div>
        <div className="wd-bento-cell wd-bento-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=900&q=85&auto=format&fit=crop" alt="Clean modern living room" />
        </div>
        <div className="wd-bento-cell wd-bento-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=700&q=85&auto=format&fit=crop" alt="Clean organized bedroom" />
        </div>
      </div>

      {/* ─── TRANSFORMATIONS ─── */}
      <section className="wd-transformations">
        <div className="wd-transformations-header">
          <div>
            <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '0.75rem' }}>Real results</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#14161C' }}>
              Before &amp; after photos from our team
            </h2>
          </div>
          <p style={{ color: '#6B7580', fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '38ch' }}>
            Every photo is from a real WPG Local Cleaners job. No staging, no stock images — just the work.
          </p>
        </div>
        <TransformationScroll />
      </section>

      {/* ─── PET FRIENDLY + BEFORE/AFTER ─── */}
      <ScrollReveal>
      <section className="wd-features-strip">
        <div className="wd-features-strip-inner">
          <div className="wd-feature-block wd-feature-block-dark">
            <span className="wd-label" style={{ color: '#A3BADC', marginBottom: '0.75rem' }}>Furry friends welcome</span>
            <h3 className="wd-display" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.15 }}>
              We love your pets.
            </h3>
            <p style={{ color: '#8C94A1', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Our cleaners are comfortable working in pet-friendly homes and are pros at tackling pet hair and dander.
            </p>
            <p style={{ color: '#A3BADC', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              We use <strong style={{ color: 'white' }}>pet-safe floor cleaners</strong> that are gentle on their paws — because not all cleaning products are created equal.
            </p>
            <PetScroll />
          </div>
          <div className="wd-feature-block wd-feature-block-light">
            <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '0.75rem' }}>Customize your clean</span>
            <h3 className="wd-display" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#14161C', marginBottom: '1rem', lineHeight: 1.15 }}>
              Your checklist, your priorities.
            </h3>
            <p style={{ color: '#6B7580', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Before every clean, we work with you to build a checklist tailored to your home — so your cleaner knows exactly what matters most to you.
            </p>
            <p style={{ color: '#6B7580', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Focus areas, special instructions, rooms to prioritize — all captured upfront so nothing gets missed.
            </p>
            <a href="/downloads/checklist.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#1B50AF', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', marginTop: '1.75rem' }}>
              Download our checklist template <ArrowRight color="#1B50AF" />
            </a>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ─── PULL QUOTE ─── */}
      <ScrollReveal>
        <section className="wd-pullquote">
          <p className="wd-pullquote-text">
            &ldquo;No matter which staff member came to our home, we have never been disappointed. I want to be selfish and keep them as my hidden gem secret.&rdquo;
          </p>
          <span className="wd-mono" style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8C94A1', marginTop: '1.5rem', display: 'block' }}>
            — Ashley Tobin, Winnipeg · 5★ Google Review
          </span>
        </section>
      </ScrollReveal>

      {/* ─── GOOGLE REVIEWS ─── */}
      <section className="wd-reviews">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '0.75rem' }}>Customer reviews</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'white' }}>
                What Winnipeg is saying
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span style={{ color: '#8C94A1', fontSize: '0.875rem' }}>Google Reviews</span>
            </div>
          </div>

          <div className="wd-reviews-grid">
            {REVIEWS.map((r) => (
              <div key={r.name} className="wd-review-card">
                <StarRow color="#A3BADC" />
                <p style={{ color: '#C8D0DA', fontSize: '0.9375rem', lineHeight: 1.7, margin: '1rem 0 1.25rem' }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem' }}>{r.name}</span>
                  <span className="wd-mono" style={{ color: '#5A6270', fontSize: '0.75rem' }}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <ScrollReveal delay={100}>
      <section id="team" className="wd-team">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span className="wd-pine-bar" />
          <span className="wd-label" style={{ color: '#1648A0', marginBottom: '0.75rem' }}>The people behind the work</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#14161C' }}>Meet our management team</h2>

          <div className="wd-team-grid">
            {/* Kayla */}
            <div>
              <div className="wd-team-photo-wrap">
                <Image
                  src="/kayla.jpg"
                  alt="Kayla Curtis — Founder & CEO"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <p style={{ fontWeight: 700, color: '#14161C', fontSize: '1rem', marginBottom: '0.25rem' }}>Kayla Curtis</p>
              <p className="wd-mono" style={{ fontSize: '0.75rem', color: '#8C94A1', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Founder & CEO</p>
            </div>

            {/* Desiree */}
            <div>
              <div className="wd-team-photo-wrap">
                <Image
                  src="/desiree.jpg"
                  alt="Desiree — Operations Manager"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <p style={{ fontWeight: 700, color: '#14161C', fontSize: '1rem', marginBottom: '0.25rem' }}>Desiree</p>
              <p className="wd-mono" style={{ fontSize: '0.75rem', color: '#8C94A1', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Operations Manager</p>
            </div>

            {/* Kris Ann */}
            <div>
              <div className="wd-team-photo-wrap">
                <Image
                  src="/krisann.jpg"
                  alt="Kris Ann — Communications Manager"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <p style={{ fontWeight: 700, color: '#14161C', fontSize: '1rem', marginBottom: '0.25rem' }}>Kris Ann</p>
              <p className="wd-mono" style={{ fontSize: '0.75rem', color: '#8C94A1', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Communications Manager</p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ─── CHECKLIST DOWNLOAD ─── */}
      <ScrollReveal delay={50}>
      <section className="wd-checklist">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="wd-label" style={{ color: '#A3BADC', marginBottom: '1rem' }}>Free resource</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'white', marginBottom: '1rem' }}>
                Our customizable cleaning checklist
              </h2>
              <p style={{ color: '#A3BADC', lineHeight: 1.75, fontSize: '1rem', maxWidth: '44ch' }}>
                The same checklist our cleaners use — adapted for your home. Download a copy to customize for your space.
              </p>
            </div>
            <a
              href="/downloads/checklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="wd-btn-outline-white"
              style={{ flexShrink: 0 }}
            >
              <DownloadIcon />
              Download (PDF)
            </a>
          </div>
          <a href="/downloads/checklist.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/checklist-preview.png"
              alt="WPG Local Cleaners cleaning checklist preview"
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 8px 40px rgba(0,0,0,0.25)', display: 'block' }}
            />
          </a>
        </div>
      </section>
      </ScrollReveal>

      {/* ─── FAQ ─── */}
      <FAQSection />

      {/* ─── HOW IT WORKS ─── */}
      <section className="wd-steps">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '0.75rem', display: 'block', textAlign: 'center' }}>How it works</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'white', textAlign: 'center' }}>
            Three steps to a cleaner space
          </h2>
          <div className="wd-steps-row">
            {[
              { n: '1', title: 'Request an estimate', desc: 'Tell us about your space and we\'ll get back to you with a quote — usually the same day.' },
              { n: '2', title: 'Create your checklist', desc: 'We build a customized checklist with you so your cleaner knows exactly what matters most.' },
              { n: '3', title: 'Enjoy a clean home', desc: 'Walk into a properly clean space — every visit, every time.' },
            ].map(({ n, title, desc }) => (
              <div key={n} style={{ textAlign: 'left' }}>
                <span className="wd-mono" style={{ fontSize: '2.25rem', fontWeight: 700, color: '#1B50AF', display: 'block', lineHeight: 1, marginBottom: '1.25rem' }}>
                  {n}
                </span>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.9375rem', color: '#8C94A1', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ESTIMATE ─── */}
      <section id="estimate" className="wd-estimate">
        <div className="wd-estimate-inner">
          <span className="wd-pine-bar" style={{ margin: '0 auto 1.5rem' }} />
          <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '1rem', display: 'block' }}>Get in touch</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#14161C', marginBottom: '0.75rem' }}>
            Request an estimate
          </h2>
          <p style={{ color: '#8C94A1', fontSize: '1rem', lineHeight: 1.65, maxWidth: '46ch', margin: '0 auto 2.5rem' }}>
            Tell us about your space and we&apos;ll get back to you with a quote — usually the same day.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://clienthub.getjobber.com/hubs/2f141443-ea63-497c-9a52-35043f6f5033/public/requests/2197662/new"
              target="_blank"
              rel="noopener noreferrer"
              className="wd-btn-pine-lg"
            >
              Residential estimate
            </a>
            <a
              href="https://clienthub.getjobber.com/hubs/2f141443-ea63-497c-9a52-35043f6f5033/public/requests/2208298/new"
              target="_blank"
              rel="noopener noreferrer"
              className="wd-btn-outline-pine"
            >
              Commercial estimate
            </a>
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+12045001894" style={{ color: '#8C94A1', fontSize: '0.9375rem', textDecoration: 'none' }}>(204) 500-1894</a>
            <a href="mailto:info@wpglocalcleaners.ca" style={{ color: '#8C94A1', fontSize: '0.9375rem', textDecoration: 'none' }}>info@wpglocalcleaners.ca</a>
          </div>
        </div>
      </section>

      {/* ─── INSTAGRAM ─── */}
      <section className="wd-instagram">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="wd-label" style={{ color: '#A3BADC', marginBottom: '0.75rem' }}>Follow us</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'white' }}>
                See our work on Instagram
              </h2>
            </div>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="wd-btn-outline-white"
              style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>
          <div className="wd-instagram-embeds">
            {[
              { shortcode: 'DZdIbsmPAA8', type: 'reel' },
              { shortcode: 'DY-bV8Ls-Fz', type: 'reel' },
              { shortcode: 'DY51pI5N__M', type: 'reel' },
              { shortcode: 'DYe-d8sNYko', type: 'p' },
              { shortcode: 'DVO7Pq5Eksa', type: 'reel' },
            ].map(({ shortcode, type }) => (
              <div key={shortcode} className="wd-instagram-embed-wrap">
                <iframe
                  src={`https://www.instagram.com/${type}/${shortcode}/embed/`}
                  className="wd-instagram-frame"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  title={`Instagram ${type} ${shortcode}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="wd-footer">
        <div className="wd-footer-grid">
          <div>
            <p style={{ color: 'white', fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
              WPG Local Cleaners
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '28ch' }}>
              Locally owned and operated in Winnipeg, MB. Transforming cleaning into a respected profession.
            </p>
          </div>

          <div>
            <span className="wd-label" style={{ color: '#5A6270', marginBottom: '1rem' }}>Services</span>
            <a href="#services" className="wd-footer-link">Home Cleaning</a>
            <a href="#services" className="wd-footer-link">Commercial Cleaning</a>
            <a href="#estimate" className="wd-footer-link">Move-in / Move-out</a>
            <a href="/downloads/checklist.pdf" target="_blank" rel="noopener noreferrer" className="wd-footer-link">Cleaning Checklist</a>
            <a href="/join" className="wd-footer-link">Join our team</a>
          </div>

          <div>
            <span className="wd-label" style={{ color: '#5A6270', marginBottom: '1rem' }}>Contact</span>
            <a href={PHONE_HREF} className="wd-footer-link wd-mono">{PHONE_DISPLAY}</a>
            <a href={EMAIL} className="wd-footer-link">info@wpglocalcleaners.ca</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="wd-footer-link">@wpglocalcleaners</a>
          </div>
        </div>

        <div className="wd-footer-bottom">
          <span>© {new Date().getFullYear()} WPG Local Cleaners. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#about" style={{ color: '#5A6270', textDecoration: 'none', fontSize: '0.8125rem' }}>About</a>
            <a href="/terms" style={{ color: '#5A6270', textDecoration: 'none', fontSize: '0.8125rem' }}>Terms &amp; Conditions</a>
            <a href={JOBBER_CLIENT_PORTAL} target="_blank" rel="noopener noreferrer" style={{ color: '#5A6270', textDecoration: 'none', fontSize: '0.8125rem' }}>
              Client login
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
