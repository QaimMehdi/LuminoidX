'use client'

import React, { useState } from 'react'
import Badge from "@/components/badge"
import Card from "@/components/card"
import Link from "next/link";
import SlideEffect from "@/components/slide-effect"
import { CheckCircle2, ExternalLink, ArrowRight } from "lucide-react"
import * as motion from "motion/react-m"

const projects = [
  {
    id: 1,
    title: "Enterprise Support AI Platform",
    category: "AI & Automation",
    categoryColor: "bg-gradient-to-r from-[#6ECE9D] to-[#4FB882]",
    description: "A comprehensive AI-powered customer support solution handling 10,000+ daily interactions across voice and chat channels. Integrated with Zendesk, ServiceNow, and custom CRM systems for seamless ticket routing and escalation.",
    challenge: "Enterprise client needed 24/7 support coverage without scaling headcount, requiring intelligent routing and multilingual capabilities.",
    solution: "Built custom AI agents using VAPI for voice interactions and OpenAI GPT-4 for chat, integrated with n8n workflows for CRM synchronization and ticket management.",
    features: [
      "Multi-language support (15+ languages)",
      "Intelligent ticket routing and escalation",
      "Real-time CRM synchronization",
      "Analytics dashboard for support metrics",
    ],
    techStack: [
      "VAPI", "OpenAI GPT-4", "n8n", "Next.js", "TypeScript", "PostgreSQL"
    ],
    outcomes: [
      "65% reduction in support response time",
      "40% decrease in support costs",
      "24/7 availability across global time zones"
    ],
    scale: "10,000+ daily interactions, 50+ enterprise clients"
  },
  {
    id: 2,
    title: "Enterprise RAG Knowledge Assistant",
    category: "AI & Automation",
    categoryColor: "bg-gradient-to-r from-[#6ECE9D] to-[#4FB882]",
    description: "Secure, enterprise-grade RAG (Retrieval-Augmented Generation) system enabling employees to query internal documentation, policies, SOPs, and knowledge bases with AI-powered responses.",
    challenge: "Large organization with 5,000+ employees struggling with knowledge discovery across multiple systems and document repositories.",
    solution: "Developed custom RAG pipeline using vector embeddings (OpenAI), semantic search, and secure document processing with granular access controls.",
    features: [
      "Semantic search across 100,000+ docs",
      "SSO integration (SAML, OAuth)",
      "Role-based access control",
      "Citation and source tracking",
    ],
    techStack: [
      "OpenAI Embeddings", "Pinecone", "LangChain", "Next.js", "TypeScript", "Azure AD"
    ],
    outcomes: [
      "70% reduction in time to find info",
      "50% decrease in support tickets",
      "Faster onboarding (60% reduction)"
    ],
    scale: "5,000+ active users, 100,000+ documents indexed"
  },
  {
    id: 3,
    title: "Multi-Tenant SaaS Platform",
    category: "Web Development",
    categoryColor: "bg-gradient-to-r from-[#FFDA6E] to-[#FFC107]",
    description: "Enterprise-grade multi-tenant SaaS platform serving 200+ organizations with isolated workspaces, custom branding, advanced subscription management, and comprehensive admin controls.",
    challenge: "B2B software company needed a scalable platform to serve multiple enterprise clients with isolated data and flexible subscription models.",
    solution: "Architected multi-tenant system with database-level isolation, workspace management, Stripe integration for billing, and comprehensive admin dashboard.",
    features: [
      "Multi-tenant data isolation",
      "Custom branding & white-label",
      "Advanced subscription management",
      "API rate limiting & analytics"
    ],
    techStack: [
      "Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Redis"
    ],
    outcomes: [
      "200+ enterprise organizations onboarded",
      "99.9% uptime SLA achieved",
      "50% reduction in onboarding time"
    ],
    scale: "200+ organizations, 50,000+ end users"
  },
  {
    id: 4,
    title: "Enterprise Partner Portal",
    category: "Web Development",
    categoryColor: "bg-gradient-to-r from-[#FFDA6E] to-[#FFC107]",
    description: "Comprehensive partner portal for a global agency managing 500+ relationships. Features project tracking, deliverable management, invoicing, and secure document sharing.",
    challenge: "Agency managing hundreds of client relationships needed a unified platform for project visibility, communication, and document management.",
    solution: "Built custom portal with real-time project updates, integrated invoicing system, support ticket management, and secure file sharing.",
    features: [
      "Real-time project status & milestones",
      "Deliverable tracking & approval",
      "Integrated invoicing system",
      "Secure document sharing"
    ],
    techStack: [
      "Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS S3", "Tailwind CSS"
    ],
    outcomes: [
      "500+ active partner accounts",
      "80% reduction in support emails",
      "30% faster project delivery"
    ],
    scale: "500+ clients, 2,000+ active projects"
  }
]

export default function Portfolio() {
  return (
    <div id='portfolio' className="space-y-8 mx-auto">
      {/* Badge & Title */}
      <div className="space-y-4 text-center">
        <SlideEffect>
          <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            Case Studies
          </div>
        </SlideEffect>
        <SlideEffect delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">
            Enterprise Solutions <br className="hidden md:block"/> We&apos;ve Built
          </h2>
        </SlideEffect>
        <SlideEffect delay={0.2} className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto px-4">
          Explore our portfolio of enterprise-grade solutions spanning AI automation, web development, and integrated platforms. Each project demonstrates our capability to deliver scalable systems.
        </SlideEffect>
      </div>

      {/* Projects Grid */}
      <div className="space-y-6 md:space-y-8">
        {projects.map((project, index) => (
          <SlideEffect
            key={project.id}
            direction={index % 2 === 0 ? "right" : "left"}
            delay={0.1}
            isSpring={false}
          >
            <Card className="!p-6 md:!p-8 overflow-hidden group">
              <div className="grid md:grid-cols-12 gap-6">
                {/* Left Side: Info */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold text-white ${project.categoryColor}`}>
                      {project.category}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">#{project.id}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-[#6ECE9D] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-bold uppercase text-red-500/80 tracking-wide">Challenge</h4>
                      <p className="text-[11px] md:text-xs text-gray-500 line-clamp-3">{project.challenge}</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-bold uppercase text-green-500/80 tracking-wide">Solution</h4>
                      <p className="text-[11px] md:text-xs text-gray-500 line-clamp-3">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-secondary rounded-lg text-[10px] font-semibold text-gray-600 border border-black/5">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-1 bg-secondary rounded-lg text-[10px] font-semibold text-gray-400">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Side: Features & Outcomes */}
                <div className="md:col-span-5 bg-secondary/50 rounded-xl p-5 space-y-5">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase text-gray-400 tracking-wide mb-3">Key Deliverables</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6ECE9D] shrink-0 mt-0.5" />
                          <span className="text-[11px] font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase text-gray-400 tracking-wide mb-3">Proven Results</h4>
                    <div className="space-y-1.5">
                      {project.outcomes.map((outcome, idx) => (
                        <div key={idx} className="bg-white/80 rounded-lg p-2 border-l-2 border-[#6ECE9D]">
                          <p className="text-[11px] font-semibold text-gray-800">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-black/5">
                    <div className="text-[10px] text-gray-400">
                      <span className="font-bold text-gray-600 uppercase">Scale:</span> {project.scale}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </SlideEffect>
        ))}
      </div>

      {/* CTA */}
      <SlideEffect className="text-center pt-8">
        <div className="bg-secondary/40 rounded-2xl p-8 border border-black/5">
          <p className="text-sm md:text-base text-gray-600 mb-5">
            Interested in building an enterprise solution for your organization?
          </p>
          <Link href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm rounded-full font-bold hover:bg-[#6ECE9D] hover:text-black transition-all duration-300">
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SlideEffect>
    </div>
  )
}
