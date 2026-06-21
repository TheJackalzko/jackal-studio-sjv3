'use client'

import { motion } from 'framer-motion'

interface FicheCardProps {
  number: string
  title: string
  description: string
  stack: string[]
  index: number
}

export function FicheCard({ number, title, description, stack, index }: FicheCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.25, delay: index * 0.06, ease: [0.4, 0, 0.2, 1] }}
      className="border-t border-gris/40 pt-6 pb-8"
    >
      {/* Header */}
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-mono text-[11px] text-orange tracking-[0.2em]">
          FICHE {number}
        </span>
        <div className="flex-1 h-px bg-gris/30" />
      </div>

      {/* Title */}
      <h3 className="font-display font-expanded text-lg md:text-xl text-encre mb-3 tracking-tight uppercase leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm text-encre/80 leading-relaxed mb-5 max-w-md">
        {description}
      </p>

      {/* Stack legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {stack.map((item) => (
          <span key={item} className="font-mono text-[11px] text-gris tracking-wider">
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
