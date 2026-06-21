'use client'

import { motion } from 'framer-motion'
import { SectionAmorce } from '../ui/SectionAmorce'

interface PatternSwatchProps {
  type: 'diagonal' | 'horizontal' | 'vertical' | 'dots' | 'cross' | 'solid'
  id: string
}

function PatternSwatch({ type, id }: PatternSwatchProps) {
  const patternId = `pattern-${id}`

  const PatternDef = () => {
    switch (type) {
      case 'diagonal':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="4" height="4">
            <line x1="0" y1="4" x2="4" y2="0" stroke="#111110" strokeWidth="0.8" />
          </pattern>
        )
      case 'horizontal':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="4" height="4">
            <line x1="0" y1="2" x2="4" y2="2" stroke="#111110" strokeWidth="0.8" />
          </pattern>
        )
      case 'vertical':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="4" height="4">
            <line x1="2" y1="0" x2="2" y2="4" stroke="#111110" strokeWidth="0.8" />
          </pattern>
        )
      case 'dots':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="4" height="4">
            <circle cx="2" cy="2" r="0.8" fill="#111110" />
          </pattern>
        )
      case 'cross':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="4" height="4">
            <line x1="0" y1="4" x2="4" y2="0" stroke="#111110" strokeWidth="0.8" />
            <line x1="0" y1="0" x2="4" y2="4" stroke="#111110" strokeWidth="0.8" />
          </pattern>
        )
      case 'solid':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="#111110" />
          </pattern>
        )
    }
  }

  return (
    <svg width="20" height="20" className="border border-encre flex-shrink-0">
      <defs>
        <PatternDef />
      </defs>
      <rect width="20" height="20" fill={`url(#${patternId})`} />
    </svg>
  )
}

const TECH_STACK = [
  { id: 'nextjs', label: 'Next.js', pattern: 'diagonal' as const },
  { id: 'react', label: 'React', pattern: 'horizontal' as const },
  { id: 'typescript', label: 'TypeScript', pattern: 'cross' as const },
  { id: 'python', label: 'Python', pattern: 'dots' as const },
  { id: 'tailwind', label: 'Tailwind CSS', pattern: 'vertical' as const },
  { id: 'claude', label: 'Claude API', pattern: 'solid' as const },
  { id: 'expo', label: 'React Native / Expo', pattern: 'diagonal' as const },
  { id: 'postgresql', label: 'PostgreSQL', pattern: 'dots' as const },
]

export function Stack() {
  return (
    <section id="stack" className="pl-10 pr-5 md:pl-24 lg:pl-32 py-16 md:py-24 border-t border-gris/20">
      <SectionAmorce code="Légende technique" />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="font-display font-expanded text-[clamp(1.4rem,4vw,2.5rem)] text-encre mb-12 leading-tight uppercase"
      >
        Les outils du chantier.
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0 max-w-xl">
        {TECH_STACK.map((tech, i) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: i * 0.04, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-3 py-3 border-b border-gris/20"
          >
            <PatternSwatch type={tech.pattern} id={tech.id} />
            <span className="font-mono text-xs text-encre tracking-wider">{tech.label}</span>
          </motion.div>
        ))}
      </div>

      <p className="font-mono text-[11px] text-gris mt-6 tracking-wider">
        LÉGENDE — matériaux et technologies utilisés
      </p>
    </section>
  )
}
