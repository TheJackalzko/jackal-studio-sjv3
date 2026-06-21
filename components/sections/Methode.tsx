'use client'

import { motion } from 'framer-motion'
import { SectionAmorce } from '../ui/SectionAmorce'
import { ChecklistItem } from '../ui/ChecklistItem'

const STEPS = [
  {
    number: '01',
    label: 'Cadrage',
    description: "Brief détaillé, contraintes réelles, périmètre défini. On ne commence pas avant d'avoir compris le problème.",
  },
  {
    number: '02',
    label: 'Conception',
    description: "Maquettes fonctionnelles, architecture technique, choix de stack. Validé avec vous avant le premier commit.",
  },
  {
    number: '03',
    label: 'Développement',
    description: "Sprints courts, démonstrations régulières. Vous voyez l'avancement à chaque étape, pas seulement à la livraison.",
  },
  {
    number: '04',
    label: 'Livraison',
    description: "Mise en production, passation du code, documentation. Et un suivi post-lancement si nécessaire.",
  },
]

export function Methode() {
  return (
    <section id="methode" className="pl-10 pr-5 md:pl-24 lg:pl-32 py-16 md:py-24">
      <SectionAmorce code="La méthode" />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="font-display font-expanded text-[clamp(1.4rem,4vw,2.5rem)] text-encre mb-12 leading-tight uppercase"
      >
        Un chantier,<br />pas une boîte noire.
      </motion.h2>

      <div className="max-w-lg border-t border-gris/30">
        {STEPS.map((step, i) => (
          <ChecklistItem key={step.number} {...step} index={i} />
        ))}
      </div>
    </section>
  )
}
