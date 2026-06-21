'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { SectionAmorce } from '../ui/SectionAmorce'

const SERVICES = [
  { value: 'fiche-01', label: 'FICHE 01 — Applications mobiles' },
  { value: 'fiche-02', label: 'FICHE 02 — Applications web' },
  { value: 'fiche-03', label: 'FICHE 03 — Sites internet' },
  { value: 'fiche-04', label: 'FICHE 04 — Chatbots intelligents' },
]

const inputClass =
  'w-full bg-transparent border border-papier/20 text-papier placeholder:text-papier/30 font-mono text-sm px-4 py-3 focus:border-orange focus:outline-none transition-colors duration-150'

const labelClass = 'font-mono text-[11px] text-papier/50 tracking-[0.2em] uppercase mb-1.5 block'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form handling — in production, wire to an API route or Resend/Formspree
    setSent(true)
  }

  return (
    <section id="contact" className="bg-encre pl-10 pr-5 md:pl-24 lg:pl-32 py-16 md:py-24">
      {/* Reference line override for dark section */}
      <SectionAmorce code="Démarrer un projet" className="[&>div]:bg-orange/50 [&>span]:text-orange/70" />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="font-display font-expanded text-[clamp(1.4rem,4vw,2.5rem)] text-papier mb-3 leading-tight uppercase"
      >
        On vous répond<br />sous 24 h.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
        className="font-sans text-sm text-papier/50 mb-10 max-w-sm"
      >
        Décrivez votre projet, même sommairement. On revient vers vous avec une première lecture gratuite.
      </motion.p>

      {sent ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
          className="border border-orange/40 px-6 py-8 max-w-md"
        >
          <p className="font-mono text-sm text-orange tracking-wider mb-2">MESSAGE ENVOYÉ</p>
          <p className="font-sans text-sm text-papier/70">On vous revient très vite.</p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          onSubmit={handleSubmit}
          className="max-w-md space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="nom" className={labelClass}>Nom</label>
            <input
              id="nom"
              name="nom"
              type="text"
              required
              autoComplete="name"
              className={inputClass}
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label htmlFor="service" className={labelClass}>Fiche concernée</label>
            <select
              id="service"
              name="service"
              required
              className={`${inputClass} appearance-none cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled className="bg-encre">
                Sélectionner un service
              </option>
              {SERVICES.map((s) => (
                <option key={s.value} value={s.value} className="bg-encre">
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className={`${inputClass} resize-none`}
              placeholder="Décrivez votre projet..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange text-papier font-mono text-[11px] tracking-[0.25em] uppercase px-6 py-4 hover:bg-orange/90 transition-colors duration-150 min-h-[44px]"
          >
            Envoyer le dossier
          </button>
        </motion.form>
      )}
    </section>
  )
}
