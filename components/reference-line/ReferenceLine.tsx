'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

export function ReferenceLine() {
  const prefersReduced = useReducedMotion()

  const rawProgress = useMotionValue(0)

  const springProgress = useSpring(rawProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.4,
  })

  const smoothProgress = prefersReduced ? rawProgress : springProgress

  // Dot travels from 4vh to 92vh as scroll goes 0→1
  const dotTop = useTransform(smoothProgress, [0, 1], ['4vh', '92vh'])

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      rawProgress.set(total > 0 ? window.scrollY / total : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [rawProgress])

  return (
    <div aria-hidden="true" className="pointer-events-none">
      {/* Vertical orange line */}
      <div className="fixed top-0 left-5 lg:left-12 w-px h-screen bg-orange z-40" />

      {/* Traveling dot */}
      <motion.div
        className="fixed left-5 lg:left-12 w-2.5 h-2.5 rounded-full bg-orange z-40"
        style={{
          top: dotTop,
          x: '-50%',
          y: '-50%',
        }}
      />
    </div>
  )
}
