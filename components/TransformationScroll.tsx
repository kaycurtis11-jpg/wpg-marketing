'use client'

import { useRef } from 'react'

const TRANSFORMATIONS = [
  { src: '/transformations/kitchen.png', alt: 'Kitchen before and after' },
  { src: '/transformations/dirty-kitchen.png', alt: 'Kitchen counters before and after' },
  { src: '/transformations/stovetop.png', alt: 'Stovetop before and after' },
  { src: '/transformations/microwave-range.png', alt: 'Microwave before and after' },
  { src: '/transformations/microwave2.png', alt: 'Microwave interior before and after' },
  { src: '/transformations/bathroom.png', alt: 'Bathroom before and after' },
  { src: '/transformations/bathroom2.png', alt: 'Bathroom vanity before and after' },
  { src: '/transformations/bathtub.png', alt: 'Bathtub before and after' },
  { src: '/transformations/tub2.png', alt: 'Tub before and after' },
  { src: '/transformations/tub3.png', alt: 'Tub deep clean before and after' },
  { src: '/transformations/toilet.png', alt: 'Toilet before and after' },
  { src: '/transformations/sink.png', alt: 'Kitchen sink before and after' },
  { src: '/transformations/sink2.png', alt: 'Bathroom sink before and after' },
  { src: '/transformations/shower.png', alt: 'Shower before and after' },
  { src: '/transformations/shower-ledge.png', alt: 'Shower ledge before and after' },
  { src: '/transformations/countertop.png', alt: 'Countertop before and after' },
  { src: '/transformations/bedroom.png', alt: 'Bedroom before and after' },
  { src: '/transformations/entryway.png', alt: 'Entryway before and after' },
  { src: '/transformations/floor.png', alt: 'Floor before and after' },
  { src: '/transformations/window.png', alt: 'Window before and after' },
  { src: '/transformations/faucet.png', alt: 'Faucet before and after' },
]

export default function TransformationScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const itemWidth = el.scrollWidth / TRANSFORMATIONS.length
    el.scrollBy({ left: dir === 'right' ? itemWidth * 2 : -itemWidth * 2, behavior: 'smooth' })
  }

  return (
    <div style={{ position: 'relative' }}>
      <div ref={scrollRef} className="wd-transform-scroll">
        {TRANSFORMATIONS.map(({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt={alt} className="wd-transform-photo" />
        ))}
      </div>
      <button className="wd-pet-btn wd-pet-btn-left" onClick={() => scroll('left')} aria-label="Previous">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 5l-5 5 5 5" />
        </svg>
      </button>
      <button className="wd-pet-btn wd-pet-btn-right" onClick={() => scroll('right')} aria-label="Next">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 5l5 5-5 5" />
        </svg>
      </button>
    </div>
  )
}
