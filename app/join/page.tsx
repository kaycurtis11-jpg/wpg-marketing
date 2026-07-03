import MarketingNav from '@/components/MarketingNav'
import Link from 'next/link'

const JOBBER_CLIENT_PORTAL = 'https://clienthub.getjobber.com/client_hubs/2f141443-ea63-497c-9a52-35043f6f5033/login/new?source=share_login'
const EMAIL = 'info@wpglocalcleaners.ca'
const PHONE_HREF = 'tel:+12045001894'
const PHONE_DISPLAY = '204-500-1894'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#1B50AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M4 10l4 4 8-8" />
    </svg>
  )
}

export default function JoinPage() {
  return (
    <main>
      <MarketingNav clientPortalUrl={JOBBER_CLIENT_PORTAL} />

      {/* ─── HERO ─── */}
      <section style={{
        paddingTop: '10rem',
        paddingBottom: '6rem',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        background: '#111318',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-120px',
          right: '-80px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(27,80,175,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '680px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ width: 28, height: 1, background: '#1B50AF', display: 'inline-block' }} />
            <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5A6270', fontFamily: 'var(--font-jakarta)' }}>
              Careers · Winnipeg, MB
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: 'clamp(2.75rem, 6vw, 5.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              fontWeight: 700,
              color: 'white',
              marginBottom: '2rem',
            }}
          >
            Join the<br />
            <em style={{ color: '#1B50AF', fontStyle: 'italic' }}>WPG Local</em><br />
            Cleaners team.
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#8C94A1', lineHeight: 1.7, maxWidth: '44ch', marginBottom: '2.5rem' }}>
            We&apos;re building something different — a cleaning company where the people doing the work are valued, fairly paid, and set up to succeed.
          </p>
          <a
            href={`mailto:${EMAIL}?subject=WPG Local Cleaners — Job Application&body=Hi Kayla,%0A%0AI'm interested in joining the WPG Local Cleaners team.%0A%0AName:%0APhone:%0AExperience:%0AAvailability:%0A%0AI've attached my resume.`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#1B50AF',
              color: 'white',
              padding: '0.875rem 2rem',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              transition: 'background 0.15s',
            }}
          >
            Apply now — email your resume
          </a>
        </div>
      </section>

      {/* ─── WHY WORK WITH US ─── */}
      <section style={{ padding: '6rem 5rem', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '0.75rem' }}>Why join us</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#14161C' }}>
              What you can expect working with us
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              {
                title: 'Flexible scheduling',
                body: 'Work hours that fit your life. Set your availability and we build around it — full-time, part-time, or supplemental income.',
              },
              {
                title: 'Competitive pay',
                body: 'We believe the people doing the work deserve fair compensation. Our rates reflect the skill and care required to do this job well.',
              },
              {
                title: 'A team that has your back',
                body: 'You\'re not just a number here. We\'re a small, tight-knit team and we invest in the people who represent our company.',
              },
              {
                title: 'Training & support',
                body: 'Whether you\'re new to professional cleaning or experienced, we provide onboarding, ongoing guidance, and the tools you need.',
              },
              {
                title: 'Consistent clients',
                body: 'We match you with regular clients so you\'re not starting fresh every day. Build familiarity, build trust, build a routine.',
              },
              {
                title: 'Be part of something growing',
                body: 'WPG Local Cleaners is a young, fast-growing company. There\'s real room to grow with us as we expand.',
              },
            ].map(({ title, body }) => (
              <div key={title} style={{
                padding: '2rem 1.75rem',
                background: '#F6F8FC',
                borderRadius: '10px',
                border: '1px solid #E8EDF5',
              }}>
                <span style={{ display: 'block', width: 8, height: 8, background: '#1B50AF', borderRadius: '50%', marginBottom: '1.25rem' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#14161C', marginBottom: '0.625rem' }}>{title}</h3>
                <p style={{ fontSize: '0.9375rem', color: '#6B7580', lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE'RE LOOKING FOR ─── */}
      <section style={{ padding: '6rem 5rem', background: '#F6F8FC', borderTop: '1px solid #E8EDF5' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '0.75rem' }}>Requirements</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#14161C', marginBottom: '1.5rem' }}>
              What we&apos;re looking for
            </h2>
            <p style={{ color: '#6B7580', lineHeight: 1.75, marginBottom: '2rem' }}>
              You don&apos;t need years of professional experience — but you do need to care about doing the job right. We can teach technique; we can&apos;t teach pride in your work.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Reliable, punctual, and professional',
                'Attention to detail — you notice what others miss',
                'Comfortable working independently',
                'Reliable transportation to reach client locations',
                'Clear background check',
                'Friendly and respectful with clients',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckIcon />
                  <span style={{ color: '#3A3F4C', fontSize: '0.9375rem', lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '0.75rem' }}>Positions</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#14161C', marginBottom: '1.5rem' }}>
              Current openings
            </h2>
            {[
              {
                role: 'Residential Cleaner',
                type: 'Part-time / Full-time',
                desc: 'Deliver regular and one-time cleaning services to residential clients across Winnipeg.',
              },
              {
                role: 'Commercial Cleaner',
                type: 'Part-time / Contract',
                desc: 'Maintain offices, retail spaces, and commercial properties on a recurring schedule.',
              },
              {
                role: 'Move-In / Move-Out Specialist',
                type: 'On-call / Flexible',
                desc: 'Deep cleaning for properties between tenants or owners — detail-oriented work with high standards.',
              },
            ].map(({ role, type, desc }) => (
              <div key={role} style={{
                padding: '1.5rem',
                background: 'white',
                borderRadius: '8px',
                border: '1px solid #E8EDF5',
                marginBottom: '1rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 700, color: '#14161C', fontSize: '0.9375rem' }}>{role}</span>
                  <span style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#1B50AF',
                    background: '#E8F0FA',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                  }}>{type}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6B7580', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW TO APPLY ─── */}
      <section style={{ padding: '6rem 5rem', background: '#111318', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="wd-label" style={{ color: '#5A6270', marginBottom: '0.75rem' }}>How to apply</span>
          <h2
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'white',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            Send us your resume.
          </h2>
          <p style={{ color: '#8C94A1', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Email your resume to <strong style={{ color: 'white' }}>{EMAIL}</strong> with a short note about yourself — your availability, any experience, and why you want to join the team. We respond to every application.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`mailto:${EMAIL}?subject=WPG Local Cleaners — Job Application&body=Hi Kayla,%0A%0AI'm interested in joining the WPG Local Cleaners team.%0A%0AName:%0APhone:%0AExperience:%0AAvailability:%0A%0AI've attached my resume.`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#1B50AF',
                color: 'white',
                padding: '0.875rem 2rem',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
            >
              Email your application
            </a>
            <a
              href={PHONE_HREF}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: '#6B8CB8',
                fontSize: '0.9375rem',
                textDecoration: 'none',
                fontFamily: 'var(--font-jakarta)',
              }}
            >
              or call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="wd-footer" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="wd-footer-bottom" style={{ marginTop: 0 }}>
          <Link href="/" style={{ color: '#5A6270', textDecoration: 'none', fontSize: '0.8125rem' }}>
            ← Back to main site
          </Link>
          <span style={{ color: '#2A2D36', fontSize: '0.8125rem' }}>© {new Date().getFullYear()} WPG Local Cleaners</span>
        </div>
      </footer>
    </main>
  )
}
