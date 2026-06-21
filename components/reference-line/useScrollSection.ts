'use client'

import { useState, useEffect } from 'react'

export type SectionId = 'hero' | 'fiches' | 'methode' | 'stack' | 'projets' | 'contact'

export const SECTION_IDS: SectionId[] = ['hero', 'fiches', 'methode', 'stack', 'projets', 'contact']

export function useScrollSection(): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>('hero')

  useEffect(() => {
    const ratios: Partial<Record<SectionId, number>> = {}

    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const thresholds = Array.from({ length: 21 }, (_, i) => i * 0.05)

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            ratios[id] = entry.intersectionRatio
          })

          let maxRatio = -1
          let maxId: SectionId = 'hero'
          for (const sid of SECTION_IDS) {
            const r = ratios[sid] ?? 0
            if (r > maxRatio) {
              maxRatio = r
              maxId = sid
            }
          }
          setActiveSection(maxId)
        },
        { threshold: thresholds }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return activeSection
}
