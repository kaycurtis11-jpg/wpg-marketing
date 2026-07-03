const ITEMS = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Move-In / Move-Out',
  '5★ on Google',
  'Background Checked',
  'Locally Owned',
  'Winnipeg, MB',
  'Est. 2024',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="wd-marquee" aria-hidden="true">
      <div className="wd-marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="wd-marquee-item">
            {item}
            <span className="wd-marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
