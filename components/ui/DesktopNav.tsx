'use client'

import { useScrollSection } from '../reference-line/useScrollSection'

const NAV_LINKS = [
  { label: 'Services', href: '#fiches' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Projets', href: '#projets' },
  { label: 'Contact', href: '#contact' },
]

export function DesktopNav() {
  const active = useScrollSection()

  return (
    <nav className="hidden lg:flex fixed top-0 right-0 z-50 items-center gap-8 px-10 py-6">
      {NAV_LINKS.map(({ label, href }) => {
        const sectionId = href.replace('#', '') as ReturnType<typeof useScrollSection>
        const isActive = active === sectionId

        return (
          <a
            key={href}
            href={href}
            className={`font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-150 ${
              isActive ? 'text-orange' : 'text-gris hover:text-encre'
            }`}
          >
            {label}
          </a>
        )
      })}
    </nav>
  )
}
