'use client'

import Badge from "@/components/badge"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import TestimonialCarousel from "@/components/testimonial-carousel"

const settings = {
  badge: {
    number: 6,
    text: 'CLIENT SUCCESS',
  },
  title: 'What Our Clients Say',
  description: 'We\'re proud of the relationships we\'ve built with our clients. Here\'s what they have to say about working with LuminoidX.',
}

export default function Testimonials() {
  return (
    <div id='testimonials' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center w-full">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Testimonials */}
      <SlideEffect className="w-full">
        <TestimonialCarousel />
      </SlideEffect>
    </div>
  )
}