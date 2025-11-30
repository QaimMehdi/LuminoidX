'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"

const settings = {
  title: 'Our Services',
  description: 'We offer comprehensive AI automation and web development solutions tailored to your business needs. Get in touch to discuss your project and receive a custom quote.',
  plan_1: {
    planName: 'AI Automation',
    price: 'Custom',
    currency: '',
    description: 'Intelligent automation solutions for your business.',
    cta: 'get a quote',
    features: [
      'Custom AI Agent Development',
      'Workflow Automation',
      'n8n Integration',
      'VAPI Integration',
      'Make.com Integration',
      'Custom API Development',
      'Process Optimization',
      '24/7 Support',
      'Ongoing Maintenance'
    ]
  },
  plan_2: {
    planName: 'Web Development',
    price: 'Custom',
    currency: '',
    description: 'Modern web solutions that scale with your business.',
    cta: 'get a quote',
    features: [
      'Landing Pages',
      'Business Websites',
      'Custom Dashboards',
      'Admin Panels',
      'Scalable Web Apps',
      'Responsive Design',
      'Performance Optimization',
      'Ongoing Support',
    ]
  },
  plan_3: {
    planName: 'Full Service',
    price: 'Custom',
    currency: '',
    description: 'Complete solutions combining AI automation and web development.',
    cta: 'get a quote',
    features: [
      'AI Automation + Web Dev',
      'End-to-End Solutions',
      'Custom Integrations',
      'Dedicated Team',
      'Priority Support',
      'Regular Updates',
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
            <div className="capitalize text-start text-black">{settings.plan_1.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_1.currency}{settings.plan_1.price}</span>
            </div>
            <Button className="w-full">{settings.plan_1.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_1.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
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
              <div className="capitalize text-start text-black">{settings.plan_2.planName}</div>
              <div className="text-xs bg-accent px-2 py-1 rounded-full text-black capitalize">most popular</div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_2.currency}{settings.plan_2.price}</span>
            </div>
            <Button className="w-full">{settings.plan_2.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_2.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
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
            <div className="capitalize text-start text-black">{settings.plan_3.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_3.currency}{settings.plan_3.price}</span>
            </div>
            <Button className="w-full">{settings.plan_3.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_3.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_3.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
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