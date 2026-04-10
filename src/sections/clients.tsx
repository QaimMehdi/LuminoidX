'use client'

import SlideEffect from "@/components/slide-effect"
import Image from "next/image"
import * as motion from "motion/react-m"

import uraan from "@/img/uraan.png"
import finkargo from "@/img/finkargo.webp"
import tcs from "@/img/tcs.png"
import dottypost from "@/img/dottypost.avif"
import mamji from "@/img/mamji.png"
import aisha from "@/img/aisha.png"
import cs from "@/img/cs.png"
import dd from "@/img/DD.png"

const companies = [
  { name: "Uraan", logo: uraan },
  { name: "Finkargo", logo: finkargo },
  { name: "TCS", logo: tcs },
  { name: "DottyPost", logo: dottypost },
  { name: "Mamji", logo: mamji },
  { name: "Aisha", logo: aisha },
  { name: "CS", logo: cs },
  { name: "DD", logo: dd },
] as const

export default function Clients() {
  // two copies so the track can loop seamlessly
  const marqueeItems = [...companies, ...companies]
  // smaller duration = faster scroll
  const duration = 10

  return (
    <section
      aria-label="Companies we have worked with"
      className="w-full"
    >
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex items-center gap-14 md:gap-16 lg:gap-20 py-4 pr-14 md:pr-16 lg:pr-20 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {marqueeItems.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center justify-center shrink-0 h-16 md:h-20"
            >
              <Image
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
