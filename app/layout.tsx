import type { Metadata } from 'next'
import { Archivo, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jackal Studio — On construit avec précision.',
  description:
    'Applications mobiles, applications web, sites internet, intelligence conversationnelle. Conçus comme des outils qu\'on utilise vraiment, pas comme des vitrines qu\'on oublie.',
  keywords: ['agence web', 'développement mobile', 'React Native', 'Next.js', 'Mâcon', 'Lyon', 'chatbot'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
