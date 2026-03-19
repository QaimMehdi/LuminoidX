'use client'

import { useParams, useRouter } from 'next/navigation'
import { projects } from '@/data/projects'
import Navbar from '@/components/navbar'
import Footer from '@/sections/footer'
import Contact from '@/sections/contact'
import SlideEffect from '@/components/slide-effect'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle2, Cpu, HelpCircle, Lightbulb, Trophy, Target, ArrowRight } from "lucide-react"
import LaptopMockup from '@/components/laptop-mockup'
import Link from 'next/link'
import * as React from 'react'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <Button onClick={() => router.push('/case-studies')}>Go Back</Button>
        </div>
      </div>
    )
  }

  return (
    <main className="relative z-10 scroll-smooth">
      <Navbar />

      <div className="px-4 xl:px-0 max-w-5xl mx-auto py-12 space-y-20 md:space-y-32">
        {/* Hero Section */}
        <section className="space-y-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SlideEffect>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.duration && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                      {project.duration}
                    </span>
                  )}
                </div>
              </SlideEffect>
              <SlideEffect delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                  {project.title}
                </h1>
              </SlideEffect>
              <SlideEffect delay={0.2}>
                <div className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                  {project.introduction}
                </div>
              </SlideEffect>
            </div>
            <SlideEffect delay={0.3} className="relative aspect-[4/3] bg-[#F5F5FF] rounded-[2rem] p-8 flex items-center justify-center">
              <LaptopMockup logo={project.logo} bgColor={project.bgColor} />
            </SlideEffect>
          </div>
        </section>

        {/* Stats & Tools Bar */}
        {(project.duration || project.tools) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.duration && (
              <SlideEffect className="bg-blue-500 rounded-[2rem] p-8 text-white flex flex-col justify-center items-center text-center space-y-2">
                <Target size={32} />
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">Duration</span>
                <span className="text-3xl md:text-4xl font-extrabold">{project.duration}</span>
              </SlideEffect>
            )}
            {project.tools && (
              <SlideEffect delay={0.1} className="bg-[#1a1a2e] rounded-[2rem] p-8 text-white space-y-4">
                <div className="flex items-center gap-2">
                  <Cpu size={24} className="text-blue-400" />
                  <span className="text-sm font-bold uppercase tracking-widest opacity-80">Tools & Technologies</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 rounded-xl text-sm font-semibold border border-white/10">
                      • {tool}
                    </span>
                  ))}
                </div>
              </SlideEffect>
            )}
          </div>
        )}

        {/* Requirements & Tech Stack */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <SlideEffect className="space-y-6">
            <div className="flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Key Deliverables</h2>
            </div>
            <ul className="space-y-4">
              {project.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={18} />
                  <span className="font-medium">{req}</span>
                </li>
              ))}
            </ul>
          </SlideEffect>

          <SlideEffect delay={0.1} className="space-y-6">
            <div className="flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Cpu className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-secondary rounded-xl text-sm font-bold text-gray-700 border border-black/5 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </SlideEffect>
        </div>

        {/* Problem & Solution - Deep Dive */}
        <section className="space-y-24 md:space-y-32">
          {/* Problem Section */}
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <SlideEffect className="space-y-4">
                <div className="p-4 bg-red-100 w-fit rounded-3xl text-red-600 shadow-sm">
                  <HelpCircle size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">The Challenge</h2>
                <p className="text-gray-500 font-medium">Identifying core hurdles and technical limitations.</p>
              </SlideEffect>
            </div>
            <div className="md:col-span-8">
              <SlideEffect delay={0.2}>
                <div className="prose prose-xl max-w-none text-gray-700 leading-[1.8] space-y-10 whitespace-pre-line bg-secondary/30 p-10 md:p-16 rounded-[3rem] border border-black/5 shadow-inner">
                  {project.problem}
                </div>
              </SlideEffect>
            </div>
          </div>

          <div className="h-px bg-gray-200/50" />

          {/* Solution Section */}
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <SlideEffect className="space-y-4">
                <div className="p-4 bg-green-100 w-fit rounded-3xl text-green-600 shadow-sm">
                  <Lightbulb size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">The Strategy</h2>
                <p className="text-gray-500 font-medium">How we engineered the breakthrough solution.</p>
              </SlideEffect>
            </div>
            <div className="md:col-span-8">
              <SlideEffect delay={0.2}>
                <div className="prose prose-xl max-w-none text-gray-700 leading-[1.8] space-y-10 whitespace-pre-line bg-[#F0F4FF] p-10 md:p-16 rounded-[3rem] border border-blue-500/10 shadow-inner">
                  {project.solution}
                </div>
              </SlideEffect>
            </div>
          </div>

          {/* Proven Results Section */}
          <div className="bg-secondary/40 rounded-[3.5rem] p-10 md:p-20">
            <SlideEffect className="text-center space-y-4 mb-16">
              <div className="flex justify-center">
                <div className="p-4 bg-yellow-100/50 w-fit rounded-3xl">
                  <Trophy className="text-yellow-600" size={40} />
                </div>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Proven Results</h3>
              <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">Measurable impact and successful outcomes.</p>
            </SlideEffect>

            <div className="grid md:grid-cols-3 gap-8">
              {project.results.map((result, i) => (
                <SlideEffect key={i} delay={i * 0.1}>
                  <div className="bg-white h-full p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-black/5 transform transition-all duration-500 hover:scale-105 group">
                    <div className="w-12 h-1.5 bg-[#4B4BFF] mb-6 rounded-full group-hover:w-20 transition-all duration-500" />
                    <p className="text-xl font-bold text-gray-900 leading-tight">{result}</p>
                  </div>
                </SlideEffect>
              ))}
            </div>
          </div>
        </section>

        {/* Custom CTA */}
        <SlideEffect className="text-center pt-8">
          <div className="bg-[#1a1a2e] text-white rounded-[3rem] p-10 md:p-16 space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold">
                Want to create an app like {project.title}???
              </h3>
              <p className="text-gray-400 max-w-xl mx-auto text-lg">
                Let&apos;s build something extraordinary together. Our team is ready to scale your vision.
              </p>
            </div>

            <div className="relative z-10">
              <Link href="#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-[#6ECE9D] rounded-full font-extrabold text-lg transition-all duration-500 shadow-2xl">
                Contact Now
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </SlideEffect>

        <Contact />
        <Footer />
      </div>
    </main>
  )
}
