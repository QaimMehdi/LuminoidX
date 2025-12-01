'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"
import Link from "next/link"

const settings = {
  title: 'Pricing Plans',
  description: 'Transparent, startup-friendly pricing for AI automation and web development. Choose the plan that fits your needs and budget.',
  plan_1: {
    planName: 'Starter',
    price: '800',
    currency: '$',
    period: 'Starting at',
    description: 'Perfect for small businesses and startups looking to get started with automation or a professional web presence.',
    cta: 'Get Started',
    features: [
      'Simple Landing Page or Basic Automation',
      'Up to 3 Pages or 2 Workflows',
      'Responsive Design',
      'Basic SEO Setup',
      'Email Support',
      '1 Month Free Maintenance',
      '2 Revision Rounds',
      'Fast Delivery (7-14 days)',
    ]
  },
  plan_2: {
    planName: 'Professional',
    price: '1,500',
    currency: '$',
    period: 'Starting at',
    description: 'Ideal for growing businesses that need more advanced features and custom solutions.',
    cta: 'Get Started',
    features: [
      'Custom Website or Advanced Automation',
      'Up to 10 Pages or 5 Workflows',
      'Custom Dashboard/Admin Panel',
      'API Integrations (n8n, VAPI, Make)',
      'Advanced SEO & Performance',
      'Priority Email & Chat Support',
      '3 Months Free Maintenance',
      'Unlimited Revisions',
      'Delivery in 2-4 weeks',
    ]
  },
  plan_3: {
    planName: 'Enterprise',
    price: 'Custom',
    currency: '',
    period: '',
    description: 'For large-scale projects requiring dedicated teams, complex integrations, and ongoing support.',
    cta: 'Contact Us',
    features: [
      'Full-Stack Web Applications',
      'Complex AI Agent Systems',
      'Unlimited Pages & Workflows',
      'Dedicated Development Team',
      'Custom Integrations & APIs',
      '24/7 Priority Support',
      '6 Months Free Maintenance',
      'Ongoing Updates & Optimization',
      'Flexible Timeline',
    ]
  },
}

export default function Pricing() {
  return (
    <div id='pricing' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* plan 1 */}
        <SlideEffect isSpring={false} delay={0.1} className="text-base">
          <Card className="bg-white">
            <div className="capitalize text-start text-black text-lg font-medium">{settings.plan_1.planName}</div>
            <div className="flex flex-col items-start gap-1">
              {settings.plan_1.period && <span className="text-sm text-black/60">{settings.plan_1.period}</span>}
              <span className="font-medium text-4xl text-black">{settings.plan_1.currency}{settings.plan_1.price}</span>
            </div>
            <Link href="#contact" className="w-full">
              <Button className="w-full">{settings.plan_1.cta}</Button>
            </Link>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_1.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 2 */}
        <SlideEffect isSpring={false} delay={0.2} className="flex flex-col gap-6 text-base">
          <Card className="bg-secondary">
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="capitalize text-start text-black text-lg font-medium">{settings.plan_2.planName}</div>
              <div className="text-xs bg-accent px-2 py-1 rounded-full text-black capitalize">most popular</div>
            </div>
            <div className="flex flex-col items-start gap-1">
              {settings.plan_2.period && <span className="text-sm text-black/60">{settings.plan_2.period}</span>}
              <span className="font-medium text-4xl text-black">{settings.plan_2.currency}{settings.plan_2.price}</span>
            </div>
            <Link href="#contact" className="w-full">
              <Button className="w-full">{settings.plan_2.cta}</Button>
            </Link>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_2.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 3 */}
        <SlideEffect isSpring={false} delay={0.3} className="flex flex-col gap-6 text-base">
          <Card className="bg-white">
            <div className="capitalize text-start text-black text-lg font-medium">{settings.plan_3.planName}</div>
            <div className="flex flex-col items-start gap-1">
              {settings.plan_3.period && <span className="text-sm text-black/60">{settings.plan_3.period}</span>}
              <span className="font-medium text-4xl text-black">{settings.plan_3.currency}{settings.plan_3.price}</span>
            </div>
            <Link href="#contact" className="w-full">
              <Button className="w-full">{settings.plan_3.cta}</Button>
            </Link>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_3.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_3.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}