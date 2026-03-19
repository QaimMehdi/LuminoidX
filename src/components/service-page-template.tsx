'use client'

import React, { useState } from 'react'
import { notFound } from 'next/navigation'
import Navbar from "@/components/navbar"
import Footer from "@/sections/footer"
import Contact from "@/sections/contact"
import SlideEffect from "@/components/slide-effect"
import TextBlurEffect from "@/components/text-blur-effect"
import Carousel from "@/components/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import * as motion from "motion/react-m"
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react"
import { allServices } from "@/data/services"

export default function ServicePageTemplate({ slug }: { slug: string }) {
  const service = allServices.find(s => s.id === slug)
  if (!service) notFound()

  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const relatedServiceData = allServices.filter(s => service.relatedServices.includes(s.id))

  return (
    <div className="relative z-10 px-4 xl:px-0 max-w-5xl mx-auto scroll-smooth pb-10">
      <Navbar />

      {/* Hero */}
      <section className="pt-4 pb-8 md:pb-12 relative border-b border-black/5 mb-10 mt-4">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />

        <SlideEffect className="mb-6">
          <Link href="/services" className="inline-flex items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-[#6ECE9D] transition-colors group uppercase tracking-widest">
            <ArrowLeft className="w-2.5 h-2.5 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </SlideEffect>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4 flex-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-black/5 text-[9px] font-bold uppercase tracking-widest text-[#4FB882]">
              <div className="w-1 h-1 rounded-full bg-[#6ECE9D] animate-pulse" />
              Service Excellence
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              <TextBlurEffect className="text-black inline">
                {service.title}
              </TextBlurEffect>
            </h1>

            <SlideEffect delay={0.3}>
              <p className="text-base md:text-lg font-medium text-gray-500 max-w-xl leading-snug">
                {service.tagline}
              </p>
            </SlideEffect>
          </div>

          <motion.div
            className="w-16 md:w-20 h-16 md:h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-lg relative overflow-hidden group/hero-icon"
            style={{ backgroundColor: `${service.color}10` }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            <service.icon className="w-8 md:w-10 h-8 md:h-10 transition-transform duration-500 group-hover/hero-icon:scale-110" style={{ color: service.color }} />
          </motion.div>
        </div>

        <SlideEffect delay={0.5} className="mt-8 text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
          {service.longDescription}
        </SlideEffect>
      </section>

      {/* Stats */}
      <SlideEffect isSpring={false} className="mb-10">
        <div className="grid grid-cols-3 gap-3">
          {service.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-secondary hover:bg-black group/stat rounded-xl p-4 md:p-5 text-center cursor-default transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <div className="text-xl md:text-2xl font-bold text-black group-hover/stat:text-[#6ECE9D] transition-colors duration-300 mb-0.5">{stat.value}</div>
              <div className="text-[10px] text-gray-400 group-hover/stat:text-gray-300 transition-colors duration-300 uppercase tracking-wide font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </SlideEffect>

      {/* What We Deliver */}
      <section className="mb-10">
        <SlideEffect className="mb-5">
          <h2 className="text-lg md:text-xl font-bold text-black">What We Deliver</h2>
        </SlideEffect>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {service.features.map((feature, i) => (
            <SlideEffect key={i} delay={i * 0.05} isSpring={false}>
              <motion.div
                className={`flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all duration-300 ${activeFeature === i ? 'bg-black text-white shadow-lg' : 'bg-secondary hover:bg-black/5 text-gray-700'
                  }`}
                onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 transition-colors duration-300 ${activeFeature === i ? 'text-[#6ECE9D]' : 'text-gray-300'}`} />
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            </SlideEffect>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="mb-10">
        <SlideEffect className="mb-5">
          <h2 className="text-lg md:text-xl font-bold text-black">Our Approach</h2>
        </SlideEffect>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {service.approach.map((step, i) => (
            <SlideEffect key={step.step} direction="top" delay={i * 0.08} isSpring={false}>
              <motion.div
                className={`relative rounded-xl p-4 text-center cursor-pointer transition-all duration-500 h-full ${activeStep === i ? 'bg-black text-white shadow-xl' : 'bg-secondary text-black hover:bg-black/5'
                  }`}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute top-2 right-2 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center transition-colors duration-500 ${activeStep === i ? 'bg-[#6ECE9D] text-black' : 'bg-black/5 text-gray-400'
                  }`}>{i + 1}</div>
                <h4 className="font-bold text-sm mb-1.5">{step.step}</h4>
                <p className={`text-[11px] leading-snug transition-colors duration-500 ${activeStep === i ? 'text-gray-300' : 'text-gray-500'}`}>{step.detail}</p>
                {i < service.approach.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-1.5 w-3 h-px bg-gray-200" />
                )}
              </motion.div>
            </SlideEffect>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <SlideEffect className="mb-5">
          <h2 className="text-lg md:text-xl font-bold text-black">Technologies</h2>
        </SlideEffect>
        <SlideEffect isSpring={false}>
          <div className="bg-secondary rounded-xl p-5">
            <Carousel images={service.techLogos} itemWidth={36} itemHeight={36} spacing={50} />
          </div>
        </SlideEffect>
      </section>

      {/* Use Cases */}
      <section className="mb-10">
        <SlideEffect className="mb-5">
          <h2 className="text-lg md:text-xl font-bold text-black">Use Cases</h2>
        </SlideEffect>
        <div className="flex flex-wrap gap-2">
          {service.useCases.map((useCase, i) => (
            <SlideEffect key={useCase} delay={i * 0.04} isSpring={false}>
              <motion.div
                className="px-4 py-2 rounded-full bg-secondary text-xs font-medium text-gray-700 cursor-default transition-all duration-300 hover:bg-black hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {useCase}
              </motion.div>
            </SlideEffect>
          ))}
        </div>
      </section>

      {/* Related Services */}
      {relatedServiceData.length > 0 && (
        <section className="mb-10">
          <SlideEffect className="mb-5">
            <h2 className="text-lg md:text-xl font-bold text-black">Related Services</h2>
          </SlideEffect>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedServiceData.map((related) => (
              <SlideEffect key={related.id} isSpring={false}>
                <Link href={`/services/${related.id}`}>
                  <motion.div
                    className="group flex items-start gap-4 p-4 rounded-xl bg-secondary transition-all duration-300 hover:bg-black/5 cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${related.color}15` }}>
                      <related.icon className="w-5 h-5" style={{ color: related.color }} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm text-black group-hover:text-[#6ECE9D] transition-colors">{related.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{related.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#6ECE9D] ml-auto mt-1 group-hover:translate-x-1 transition-all shrink-0" />
                  </motion.div>
                </Link>
              </SlideEffect>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <SlideEffect isSpring={false} className="mb-10">
        <div className="relative rounded-2xl bg-black overflow-hidden p-8 md:p-12 text-center">
          <div className="absolute top-[-30%] left-[-10%] w-[50%] h-[200%] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" style={{ backgroundColor: service.color }} />
          <div className="relative z-10 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
              Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ECE9D] to-[#4FB882]">{service.title}</span>?
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm">
              Book a free consultation and let&apos;s discuss your project.
            </p>
            <Link href="https://cal.com/qaim-mehdi" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#6ECE9D] hover:bg-[#4FB882] text-black font-bold mt-1 shadow-[0_0_20px_rgba(110,206,157,0.3)] transition-all duration-300">
                Schedule Consultation
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
