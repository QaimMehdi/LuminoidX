'use client'

import SlideEffect from "@/components/slide-effect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const settings = {
  title: 'Frequently asked questions',
  faqs: [
    {
      question: 'What AI automation tools do you work with?',
      answer: 'We specialize in integrating with n8n, VAPI, Make.com, and custom APIs. We can also build custom AI agents that work with your existing tools and systems to automate complex workflows.',
    },
    {
      question: 'What types of web development projects do you handle?',
      answer: 'We build everything from landing pages and business websites to complex dashboards, admin panels, and scalable web applications. Our solutions are designed to grow with your business.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple landing page might take 2-4 weeks, while a comprehensive web application with AI automation could take 2-3 months. We\'ll provide a detailed timeline during our initial consultation.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer ongoing maintenance and support packages. We can help with updates, bug fixes, new features, and scaling your solution as your business grows.',
    },
  ]
}

export default function FAQ() {
  return (
    <div id='faq' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normale">{settings.title}</h2>
      </SlideEffect>

      {/* Accordion */}
      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-base text-black">
          {settings.faqs.map((faq, index) => (
            <AccordionItem key={index} value={index + '-item'}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>
    </div>
  )
}