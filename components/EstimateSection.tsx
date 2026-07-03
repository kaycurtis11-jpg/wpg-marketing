'use client'

import { useState, useEffect } from 'react'

export default function EstimateSection() {
  const [tab, setTab] = useState<'residential' | 'commercial'>('residential')

  useEffect(() => {
    if (!document.querySelector('link[href*="work_request_embed.css"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.media = 'screen'
      link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css'
      document.head.appendChild(link)
    }

    const scriptRes = document.createElement('script')
    scriptRes.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js'
    scriptRes.setAttribute('clienthub_id', '2f141443-ea63-497c-9a52-35043f6f5033-2197662')
    scriptRes.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/2f141443-ea63-497c-9a52-35043f6f5033/public/work_request/embedded_work_request_form?form_id=2197662')
    document.body.appendChild(scriptRes)

    const scriptCom = document.createElement('script')
    scriptCom.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js'
    scriptCom.setAttribute('clienthub_id', '2f141443-ea63-497c-9a52-35043f6f5033-2208298')
    scriptCom.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/2f141443-ea63-497c-9a52-35043f6f5033/public/work_request/embedded_work_request_form?form_id=2208298')
    document.body.appendChild(scriptCom)

    return () => {
      if (document.body.contains(scriptRes)) document.body.removeChild(scriptRes)
      if (document.body.contains(scriptCom)) document.body.removeChild(scriptCom)
    }
  }, [])

  return (
    <section id="estimate" className="wd-estimate">
      <div className="wd-estimate-inner">
        <span className="wd-pine-bar" />
        <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '1rem' }}>Get in touch</span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#14161C', marginBottom: '0.75rem' }}>
          Request an estimate
        </h2>
        <p style={{ color: '#8C94A1', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '46ch' }}>
          Tell us about your space and we&apos;ll get back to you with a quote — usually same day.
        </p>

        <div className="wd-tabs">
          <button
            onClick={() => setTab('residential')}
            className={`wd-tab${tab === 'residential' ? ' wd-tab-active' : ''}`}
          >
            Residential
          </button>
          <button
            onClick={() => setTab('commercial')}
            className={`wd-tab${tab === 'commercial' ? ' wd-tab-active' : ''}`}
          >
            Commercial
          </button>
        </div>

        <div style={{ display: tab === 'residential' ? 'block' : 'none' }}>
          <div id="2f141443-ea63-497c-9a52-35043f6f5033-2197662" />
        </div>
        <div style={{ display: tab === 'commercial' ? 'block' : 'none' }}>
          <div id="2f141443-ea63-497c-9a52-35043f6f5033-2208298" />
        </div>

        <div className="wd-estimate-fallback">
          <span style={{ fontSize: '0.8125rem', color: '#B4BAC4' }}>Prefer to reach us directly?</span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '0.75rem' }}>
            <a href="tel:+12045001894" style={{ color: '#1B50AF', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none' }}>
              (204) 500-1894
            </a>
            <a href="mailto:info@wpglocalcleaners.ca" style={{ color: '#6B7580', fontSize: '0.9375rem', textDecoration: 'none' }}>
              info@wpglocalcleaners.ca
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
