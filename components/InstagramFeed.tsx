'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

const POSTS = [
  { shortcode: 'DZdIbsmPAA8', type: 'reel' },
  { shortcode: 'DY-bV8Ls-Fz', type: 'reel' },
  { shortcode: 'DY51pI5N__M', type: 'reel' },
  { shortcode: 'DYe-d8sNYko', type: 'p' },
  { shortcode: 'DVO7Pq5Eksa', type: 'reel' },
]

export default function InstagramFeed() {
  useEffect(() => {
    // If embed.js already loaded before this component mounted, process now
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
      <div className="wd-instagram-embeds">
        {POSTS.map(({ shortcode, type }) => (
          <div key={shortcode} className="wd-instagram-embed-wrap">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={`https://www.instagram.com/${type}/${shortcode}/`}
              data-instgrm-version="14"
              style={{ margin: 0, width: '100%', minWidth: 'unset', maxWidth: 'unset' }}
            >
              <a
                href={`https://www.instagram.com/${type}/${shortcode}/`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#A3BADC', fontSize: '0.875rem' }}
              >
                View on Instagram
              </a>
            </blockquote>
          </div>
        ))}
      </div>
    </>
  )
}
