'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import Carousel from "@/components/carousel"
import SlideEffect from "@/components/slide-effect"

const settings = {
  badge: {
    number: 1,
    text: 'our services',
  },
  title: 'AI Automation & Web Development',
  description: 'We specialize in building intelligent AI agents, automating complex workflows, and developing scalable web applications that help businesses thrive in the digital age.',
  card_1: {
    title: 'AI Agent Development',
    content: 'We build custom AI agents that integrate seamlessly with your existing tools and workflows. Our expertise includes n8n, VAPI, Make, and custom API integrations to create intelligent automation solutions.',
    carousel_images: [
      'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
      'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
      'https://cdn.worldvectorlogo.com/logos/nestjs.svg',
      'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
      'https://cdn.worldvectorlogo.com/logos/svelte-1.svg',
      'https://cdn.worldvectorlogo.com/logos/golang-1.svg',
      'https://cdn.worldvectorlogo.com/logos/rust.svg',
    ]
  },
  card_2: {
    title: 'Workflow Automation',
    content: 'Streamline your business processes with intelligent automation. We integrate with n8n, VAPI, Make, and custom APIs to eliminate manual tasks and boost productivity.'
  },
  card_3: {
    title: 'Custom API Integration',
    content: 'Connect your systems with custom API integrations. We build robust, scalable solutions that seamlessly integrate with your existing infrastructure and third-party services.'
  },
  card_4: {
    title: 'Modern Web Development',
    content: 'From landing pages to complex dashboards, we build responsive, scalable web applications. Our solutions include business websites, admin panels, and enterprise-grade web apps that grow with your business.',
    carousel_images: [
      'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
      'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
      'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
      'https://cdn.worldvectorlogo.com/logos/typescript.svg',
      'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
      'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
      'https://cdn.worldvectorlogo.com/logos/python-5.svg',
    ]
  },
}

export default function Features1() {
  return (
    <div id='features' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-none text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* card 1 */}
        <SlideEffect direction="right" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
            <p className="mb-4">{settings.card_1.content}</p>
            <Carousel images={settings.card_1.carousel_images} />
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="left" duration={1.3} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
          </Card>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="right" duration={1} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_3.title}</h3>
            <p>{settings.card_3.content}</p>
          </Card>
        </SlideEffect>

        {/* card 4 */}
        <SlideEffect direction="left" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_4.title}</h3>
            <p className="mb-4">{settings.card_4.content}</p>
            <Carousel images={settings.card_4.carousel_images} />
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}