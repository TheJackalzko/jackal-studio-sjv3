'use client'

import { motion } from 'framer-motion'
import { Cartouche } from '../ui/Cartouche'

const ease = [0.4, 0, 0.2, 1] as const

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-center pl-10 pr-5 md:pl-24 lg:pl-32 pt-16 pb-24 lg:pb-16">

      {/* Desktop: cartouche floats top-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease }}
        className="hidden lg:block absolute top-10 right-10"
      >
        <Cartouche compact />
      </motion.div>

      {/* Mobile: cartouche inline at top */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease }}
        className="lg:hidden mb-8 w-full max-w-[280px]"
      >
        <Cartouche />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.08, ease }}
        className="font-display font-expanded text-[clamp(2rem,8vw,4.5rem)] leading-[1.05] text-encre mb-6 max-w-3xl"
      >
        On construit<br />avec précision.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.15, ease }}
        className="font-sans text-sm md:text-base text-gris leading-relaxed max-w-sm md:max-w-md mb-10"
      >
        Applications mobiles, applications web, sites internet, intelligence conversationnelle.
        Conçus comme des outils qu'on utilise vraiment, pas comme des vitrines qu'on oublie.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, delay: 0.22, ease }}
      >
        <a
          href="#contact"
          className="inline-block border border-orange text-encre font-mono text-[11px] tracking-[0.25em] uppercase px-6 py-3.5 hover:bg-orange hover:text-papier transition-colors duration-150 min-h-[44px] flex items-center"
        >
          Démarrer un projet
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6, ease }}
        className="absolute bottom-8 left-10 md:left-24 lg:left-32 flex items-center gap-3"
      >
        <div className="w-8 h-px bg-gris/50" />
        <span className="font-mono text-[10px] text-gris tracking-[0.2em] uppercase">Défiler</span>
      </motion.div>

      {/* Technical decoration — SVG crosshair, bottom-right */}
      <svg
        className="absolute bottom-10 right-10 opacity-[0.06] hidden md:block"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        stroke="#111110"
        strokeWidth="1"
      >
        <circle cx="60" cy="60" r="40" />
        <circle cx="60" cy="60" r="20" />
        <line x1="60" y1="0" x2="60" y2="35" />
        <line x1="60" y1="85" x2="60" y2="120" />
        <line x1="0" y1="60" x2="35" y2="60" />
        <line x1="85" y1="60" x2="120" y2="60" />
        <circle cx="60" cy="60" r="2" fill="#111110" />
        <line x1="60" y1="20" x2="80" y2="20" />
        <text x="83" y="23" fontSize="7" fontFamily="monospace" fill="#111110" stroke="none">R40</text>
      </svg>
    </section>
  )
}
