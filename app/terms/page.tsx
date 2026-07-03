import MarketingNav from '@/components/MarketingNav'
import Link from 'next/link'

const JOBBER_CLIENT_PORTAL = 'https://clienthub.getjobber.com/client_hubs/2f141443-ea63-497c-9a52-35043f6f5033/login/new?source=share_login'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="wd-terms-section">
      <h2 className="wd-terms-h2">{title}</h2>
      {children}
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="wd-terms-p">{children}</p>
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="wd-terms-ul">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}

export default function TermsPage() {
  return (
    <main>
      <MarketingNav clientPortalUrl={JOBBER_CLIENT_PORTAL} />

      {/* Hero */}
      <section className="wd-terms-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <span style={{ width: 28, height: 1, background: '#1B50AF', display: 'inline-block' }} />
          <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5A6270', fontFamily: 'var(--font-jakarta)' }}>
            Policies &amp; Terms
          </span>
        </div>
        <h1 className="wd-terms-title">Cleaning Service Policies</h1>
        <p className="wd-terms-intro">
          These policies are agreed to upon booking and govern the expectations and procedures for all cleaning services provided by WPG Local Cleaners Inc. We recommend you check back regularly as updates may be made to our policies at any time.
        </p>
      </section>

      {/* Content */}
      <div className="wd-terms-body">

        <Section title="Who We Are">
          <P>WPG Local Cleaners Inc. operates as a liaison between clients and a trusted network of cleaning professionals — including both independent contractors and employees — each vetted, insured, and held under contract to uphold our service standards. Our role is to match clients with available cleaners based on scheduling, preferences, and location.</P>
          <P>This structure allows us to keep service costs more reasonable while ensuring every member of our network is compensated fairly for their work.</P>
          <P>All cleaning professionals — whether contractors or employees — are free to determine the methods, tools, and scheduling they use to fulfill client bookings, provided the results meet the agreed service standards.</P>
          <P>As a result, we cannot guarantee that a specific cleaner — or any cleaner — will be available on your exact preferred date. That said, we always strive to accommodate your requests and will communicate as promptly as possible if rescheduling is required.</P>
        </Section>

        <Section title="Payment Terms">
          <UL items={[
            'No deposit is required prior to cleaning unless under special circumstances.',
            'Invoices are sent within 24 hours of service completion. If your booking falls on a Friday, you may not receive your invoice until the following Monday, as we do not have management operations on weekends.',
            'Payment is due within seven (7) days of the invoice date unless otherwise agreed.',
            <>For recurring clients: your previous payment <strong>must</strong> be processed prior to your subsequent cleaning. Otherwise, you may be subject to an additional late payment fee.</>,
            <>Accepted payment methods: E-transfer (to <a href="mailto:info@wpglocalcleaners.ca" style={{ color: '#1B50AF' }}>info@wpglocalcleaners.ca</a>), credit/debit card via Square, or cheques by mail (in select cases only — to be approved by management).</>,
          ]} />
        </Section>

        <Section title="Contacting Management">
          <P>WPG Local Cleaners may contact you through our automated line (204) 500-1894 for appointment reminders, confirmations, or general updates. However, this number is not regularly monitored for incoming messages, and anything you send may be lost among automated reminders.</P>
          <P>For all service-related matters—including changes to your booking, cancellations, or feedback—you must contact our main line at <strong>(204) 500-1894</strong> or email us at <a href="mailto:info@wpglocalcleaners.ca" style={{ color: '#1B50AF' }}>info@wpglocalcleaners.ca</a>.</P>
          <UL items={[
            'We do not guarantee a response if you contact us through the automated line.',
            'Email response times may be slower; we recommend sending urgent information by text or call to (204) 500-1894.',
            'If you require an immediate response, please call rather than text or email.',
            'We aim to respond to client messages during business hours in a timely manner; however, due to the nature of our scheduling and limited admin availability, we do not guarantee a response within a specific timeframe.',
            'We kindly ask that you notify management directly of any changes or special requests for your cleaning at least 24 hours prior so that we can ensure clear instructions are provided to your cleaner.',
          ]} />
        </Section>

        <Section title="Use of Personal Information">
          <P>By booking with WPG Local Cleaners Inc., you agree to the collection and use of your personal information (such as name, address, phone number, and email) for the purposes of:</P>
          <UL items={[
            'Scheduling and confirming appointments',
            'Sending invoices and receipts',
            'Communicating about your service (including reminders, follow-ups, or updates)',
            'Occasional marketing emails or promotions (you may opt out at any time)',
          ]} />
          <P>Your information is securely stored and never sold or shared with third parties, except your assigned cleaner and our internal team for service purposes only.</P>
        </Section>

        <Section title="Arrival Time">
          <UL items={[
            'Due to variability in cleaning times and road conditions, our booking times are estimates only.',
            'Please allow your cleaner a grace period of 30 minutes before or after your scheduled time before contacting us or your cleaner directly.',
            'Because we work with trusted subcontracting cleaners, we do not monitor their location or time of arrival and rely on them to contact you or our management team directly for any changes or delays.',
            "If your cleaner does not arrive within the grace period, it is your (the client's) responsibility to notify our management team or contact your cleaner.",
          ]} />
        </Section>

        <Section title="Cancellations">
          <UL items={[
            'Regular clients may cancel a scheduled cleaning with no fee with at least 2 business days notice.',
            'If more than one consecutive cleaning is canceled, a 50% charge of the estimated cost will apply to each missed service.',
            'Clients who cancel more than once with less than 2 business days\' notice will be required to pay a non-refundable 50% estimated cost deposit before rebooking.',
          ]} />
        </Section>

        <Section title="Rescheduling">
          <UL items={[
            'Clients must provide a minimum of 2 business days notice to reschedule a cleaning.',
            'Rescheduling with less than 2 business days\' notice will be treated the same as a cancellation and subject to the cancellation policy above.',
            "If your scheduled cleaner is not available the day of your booking (either due to illness or other reasons) and you would still like a cleaning that day, we will do our best to send a substitute. If no one is available, we will rebook you as soon as possible according to our cleaner's availability.",
            'Please note: Our subcontracted cleaners maintain the right to alter their availability at any time, although we strive to work with individuals who are reliable and consistent.',
          ]} />
        </Section>

        <Section title="Management & Support Hours">
          <P>Our company only offers management operations Monday–Friday, 9am–5pm. We do not guarantee any response outside of those times. Please ensure that if you have notes for your upcoming cleaning, you share them prior and only during operational hours — unless sent to your cleaner directly.</P>
          <P>We kindly ask that if a cleaner provides you with their information, you do not contact them outside of business hours — only during the time of your booking.</P>
        </Section>

        <Section title="Walkthroughs & Estimates">
          <UL items={[
            "Walkthroughs are offered to all new regular/recurring clients whenever possible (depending on our manager's availability) to customize a checklist tailored to your home and preferences.",
            "If a walkthrough is not feasible in a timely manner, we may request photos to verify the condition prior to cleaning. A customized checklist may be created over the phone or individually by our clients, which must be sent to our management team to be added to your booking notes and/or shared with your cleaner.",
            "Estimates are based on both the size of your home and the scope of tasks included on your personalized checklist or our standard checklist.",
            "Although we do our best to provide the most accurate estimates possible, we do not guarantee that the entire checklist will be completed within the time frame.",
            "Although we hold all of our cleaners to the same standard, there may be slight variability in completion times.",
            "For one-time cleanings where a walkthrough cannot be completed, we require photos of the space to verify the condition of the home.",
            "WPG Local Cleaners reserves the right to alter costs at any time. You will be notified of any changes prior to your next cleaning. You must provide WPG Local Cleaners with a valid email address in order to be notified.",
          ]} />
        </Section>

        <Section title="Cleaning Scope & Timeframes">
          <UL items={[
            'Our cleaners will follow your customized checklist and strive to complete all tasks within the estimated time frame.',
            'We do not guarantee that everything will be completed in the time frame, as every house is different and booking times are estimates only.',
            'All bookings are subject to a 3-hour minimum charge unless otherwise agreed to by the cleaner.',
            'The cleaner reserves the right to leave prior to the 3 hours if all requested tasks are completed to standard.',
            'Tasks considered extras (e.g., baseboards, oven interior, fridge interior) or those lower on your priority list may only be completed if time permits.',
            'If your cleaner needs more than 30 minutes beyond the estimated time, they are expected to notify us or the client so that permission can be granted.',
            'If we or your cleaner fails to notify you, you will not be charged for more than 30 minutes of additional time.',
          ]} />
        </Section>

        <Section title="Client Responsibilities">
          <UL items={[
            'Pets must be secured or kept in a separate area during cleanings unless the cleaner has explicitly given permission otherwise.',
            'Clients must provide clear instructions for entering and exiting the home either during the initial walkthrough or at least 2 business days before the scheduled service.',
          ]} />
        </Section>

        <Section title="Satisfaction Guarantee">
          <UL items={[
            'If you are unsatisfied with a cleaning, please contact us within 24 hours of your cleaning with supporting photos/videos, or you will be responsible for full payment of the invoice without intervention.',
            'Prior to intervention we may require access to your home to assess the situation properly.',
            'We will do our best to send our management team to address any missed areas, whenever available.',
            'If we are unable to return, a note will be added to your next cleaning (if applicable) to ensure those areas are prioritized.',
          ]} />
        </Section>

        <Section title="Access to Property">
          <P>If our staff cannot access the property and has not been given reasonable instructions to do so, we will wait up to 15 minutes from the time of arrival. After that, the visit will be considered a late cancellation and a fee of 50% of the estimated service cost will apply.</P>
        </Section>

        <Section title="Health & Safety">
          <P>For the safety of our staff, we do not clean hazardous materials such as mold, human or animal waste, biohazards, infestations, or anything posing a health risk. If unsafe conditions are found, the cleaner has the right to refuse service, and a partial or full charge may still apply.</P>
        </Section>

        <Section title="Supplies & Equipment">
          <UL items={[
            'WPG Local Cleaners offers to provide all cleaners with standard cleaning supplies and equipment.',
            'Cleaners may also bring their own supplies and are encouraged to do so.',
            'Clients may request the use of their own products; however, notice must be given at least 48 hours before the scheduled cleaning. The assigned cleaner must also approve the products being used.',
            'Please note: We are not liable for any damage caused by client-provided or cleaner-provided products, including misuse or company products.',
          ]} />
        </Section>

        <Section title="Damage & Breakage Policy">
          <P>While we take every precaution to treat your home with care, accidents can occasionally happen.</P>
          <UL items={[
            'Any damage or breakage should be reported to us within 24 hours from the start of your service.',
            'We will assess the situation fairly and may offer compensation or repairs at our discretion.',
          ]} />
        </Section>

        <Section title="Tipping">
          <P>Tipping your cleaner is encouraged but not required. 100% of any tip left by the client will be provided to the cleaner assigned to your service.</P>
        </Section>

        <Section title="Cleaners">
          <UL items={[
            'WPG Local Cleaners works with trusted cleaning professionals — both independent contractors and employees — all of whom are vetted, insured, and under contract to uphold our service standards.',
            'All cleaning professionals are expected to follow our policies and provide a consistent client experience, regardless of their employment structure.',
            'Clients of WPG Local Cleaners agree not to solicit or hire any cleaner from our network for independent work outside of our business relationship for a period of 12 months following their last service.',
          ]} />
        </Section>

        <Section title="Photos">
          <P>When booking with us you agree to allow our cleaners and management team to take before and after photos of your home to be used for marketing purposes. If you do not wish for your photos to be used, please let us know and we will promptly remove any such photos from our social media accounts.</P>
        </Section>

        <Section title="Privacy & Security of Information">
          <P>Client access codes or other entry details are stored securely within our Jobber system and are only shared with the assigned cleaner for each visit and our management team. WPG Local Cleaners Inc. maintains strict confidentiality and access protocols to ensure your home remains safe and secure.</P>
        </Section>

      </div>

      {/* Footer */}
      <footer className="wd-footer" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="wd-footer-bottom" style={{ marginTop: 0 }}>
          <Link href="/" style={{ color: '#5A6270', textDecoration: 'none', fontSize: '0.8125rem' }}>
            ← Back to main site
          </Link>
          <span style={{ color: '#2A2D36', fontSize: '0.8125rem' }}>© {new Date().getFullYear()} WPG Local Cleaners Inc.</span>
        </div>
      </footer>
    </main>
  )
}
