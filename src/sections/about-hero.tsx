'use client'

import SlideEffect from "@/components/slide-effect"
import Badge from "@/components/badge"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="space-y-8 pb-10">
      <div className="text-center space-y-4">
        <SlideEffect>
          <Badge number={1} text="Our Story" />
        </SlideEffect>
        <SlideEffect delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-header font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">
            Pioneering the Future of <br /> AI-Driven Transformation
          </h2>
        </SlideEffect>
        <SlideEffect delay={0.2} className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base">
          LuminoidX was founded with a single mission: to empower businesses by bridging the gap between human ingenuity and artificial intelligence. We believe that technology should be an enabler, not a barrier.
        </SlideEffect>
      </div>

      <SlideEffect delay={0.3} className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group">
        <Image 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" 
          alt="AI Visualization" 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white space-y-1">
          <p className="text-xl font-bold tracking-tight">AI-Driven Excellence</p>
          <p className="text-sm opacity-80 text-white/80">Crafting the next generation of intelligent systems.</p>
        </div>
      </SlideEffect>

      <SlideEffect delay={0.4} className="prose prose-gray max-w-3xl mx-auto text-gray-600 leading-relaxed">
        <p>
          Starting as a small team of passionate engineers and designers, we saw firsthand how repetitive tasks and fragmented systems were draining productivity from creative minds. We set out to build something different — a boutique agency that combines deep technical expertise in AI with a human-centric approach to design.
        </p>
        <p>
          Today, LuminoidX is at the forefront of the AI revolution, helping enterprises and startups alike harness the power of autonomous agents, modern web frameworks, and seamless integrations. Our journey is just beginning, and we invite you to be a part of it.
        </p>
      </SlideEffect>
    </section>
  )
}
