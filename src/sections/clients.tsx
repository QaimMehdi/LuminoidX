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
      className="w-full space-y-4 md:space-y-6"
    >
      <SlideEffect className="flex flex-col items-center gap-1 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          companies we&apos;ve worked with
        </p>
        <h2 className="text-sm sm:text-base md:text-lg font-medium text-black/80">
          Trusted by teams at growing businesses
        </h2>
      </SlideEffect>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex items-center gap-14 md:gap-16 lg:gap-20 py-4"
          animate={{ x: ["0%", "-100%"] }}
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
