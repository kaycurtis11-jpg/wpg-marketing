'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'Are your cleaners background checked?',
    a: 'Yes. Every cleaner in our network goes through a thorough background check before their first job. Your home\'s safety is non-negotiable to us.',
  },
  {
    q: 'Can I customize my cleaning package?',
    a: 'Absolutely. We offer a free customizable cleaning checklist so you can tell us exactly what to prioritize in your space. Download it from this page or request specific tasks when you book.',
  },
  {
    q: 'Will my cleaner bring their own cleaning supplies?',
    a: 'Yes — our cleaners bring their own professional-grade supplies and equipment. We do ask that clients provide a vacuum, as transporting them between homes isn\'t always practical. If you don\'t have one available, just let us know ahead of time.',
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: 'No. Most of our clients provide access and let us handle the rest. We\'ll let you know when we arrive and when the job is complete.',
  },
  {
    q: 'How do I pay?',
    a: 'Payment is handled securely through our Jobber client portal. You\'ll receive an invoice after each clean and can pay online by credit card.',
  },
  {
    q: 'Do you send the same cleaner every time?',
    a: 'We always try to match you with the same cleaner for consistency. Scheduling may occasionally require a different team member, but we\'ll always let you know ahead of time.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer residential cleaning (weekly, biweekly, monthly, and one-time), commercial cleaning for offices and retail spaces, and move-in/move-out cleans.',
  },
  {
    q: 'What if I\'m not satisfied with the clean?',
    a: 'We stand behind every job. If something isn\'t right, contact us within 24 hours and we\'ll come back to make it right — at no extra charge.',
  },
  {
    q: 'What types of commercial spaces do you service?',
    a: 'We clean offices, clinics, retail spaces, and other commercial properties across Winnipeg. If you\'re not sure whether your space qualifies, just reach out — we\'re happy to discuss.',
  },
  {
    q: 'How does the process work after I request a quote?',
    a: 'Once you submit a request, our team will follow up the same day to go over your needs, confirm the scope, and schedule your first clean. No pressure, no commitment until you\'re ready.',
  },
  {
    q: 'How often can I schedule cleaning services?',
    a: 'As often as you need. We offer weekly, biweekly, and monthly schedules for both residential and commercial clients, as well as one-time and on-call cleans.',
  },
  {
    q: 'What hours can you accommodate?',
    a: 'We offer flexible scheduling designed around your routine. For commercial clients especially, we can work before or after business hours to minimize disruption.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="wd-faq">
      <div className="wd-faq-inner">
        <div className="wd-faq-header">
          <span className="wd-label" style={{ color: '#8C94A1', marginBottom: '0.75rem' }}>FAQ</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#14161C' }}>
            Common questions
          </h2>
        </div>
        <div className="wd-faq-list">
          {FAQS.map((item, i) => (
            <div key={i} className={`wd-faq-item${open === i ? ' wd-faq-open' : ''}`}>
              <button
                className="wd-faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="wd-faq-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <div className="wd-faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
