'use client'

import SlideEffect from "@/components/slide-effect"
import Badge from "@/components/badge"
import { Target, Eye } from "lucide-react"

export default function AboutMission() {
  return (
    <section className="grid md:grid-cols-2 gap-8 py-10">
      {/* Mission */}
      <SlideEffect direction="right" className="bg-secondary rounded-3xl p-8 md:p-12 space-y-6 flex flex-col items-start justify-center">
        <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
          <Target size={28} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-black">Our Mission</h3>
        <p className="text-gray-600 leading-relaxed">
          To empower businesses with intelligent automation and human-centric design, transforming how they interact with technology and scale their operations globally.
        </p>
      </SlideEffect>

      {/* Vision */}
      <SlideEffect direction="left" delay={0.1} className="bg-black rounded-3xl p-8 md:p-12 space-y-6 flex flex-col items-start justify-center text-white">
        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#6ECE9D]">
          <Eye size={28} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
        <p className="text-white/70 leading-relaxed">
          To become the world&apos;s most trusted partner for AI-driven transformation, where every business has the tools to achieve their full creative and technical potential.
        </p>
      </SlideEffect>
    </section>
  )
}
