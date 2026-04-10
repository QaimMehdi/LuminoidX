'use client'

import SlideEffect from "@/components/slide-effect"
import { ShieldCheck, Zap, Heart, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation first",
    desc: "We push the boundaries of what's possible, always looking for the next breakthrough in AI and design."
  },
  {
    icon: ShieldCheck,
    title: "Integrity always",
    desc: "We build trust through transparency, honesty, and robust security in everything we deliver."
  },
  {
    icon: Zap,
    title: "Excellence driven",
    desc: "We don't settle for 'good enough'. We strive for perfection in code, design, and partnership."
  },
  {
    icon: Heart,
    title: "Empathy led",
    desc: "We understand that at the end of every system is a human. We design for people, not just for machines."
  }
]

export default function AboutValues() {
  return (
    <section className="py-8 space-y-8">
      <div className="text-center space-y-2">
        <SlideEffect>
          <h2 className="text-2xl md:text-4xl lg:text-header font-bold text-black">What Drives Us</h2>
        </SlideEffect>
        <SlideEffect delay={0.1}>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">Our core values are the foundation of every project we take on and every relationship we build.</p>
        </SlideEffect>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <SlideEffect key={v.title} delay={i * 0.1} isSpring={false} className="h-full">
            <div className="bg-white border border-black/5 hover:border-primary/30 rounded-2xl p-6 h-full flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-xl group">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <v.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-black">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          </SlideEffect>
        ))}
      </div>
    </section>
  )
}
