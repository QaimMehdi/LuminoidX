'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import Carousel from "@/components/carousel"
import { Smartphone, TabletSmartphone, Layers, Rocket } from "lucide-react"

const settings = {
  badge: {
    number: 4,
    text: 'MOBILE DEVELOPMENT',
  },
  title: 'Native & Cross-Platform Apps',
  description: 'We design and develop high-performance mobile applications for iOS and Android that deliver seamless user experiences and drive business growth.',
  card_1: {
    title: 'iOS & Android Development',
    content: 'Build native mobile apps with Swift, Kotlin, or cross-platform solutions using React Native and Flutter. We deliver pixel-perfect, performant apps tailored to each platform.',
    carousel_images: [
      'https://cdn.worldvectorlogo.com/logos/react-academy.svg',
      'https://cdn.worldvectorlogo.com/logos/flutter-logo.svg',
      'https://cdn.worldvectorlogo.com/logos/swift-15.svg',
      'https://cdn.worldvectorlogo.com/logos/kotlin-2.svg',
      'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
      'https://cdn.worldvectorlogo.com/logos/typescript.svg',
    ]
  },
  card_2: {
    title: 'UI/UX Design',
    content: 'Create intuitive, beautiful mobile interfaces that users love. Our design-first approach ensures every interaction feels natural and delightful.',
  },
  card_3: {
    title: 'App Store Optimization',
    content: 'Launch with confidence. We handle app store submissions, metadata optimization, and performance monitoring to maximize downloads and engagement.',
  },
}

const features = [
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description: 'One codebase, multiple platforms',
  },
  {
    icon: TabletSmartphone,
    title: 'Responsive Design',
    description: 'Adapts to any screen size',
  },
  {
    icon: Layers,
    title: 'Offline Support',
    description: 'Works without connectivity',
  },
  {
    icon: Rocket,
    title: 'Fast Performance',
    description: 'Native-like speed & smoothness',
  },
]

export default function MobileDev() {
  return (
    <div id="mobile-dev" className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* card 1 - Main card with tech carousel */}
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

        {/* Feature highlights row */}
        <SlideEffect direction="top" className="col-span-1 lg:col-span-5 h-full" isSpring={false}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-secondary p-6 text-left transition-all duration-300 hover:bg-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] cursor-default"
              >
                <div className="mb-3 w-10 h-10 rounded-xl bg-black/5 group-hover:bg-[#6ECE9D] flex items-center justify-center transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-black/60 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-sm md:text-base font-semibold text-black group-hover:text-white transition-colors duration-300">{feature.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300 mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="top" delay={0.1} className="col-span-1 lg:col-span-5 h-full" isSpring={false}>
          <Card className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-xl md:text-title text-black font-medium">{settings.card_3.title}</h3>
              <p>{settings.card_3.content}</p>
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}
