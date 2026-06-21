'use client'

import { motion } from 'framer-motion'
import { SectionAmorce } from '../ui/SectionAmorce'

interface ProjetCardProps {
  nom: string
  fiches: string[]
  resultat: string
  description: string
  url?: string
  index: number
}

function ProjetCard({ nom, fiches, resultat, description, url, index }: ProjetCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.25, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className="border-t border-gris/30 pt-6 pb-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4"
    >
      <div>
        {/* Fiches tags */}
        <div className="flex gap-2 mb-3 flex-wrap">
          {fiches.map((f) => (
            <span key={f} className="font-mono text-[10px] text-orange tracking-[0.2em] border border-orange/40 px-1.5 py-0.5">
              {f}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="font-display font-expanded text-base md:text-lg text-encre mb-2 uppercase tracking-tight">
          {nom}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-gris leading-relaxed max-w-md mb-4">{description}</p>

        {/* Link */}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] text-orange tracking-[0.15em] uppercase hover:gap-3 transition-all duration-150"
          >
            Voir le projet
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 10L10 2M10 2H5M10 2v5" />
            </svg>
          </a>
        )}
      </div>

      {/* Result */}
      <div className="md:text-right flex-shrink-0">
        <p className="font-mono text-xs text-gris tracking-wider mb-1 uppercase">Résultat</p>
        <p className="font-mono text-sm text-encre">{resultat}</p>
      </div>
    </motion.article>
  )
}

const PROJETS: Omit<ProjetCardProps, 'index'>[] = [
  {
    nom: 'Vulpes Zerda',
    fiches: ['FICHE 01', 'FICHE 02'],
    description: "Application mobile et interface web pour la gestion d'une activité professionnelle nomade. Architecture React Native / Next.js, synchronisation temps réel.",
    resultat: 'Déployé · iOS + Android',
    url: '#',
  },
  {
    nom: 'Phéniiks Système',
    fiches: ['FICHE 02'],
    description: 'Outil interne de pilotage opérationnel — tableaux de bord, gestion des flux, reporting automatisé. Développé avec Next.js et PostgreSQL.',
    resultat: 'Adoption interne totale',
    url: '#',
  },
  {
    nom: 'Z Forme',
    fiches: ['FICHE 01'],
    description: 'Application mobile de suivi et de gestion. React Native / Expo, synchronisation cloud, interface pensée pour un usage quotidien.',
    resultat: 'Déployé · iOS + Android',
    url: '#',
  },
]

export function Projets() {
  return (
    <section id="projets" className="pl-10 pr-5 md:pl-24 lg:pl-32 py-16 md:py-24 border-t border-gris/20">
      <SectionAmorce code="Projets" />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="font-display font-expanded text-[clamp(1.4rem,4vw,2.5rem)] text-encre mb-12 leading-tight uppercase"
      >
        Ce qu'on a construit.
      </motion.h2>

      <div className="max-w-2xl">
        {PROJETS.map((projet, i) => (
          <ProjetCard key={projet.nom} {...projet} index={i} />
        ))}
      </div>
    </section>
  )
}
