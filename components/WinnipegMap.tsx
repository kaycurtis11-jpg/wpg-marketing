'use client'

import { useEffect, useRef } from 'react'

const LOCATIONS = [
  { name: 'Downtown',       lat: 49.8954, lng: -97.1385 },
  { name: 'Osborne Village', lat: 49.8820, lng: -97.1440 },
  { name: 'River Heights',  lat: 49.8750, lng: -97.1630 },
  { name: 'St. Vital',      lat: 49.8530, lng: -97.0950 },
  { name: 'St. James',      lat: 49.9050, lng: -97.2200 },
  { name: 'Transcona',      lat: 49.8900, lng: -97.0200 },
  { name: 'North End',      lat: 49.9200, lng: -97.1500 },
  { name: 'Wolseley',       lat: 49.8900, lng: -97.1700 },
  { name: 'Fort Rouge',     lat: 49.8700, lng: -97.1350 },
  { name: 'Tuxedo',         lat: 49.8650, lng: -97.2000 },
  { name: 'St. Boniface',   lat: 49.8850, lng: -97.0800 },
  { name: 'Charleswood',    lat: 49.8700, lng: -97.2400 },
]

const PIN_HTML = `
<div style="
  width:36px;height:36px;
  background:#1B50AF;
  border-radius:50%;
  box-shadow:0 3px 12px rgba(27,80,175,0.45);
  display:flex;align-items:center;justify-content:center;
  border:2.5px solid white;
">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
</div>`

export default function WinnipegMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<unknown>(null)

  useEffect(() => {
    if (mapInstanceRef.current || !mapRef.current) return

    import('leaflet').then((L) => {
      const map = L.map(mapRef.current!, {
        center: [49.8951, -97.1384],
        zoom: 11,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      })

      mapInstanceRef.current = map

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        { subdomains: 'abcd', maxZoom: 19 }
      ).addTo(map)

      const icon = L.divIcon({
        html: PIN_HTML,
        className: '',
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -24],
      })

      LOCATIONS.forEach(({ name, lat, lng }) => {
        L.marker([lat, lng], { icon })
          .addTo(map)
          .bindPopup(`
            <div style="
              font-family:system-ui,sans-serif;
              font-size:0.8125rem;
              font-weight:600;
              color:#14161C;
              padding:0.125rem 0.25rem;
            ">${name}</div>
          `, { closeButton: false, className: 'wd-map-popup' })
      })
    })

    return () => {
      if (mapInstanceRef.current) {
        ;(mapInstanceRef.current as { remove: () => void }).remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
}
