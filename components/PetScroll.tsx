'use client'

import { useRef } from 'react'

const PETS = [
  { src: '/images/pets/cat.jpg', alt: 'Cat on clean stairs' },
  { src: '/images/pets/lab.jpg', alt: 'Dog relaxing on couch' },
  { src: '/images/pets/husky.jpg', alt: 'Husky with blue eyes' },
  { src: '/images/pets/calico.jpg', alt: 'Calico kitten' },
  { src: '/images/pets/cat-sink.jpg', alt: 'Cat exploring clean bathroom sink' },
  { src: '/images/pets/fluffy.jpg', alt: 'Fluffy dog on clean rug' },
  { src: '/images/pets/shihtzu.jpg', alt: 'Shih Tzu on clean floor' },
  { src: '/images/pets/golden.jpg', alt: 'Golden lab on couch' },
  { src: '/images/pets/black-lab.jpg', alt: 'Black lab on clean floor' },
  { src: '/images/pets/shepherd.jpg', alt: 'Shepherd mix on carpet' },
  { src: '/images/pets/yorkie.jpg', alt: 'Yorkie napping in sweater' },
  { src: '/images/pets/vacuum-dog.jpg', alt: 'Dog watching cleaner vacuum' },
  { src: '/images/pets/sunny-lab.jpg', alt: 'Lab relaxing in sunny living room' },
  { src: '/images/pets/couch-lab.jpg', alt: 'Black lab on leather couch' },
  { src: '/images/pets/chihuahua.jpg', alt: 'Chihuahua on clean floor' },
]

export default function PetScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const itemWidth = el.scrollWidth / PETS.length
    el.scrollBy({ left: dir === 'right' ? itemWidth * 3 : -itemWidth * 3, behavior: 'smooth' })
  }

  return (
    <div style={{ position: 'relative' }}>
      <div ref={scrollRef} className="wd-pet-scroll">
        {PETS.map(({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt={alt} className="wd-pet-photo" />
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
