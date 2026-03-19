'use client'

import React, { useEffect, useRef } from 'react'
import { useMotionValue, useTransform, animate, motion, useInView } from "framer-motion"

interface CountUpProps {
  to: number
  from?: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  suffix = '',
  prefix = ''
}: CountUpProps) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayValue = useTransform(rounded, (latest) => `${prefix}${latest}${suffix}`)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      })
      return controls.stop
    }
  }, [isInView, count, to, duration, delay])

  return (
    <motion.span ref={ref}>
      {displayValue}
    </motion.span>
  )
}
