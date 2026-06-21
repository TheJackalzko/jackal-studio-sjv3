'use client'

import { motion } from 'framer-motion'

interface ChecklistItemProps {
  number: string
  label: string
  description: string
  index: number
}

export function ChecklistItem({ number, label, description, index }: ChecklistItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.22, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
      className="flex gap-4 py-5 border-b border-gris/30 last:border-b-0"
    >
      {/* Square checkbox — never filled (spec: "jamais rempli avant validation") */}
      <div className="flex-shrink-0 w-4 h-4 border border-orange mt-0.5" />

      <div className="flex-1">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="font-mono text-[11px] text-gris tracking-[0.2em]">{number}</span>
          <span className="font-mono text-sm text-encre tracking-wider uppercase">{label}</span>
        </div>
        <p className="font-sans text-sm text-gris leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
