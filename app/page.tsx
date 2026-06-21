import { ReferenceLine } from '@/components/reference-line/ReferenceLine'
import { BottomNav } from '@/components/ui/BottomNav'
import { DesktopNav } from '@/components/ui/DesktopNav'
import { Hero } from '@/components/sections/Hero'
import { Fiches } from '@/components/sections/Fiches'
import { Methode } from '@/components/sections/Methode'
import { Stack } from '@/components/sections/Stack'
import { Projets } from '@/components/sections/Projets'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Page() {
  return (
    <>
      <ReferenceLine />
      <DesktopNav />
      <BottomNav />

      <main className="pb-[60px] lg:pb-0">
        <Hero />
        <Fiches />
        <Methode />
        <Stack />
        <Projets />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
