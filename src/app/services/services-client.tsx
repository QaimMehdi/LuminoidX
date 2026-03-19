'use client'

import React, { useState } from 'react'
import Navbar from "@/components/navbar"
import Footer from "@/sections/footer"
import Contact from "@/sections/contact"
import SlideEffect from "@/components/slide-effect"
import TextBlurEffect from "@/components/text-blur-effect"
import Carousel from "@/components/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import * as motion from "motion/react-m"
import {
  ArrowRight, CheckCircle2, Sparkles, Layers, Rocket,
  Cpu, Palette, TestTube
} from "lucide-react"
import { allServices } from "@/data/services"

/* ───────────── Interactive Service Card ───────────── */
function ServiceSection({ service, index }: { service: any; index: number }) {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const isEven = index % 2 === 0

  return (
    <SlideEffect direction={isEven ? 'right' : 'left'} isSpring={false} className="w-full">
      <div
        id={service.id}
        className="group relative rounded-2xl bg-secondary overflow-hidden transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)]"
      >
        {/* Colored accent bar */}
        <div
          className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, ${service.color}, ${service.color}88)` }}
        />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500"
              style={{ backgroundColor: `${service.color}15` }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <service.icon className="w-6 h-6" style={{ color: service.color }} />
            </motion.div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-0.5">{service.title}</h3>
              <p className="text-sm md:text-base font-medium" style={{ color: service.color }}>{service.tagline}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
            {service.description}
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Features - Interactive checklist */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">What We Deliver</h4>
              {service.features.map((feature: string, i: number) => (
                <motion.div
                  key={i}
                  className={`flex items-start gap-2.5 p-2.5 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeFeature === i
                      ? 'bg-black text-white shadow-md'
                      : 'bg-white/60 hover:bg-white text-gray-700'
                  }`}
                  onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-300 ${
                      activeFeature === i ? 'text-[#6ECE9D]' : 'text-gray-300'
                    }`}
                  />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">By The Numbers</h4>
              <div className="grid grid-cols-3 gap-2">
                {service.stats.map((stat: any, i: number) => (
                  <motion.div
                    key={i}
                    className="bg-white/80 hover:bg-black group/stat rounded-xl p-3 text-center cursor-default transition-all duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <div className="text-lg md:text-xl font-bold text-black group-hover/stat:text-[#6ECE9D] transition-colors duration-300 mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-400 group-hover/stat:text-gray-300 transition-colors duration-300 uppercase tracking-tight font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech carousel */}
              <div className="mt-4">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Technologies</h4>
                <div className="bg-white/60 rounded-xl p-3">
                  <Carousel images={service.techLogos} itemWidth={24} itemHeight={24} spacing={30} />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Link href={`/services/${service.id}`}>
              <Button className="group/cta px-6 py-2.5" variant="secondary">
                Explore Solution
                <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://cal.com/qaim-mehdi" target="_blank" rel="noopener noreferrer">
              <Button className="group/cta px-4 py-2 h-9 text-xs">
                Discuss Project
                <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SlideEffect>
  )
}

/* ───────────── Main Page ───────────── */
export default function ServicesPage() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  
  const processSteps = [
    { icon: Sparkles, title: 'Discovery', desc: 'We research and define scope.' },
    { icon: Palette, title: 'Design', desc: 'Visual polish and prototypes.' },
    { icon: Cpu, title: 'Development', desc: 'Agile sprints and updates.' },
    { icon: TestTube, title: 'Testing', desc: 'Rigorous QA before release.' },
    { icon: Rocket, title: 'Launch', desc: 'Deploy, monitor, and iterate.' },
  ]

  return (
    <div className="relative z-10 px-4 xl:px-0 max-w-5xl mx-auto scroll-smooth pb-10">
      <Navbar />

      {/* Hero */}
      <section className="pt-0 pb-10 md:pb-16 text-center space-y-4">
        <SlideEffect>
          <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
            <Layers className="w-3.5 h-3.5" />
            Our Services
          </div>
        </SlideEffect>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          <TextBlurEffect className="text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">Everything You Need</TextBlurEffect>
          <br />
          <TextBlurEffect delayOffset={0.5} className="bg-gradient-to-r from-[#6ECE9D] to-[#4FB882] bg-clip-text text-transparent">to Ship & Scale</TextBlurEffect>
        </h1>

        <SlideEffect delay={0} className="text-sm md:text-base text-gray-500 px-6 sm:px-10 md:px-0 md:max-w-2xl mx-auto">
          From AI-powered automation to pixel-perfect web and mobile apps — we offer a full spectrum of development services, delivered with obsessive attention to quality.
        </SlideEffect>

        {/* Quick nav pills */}
        <SlideEffect className="flex flex-wrap justify-center gap-1.5 md:gap-2 pt-2">
          {allServices.map((service) => (
            <motion.a
              key={service.id}
              href={`#${service.id}`}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold border border-gray-100 text-gray-500 hover:text-white transition-all duration-300 cursor-pointer bg-white/50"
              whileHover={{ scale: 1.05, backgroundColor: service.color, color: '#fff', borderColor: service.color }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-1.5">
                <service.icon className="w-3 h-3" />
                {service.title}
              </span>
            </motion.a>
          ))}
        </SlideEffect>
      </section>

      {/* Service Sections */}
      <div className="space-y-8 md:space-y-12">
        {allServices.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <SlideEffect className="text-center mb-10">
          <h2 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 mb-2">
            Our Process
          </h2>
          <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto">
            Battle-tested methodology that ensures transparency and quality at every step.
          </p>
        </SlideEffect>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {processSteps.map((step, i) => (
            <SlideEffect key={step.title} direction="top" delay={i * 0.08} isSpring={false}>
              <motion.div
                className={`relative rounded-xl p-5 text-center cursor-pointer transition-all duration-500 h-full ${
                  hoveredStep === i
                    ? 'bg-black text-white shadow-xl'
                    : 'bg-secondary text-black hover:bg-black/5'
                }`}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute top-2 right-2 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center transition-colors duration-500 ${
                  hoveredStep === i ? 'bg-[#6ECE9D] text-black' : 'bg-black/5 text-gray-400'
                }`}>
                  {i + 1}
                </div>

                <div className={`w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center transition-all duration-500 ${
                  hoveredStep === i ? 'bg-[#6ECE9D]' : 'bg-black/5'
                }`}>
                  <step.icon className={`w-5 h-5 transition-colors duration-500 ${
                    hoveredStep === i ? 'text-black' : 'text-gray-500'
                  }`} />
                </div>

                <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                <p className={`text-[11px] leading-snug transition-colors duration-500 ${
                  hoveredStep === i ? 'text-gray-300' : 'text-gray-500'
                }`}>{step.desc}</p>

                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-1.5 w-3 h-px bg-gray-200" />
                )}
              </motion.div>
            </SlideEffect>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="pb-16 md:pb-24">
        <SlideEffect className="text-center mb-10">
          <h2 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 mb-2">
            Engagement Models
          </h2>
          <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto">
            Choose the model that fits your project scope and timeline.
          </p>
        </SlideEffect>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {[
            {
              title: 'Fixed Price',
              desc: 'Best for well-defined projects. Agreed scope, budget, and timeline.',
              ideal: 'Landing pages, automations',
              color: '#6ECE9D',
            },
            {
              title: 'Hourly',
              desc: 'Evolving projects. Pay for time spent with full transparency.',
              ideal: 'Ongoing dev, consulting',
              color: '#38BDF8',
            },
            {
              title: 'Dedicated Team',
              desc: 'Full team embedded in your workflow for long-term velocity.',
              ideal: 'Enterprise apps',
              color: '#A78BFA',
            },
            {
              title: 'Staff Augmentation',
              desc: 'Top-tier engineers that integrate into your existing team.',
              ideal: 'Scaling teams',
              color: '#F472B6',
            },
          ].map((model, i) => (
            <SlideEffect key={model.title} direction={i % 2 === 0 ? 'right' : 'left'} isSpring={false} delay={i * 0.08}>
              <motion.div
                className="group rounded-xl bg-secondary p-6 text-left transition-all duration-500 hover:bg-black hover:shadow-xl cursor-default h-full"
                whileHover={{ y: -3 }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full mb-3"
                  style={{ backgroundColor: model.color }}
                />
                <h3 className="text-base font-bold text-black group-hover:text-white transition-colors duration-300 mb-1">{model.title}</h3>
                <p className="text-[13px] text-gray-600 group-hover:text-gray-300 transition-colors duration-300 mb-3 leading-relaxed">{model.desc}</p>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#6ECE9D] transition-colors duration-300">
                  Ideal: {model.ideal}
                </div>
              </motion.div>
            </SlideEffect>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <SlideEffect isSpring={false}>
        <div className="relative rounded-2xl bg-black overflow-hidden p-8 md:p-12 text-center mb-10">
          <div className="absolute top-[-30%] left-[-10%] w-[50%] h-[200%] bg-[#6ECE9D] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-30%] right-[-10%] w-[40%] h-[200%] bg-[#4FB882] opacity-[0.08] blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-5">
            <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
              Book a free consultation and discover how we can help you ship faster and scale better.
            </p>
            <Link href="https://cal.com/qaim-mehdi" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#6ECE9D] hover:bg-[#4FB882] text-black font-bold mt-1 shadow-[0_0_20px_rgba(110,206,157,0.3)] transition-all duration-300">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </SlideEffect>

      <Contact />
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  )
}
