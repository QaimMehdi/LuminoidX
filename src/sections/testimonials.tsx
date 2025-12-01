'use client'

import Badge from "@/components/badge"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

const settings = {
  badge: {
    number: 5,
    text: 'CLIENT SUCCESS',
  },
  title: 'What Our Clients Say',
  description: 'We\'re proud of the relationships we\'ve built with our clients. Here\'s what they have to say about working with LuminoidX.',
  testimonials: [
    {
      quote:
        "LuminoidX built our e-commerce automation system that handles order processing and customer support. The n8n workflows they created save us 15+ hours weekly. Highly recommended for Pakistani businesses!",
      name: "Ahmed Hassan",
      designation: "CEO at Karachi Digital Solutions",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
    },
    {
      quote:
        "They created a beautiful landing page for our startup that increased our conversions by 35%. The team understood our vision perfectly and delivered ahead of schedule.",
      name: "Sarah Mitchell",
      designation: "Founder at GrowthLab",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop",
    },
    {
      quote:
        "Working with LuminoidX was seamless. They automated our inventory management and integrated it with our existing systems. The ROI was visible within the first month.",
      name: "Fatima Khan",
      designation: "Operations Manager at Lahore Tech Hub",
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3387&auto=format&fit=crop",
    },
    {
      quote:
        "The custom dashboard they built gives us real-time insights into our business. It's intuitive, fast, and exactly what we needed. Great value for the investment.",
      name: "Marcus Chen",
      designation: "Director at DataMetrics Inc",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "LuminoidX helped us automate our client onboarding process using VAPI and custom APIs. What used to take 2 days now happens in minutes. Exceptional work!",
      name: "Ali Raza",
      designation: "Co-Founder at Islamabad Ventures",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3387&auto=format&fit=crop",
    },
  ]
}

export default function Testimonials() {
  return (
    <div id='testimonials' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Testimonials */}
      <SlideEffect>
        <AnimatedTestimonials autoplay testimonials={settings.testimonials} />
      </SlideEffect>
    </div>
  )
}