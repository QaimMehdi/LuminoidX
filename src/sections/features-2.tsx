'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import FadeEffect from "@/components/fade-effect"
import SlideEffect from "@/components/slide-effect"
import Image from "next/image"

const settings = {
  badge: {
    number: 2,
    text: 'AI AUTOMATION',
  },
  title: 'Intelligent Automation Solutions',
  description: 'Transform your business operations with AI-powered automation. We build intelligent agents and workflows that handle complex tasks, freeing your team to focus on what matters most.',
  card_1: {
    title: 'AI Agent Development',
    content: 'Custom AI agents that understand your business needs. We develop intelligent systems that can handle customer interactions, data processing, and decision-making tasks autonomously.',
    image: 'https://framerusercontent.com/images/X87jAlbYbJ0hdTyTZ6QIMoQoOo.svg'
  },
  card_2: {
    title: 'Workflow Integration',
    content: 'Seamlessly connect your tools and processes. Our automation solutions integrate with n8n, VAPI, Make, and custom APIs to create unified, efficient workflows.',
    image: 'https://framerusercontent.com/images/A718dQKmWnJEhhnu0SJfCGxzDM.svg'
  },
}

export default function Features2() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* card 1 */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
            <p className="mb-4">{settings.card_1.content}</p>
            <Image src={settings.card_1.image} alt={settings.card_1.title} width={512} height={512} />
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="left" duration={1.3} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
            <div className="relative">
              <Image src={settings.card_2.image} alt={settings.card_1.title} width={512} height={512} />
              <FadeEffect color='secondary' />
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}