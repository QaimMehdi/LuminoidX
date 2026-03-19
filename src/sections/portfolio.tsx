'use client'

import React from 'react'
import SlideEffect from "@/components/slide-effect"
import Link from "next/link";
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import LaptopMockup from "@/components/laptop-mockup"
import { projects } from "@/data/projects"

export default function Portfolio() {
  return (
    <div id='portfolio' className="space-y-12 mx-auto">
      {/* Badge & Title */}
      <div className="space-y-4 text-center">
        <SlideEffect>
          <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            Our Work
          </div>
        </SlideEffect>
        <SlideEffect delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">
            Case Studies
          </h2>
        </SlideEffect>
        <SlideEffect delay={0.2} className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto px-4">
          Explore how we help global brands transform their digital experience with AI-powered solutions and modern web technology.
        </SlideEffect>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-2 sm:px-4">
        {projects.map((project, index) => (
          <CaseStudyCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* CTA */}
      <SlideEffect className="text-center pt-8">
        <div className="bg-secondary/40 rounded-[2rem] p-8 border border-black/5 overflow-hidden relative group">
          {/* Animated background shapes */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#4B4BFF]/5 rounded-full blur-3xl pointer-events-none" 
          />

          <p className="text-sm md:text-base text-gray-600 mb-6 font-medium relative z-10">
            Ready to build your next breakthrough project?
          </p>
          <div className="relative z-10">
            <MagneticButton>
              <Link href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-sm rounded-full font-bold hover:bg-[#6ECE9D] hover:text-black transition-all duration-500 shadow-xl hover:shadow-[#6ECE9D]/20">
                Start A Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </SlideEffect>
    </div>
  )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.35
    const y = (clientY - (top + height / 2)) * 0.35
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

function CaseStudyCard({ project, index }: { project: any, index: number }) {
  const [isHovered, setIsHovered] = React.useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <SlideEffect delay={index * 0.1} isSpring={false}>
      <Link href={`/case-studies/${project.id}`} className="group block perspective-[1000px]">
        <motion.div 
          className="space-y-4"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
        >
          {/* Card Frame with Hover Content */}
          <div 
            className="relative bg-[#E8E8FF] rounded-[1.5rem] p-6 md:p-8 aspect-square flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(75,75,255,0.15)] bg-gradient-to-br from-[#E8E8FF] to-[#DADAFF]"
            style={{ transform: "translateZ(50px)" }}
          >
            {/* Background elements (Circles) */}
            <motion.div 
              animate={{ 
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? 45 : 0
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#DADAFF] rounded-full opacity-30 blur-3xl" 
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C8C8FF] rounded-full blur-xl opacity-60" />

            {/* Laptop Mockup */}
            <motion.div
              animate={{
                z: isHovered ? 100 : 0,
                scale: isHovered ? 0.7 : 0.9,
                opacity: isHovered ? 0.1 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="z-20 w-full"
            >
              <LaptopMockup logo={project.logo} bgColor={project.bgColor} />
            </motion.div>

            {/* Hover Reveal Content */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, z: 100 }}
                  animate={{ opacity: 1, scale: 1, z: 150 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 z-30 flex items-center justify-center p-6 text-center"
                >
                  <p className="text-[#333] text-xs md:text-sm font-bold leading-relaxed max-w-[200px] uppercase tracking-wider">
                    {project.summary}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Project Title & Link */}
          <div className="text-center space-y-2" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#4B4BFF] transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex justify-center">
              <div className="w-8 h-1 bg-[#4B4BFF] transition-all duration-500 group-hover:w-16 rounded-full shadow-[0_0_15px_rgba(75,75,255,0.5)]" />
            </div>
          </div>
        </motion.div>
      </Link>
    </SlideEffect>
  )
}
