'use client'

import { SectionAmorce } from '../ui/SectionAmorce'
import { FicheCard } from '../ui/FicheCard'

const FICHES = [
  {
    number: '01',
    title: 'Applications mobiles',
    description:
      "iOS, Android, React Native / Expo. Des applications pensées pour être ouvertes tous les jours, pas une fois.",
    stack: ['iOS', 'Android', 'React Native', 'Expo', 'TypeScript'],
  },
  {
    number: '02',
    title: 'Applications web',
    description:
      "Next.js, React, Python. Dashboards, outils internes, plateformes SaaS — le moteur d'une activité.",
    stack: ['Next.js', 'React', 'Python', 'TypeScript', 'PostgreSQL'],
  },
  {
    number: '03',
    title: 'Sites internet',
    description:
      "Vitrine, e-commerce headless. La première impression, optimisée pour convertir, pas seulement pour plaire.",
    stack: ['Next.js', 'Tailwind CSS', 'Vercel', 'Sanity', 'Stripe'],
  },
  {
    number: '04',
    title: 'Chatbots intelligents',
    description:
      "Intelligence conversationnelle sur-mesure, intégrée aux outils existants — pas un widget générique greffé en bas de page.",
    stack: ['Claude API', 'Python', 'LangChain', 'RAG', 'Webhooks'],
  },
]

export function Fiches() {
  return (
    <section id="fiches" className="pl-10 pr-5 md:pl-24 lg:pl-32 py-16 md:py-24">
      <SectionAmorce code="Nos services" />

      <h2 className="font-display font-expanded text-[clamp(1.4rem,4vw,2.5rem)] text-encre mb-12 leading-tight uppercase">
        Quatre types de produits.
        <br />
        <span className="text-gris font-condensed">Une seule exigence : que ça fonctionne.</span>
      </h2>

      <div className="max-w-2xl">
        {FICHES.map((fiche, i) => (
          <FicheCard key={fiche.number} {...fiche} index={i} />
        ))}
      </div>
    </section>
  )
}
