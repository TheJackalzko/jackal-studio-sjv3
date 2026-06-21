'use client'

import { useScrollSection } from '../reference-line/useScrollSection'

const NAV_ITEMS = [
  {
    id: 'hero' as const,
    label: 'Accueil',
    href: '#hero',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L10 3l7 6.5" />
        <path d="M5 9v7h4v-4h2v4h4V9" />
      </svg>
    ),
  },
  {
    id: 'fiches' as const,
    label: 'Services',
    href: '#fiches',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="6" height="6" />
        <rect x="11" y="3" width="6" height="6" />
        <rect x="3" y="11" width="6" height="6" />
        <rect x="11" y="11" width="6" height="6" />
      </svg>
    ),
  },
  {
    id: 'methode' as const,
    label: 'Méthode',
    href: '#methode',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="4" width="3" height="3" />
        <line x1="9" y1="5.5" x2="17" y2="5.5" />
        <rect x="3" y="9" width="3" height="3" />
        <line x1="9" y1="10.5" x2="17" y2="10.5" />
        <rect x="3" y="14" width="3" height="3" />
        <line x1="9" y1="15.5" x2="17" y2="15.5" />
      </svg>
    ),
  },
  {
    id: 'contact' as const,
    label: 'Contact',
    href: '#contact',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="16" height="11" rx="1" />
        <polyline points="2,5 10,12 18,5" />
      </svg>
    ),
  },
]

export function BottomNav() {
  const activeSection = useScrollSection()

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-papier border-t border-encre/20">
      <div className="flex h-[60px]">
        {NAV_ITEMS.map(({ id, label, href, icon }) => {
          const isActive = activeSection === id || (id === 'fiches' && ['fiches', 'stack', 'projets'].includes(activeSection))

          return (
            <a
              key={id}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 min-h-[44px] transition-colors duration-150 ${
                isActive ? 'text-orange' : 'text-gris'
              }`}
            >
              {icon}
              <span className="font-mono text-[9px] tracking-wider uppercase">{label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
