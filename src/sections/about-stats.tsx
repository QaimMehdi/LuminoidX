'use client'

import SlideEffect from "@/components/slide-effect"
import CountUp from "@/components/count-up"

const stats = [
  { label: "Successful Projects", value: 150, suffix: "+" },
  { label: "Satisfied Clients", value: 85, suffix: "+" },
  { label: "Countries Served", value: 12, suffix: "+" },
  { label: "Hours Saved yearly", value: 10, suffix: "K+" },
]

export default function AboutStats() {
  return (
    <section className="bg-black rounded-3xl py-12 px-6 md:px-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <SlideEffect key={stat.label} delay={i * 0.1} isSpring={false} className="text-center space-y-2">
            <div className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-white/50 text-xs md:text-sm uppercase tracking-widest font-bold">
              {stat.label}
            </p>
          </SlideEffect>
        ))}
      </div>
    </section>
  )
}
