'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck, Sparkles, ArrowRight, Users, Zap, Clock, UserPlus } from "lucide-react"
import Link from "next/link"
import * as motion from "motion/react-m"

const engagementModels = [
  {
    name: 'Fixed Price',
    icon: Zap,
    description: 'Best for well-defined projects. Agreed scope, budget, and timeline.',
    ideal: 'Landing pages, automations',
    cta: 'Start Project',
    highlight: false,
    features: [
      'Defined deliverables',
      'Fixed investment',
      'Guaranteed timeline',
      'Standard support',
    ],
  },
  {
    name: 'Hourly',
    icon: Clock,
    description: 'Evolving projects. Pay for time spent with full transparency.',
    ideal: 'Ongoing dev, consulting',
    cta: 'Let\'s Chat',
    highlight: false,
    features: [
      'Agile flexibility',
      'Pay-as-you-go',
      'Direct expert access',
      'Transparent tracking',
    ],
  },
  {
    name: 'Dedicated Team',
    icon: Users,
    description: 'Full team embedded in your workflow for long-term velocity.',
    ideal: 'Enterprise apps',
    cta: 'Build Team',
    highlight: true,
    features: [
      'Exclusive allocation',
      'Deep integration',
      'High-speed delivery',
      'Technical leadership',
    ],
  },
  {
    name: 'Staff Augmentation',
    icon: UserPlus,
    description: 'Top-tier engineers that integrate into your existing team.',
    ideal: 'Scaling teams',
    cta: 'Augment Team',
    highlight: false,
    features: [
      'On-demand talent',
      'Zero overhead',
      'Seamless ramp-up',
      'Vetted expertise',
    ],
  },
]

export default function Pricing() {
  return (
    <div id='pricing' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">Engagement Models</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base text-gray-600">
        Choose the engagement model that best matches your project&apos;s scale, complexity, and growth requirements. From one-off projects to dedicated partnerships, we scale with you.
      </SlideEffect>

      {/* Engagement Models Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
        {engagementModels.map((model, index) => (
          <SlideEffect key={model.name} isSpring={false} delay={0.1 + index * 0.1} className="h-full">
            <motion.div
              className="h-full"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`h-full relative overflow-hidden flex flex-col items-start text-left !p-6 ${model.highlight ? 'bg-secondary ring-2 ring-primary/30' : 'bg-white'}`}>
                {/* Highlight badge */}
                {model.highlight && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 text-[10px] bg-primary/20 px-3 py-1 rounded-full text-primary font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      Recommended
                    </div>
                  </div>
                )}

                {/* Header Section */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <model.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-bold text-black">{model.name}</h3>
                  <div className="w-10 h-1 bg-primary/30 rounded-full" />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed h-12">
                  {model.description}
                </p>

                {/* Ideal Use Case */}
                <div className="mt-2 mb-6">
                  <span className="text-[10px] font-bold uppercase text-primary/60 tracking-wider">Ideal: </span>
                  <span className="text-[11px] font-medium text-gray-500">{model.ideal}</span>
                </div>

                {/* Features */}
                <div className="flex-1 w-full space-y-4 mb-10">
                  {model.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CircleCheck className="text-primary w-4 h-4 shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link href="#contact" className="w-full mt-auto">
                  <Button className={`w-full group/btn font-bold py-6 ${model.highlight ? 'bg-black text-white hover:bg-black/90' : 'bg-black text-white hover:bg-black/90'}`}>
                    {model.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform ml-1" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}