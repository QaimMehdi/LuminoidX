'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import * as motion from "motion/react-m"

const plans = [
  {
    name: 'Starter',
    price: '499',
    currency: '$',
    period: 'Starting at',
    description: 'Perfect for small businesses and startups needing a professional web presence or basic automation to get rolling.',
    cta: 'Get Started',
    highlight: false,
    features: [
      'Landing Page or Basic Website',
      'Up to 3 Pages',
      'Responsive Design',
      'Basic SEO Setup',
      '1 Simple Automation Workflow',
      'Email Support',
      '1 Month Free Maintenance',
      '2 Revision Rounds',
      'Delivery in 7–14 Days',
    ],
    engagement: 'Fixed Price',
  },
  {
    name: 'Growth',
    price: '1,499',
    currency: '$',
    period: 'Starting at',
    description: 'Ideal for growing businesses that need advanced features, custom integrations, and scalable automation.',
    cta: 'Get Started',
    highlight: true,
    features: [
      'Custom Multi-Page Website or Web App',
      'Up to 10 Pages or 5 Workflows',
      'Custom Dashboard / Admin Panel',
      'API Integrations (n8n, VAPI, Make)',
      'AI Chatbot or Agent Setup',
      'Advanced SEO & Performance',
      'Priority Email & Chat Support',
      '3 Months Free Maintenance',
      'Unlimited Revisions',
      'Delivery in 2–4 Weeks',
    ],
    engagement: 'Fixed Price · Hourly Available',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    period: 'Tailored for you',
    description: 'For large-scale projects requiring dedicated teams, complex AI systems, and ongoing strategic partnership.',
    cta: 'Contact Us',
    highlight: false,
    features: [
      'Full-Stack Web & Mobile Applications',
      'Complex AI Agent Systems',
      'Unlimited Pages & Workflows',
      'Dedicated Development Team',
      'Custom Integrations & APIs',
      'Quality Assurance & Testing',
      '24/7 Priority Support',
      '6 Months Free Maintenance',
      'Ongoing Updates & Optimization',
      'Flexible Timeline & Retainer',
    ],
    engagement: 'Retainer · Dedicated Team',
  },
]

export default function Pricing() {
  return (
    <div id='pricing' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">Pricing Plans</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        Transparent, startup-friendly pricing for AI automation and web development. Choose the plan that fits your needs — or let&apos;s build something custom together.
      </SlideEffect>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <SlideEffect key={plan.name} isSpring={false} delay={0.1 + index * 0.1} className="text-base h-full">
            <motion.div
              className="h-full"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`h-full relative overflow-hidden ${plan.highlight ? 'bg-secondary ring-2 ring-primary/30' : 'bg-white'}`}>
                {/* Highlight badge */}
                {plan.highlight && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 text-xs bg-accent px-3 py-1.5 rounded-full text-black font-semibold">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan name */}
                <div className="capitalize text-start text-black text-lg font-medium">{plan.name}</div>

                {/* Price */}
                <div className="flex flex-col items-start gap-1">
                  {plan.period && <span className="text-sm text-black/60">{plan.period}</span>}
                  <span className="font-medium text-4xl text-black">{plan.currency}{plan.price}</span>
                </div>

                {/* Engagement model tag */}
                <div className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {plan.engagement}
                </div>

                {/* CTA */}
                <Link href="#contact" className="w-full">
                  <Button className={`w-full group/btn ${plan.highlight ? 'bg-primary hover:bg-[#4FB882]' : ''}`}>
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                {/* Description */}
                <div className="text-start space-y-6">
                  <p className="text-black text-sm">{plan.description}</p>

                  <div className="flex flex-col items-start gap-4 text-sm">
                    {plan.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 group/feature cursor-default"
                        whileHover={{ x: 4 }}
                      >
                        <CircleCheck className="text-primary flex-shrink-0 group-hover/feature:scale-110 transition-transform" size={16} />
                        <span className="group-hover/feature:text-black transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}