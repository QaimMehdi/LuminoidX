'use client'

import { useState } from 'react'
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

const settings = {
    title: 'Get In Touch',
    description: 'Ready to transform your business? Fill out the form below and we\'ll get back to you within 24 hours.',
    contactInfo: [
        {
            icon: Mail,
            label: 'Email',
            value: 'hello@luminoidx.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+1 (555) 123-4567'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Remote & Worldwide'
        }
    ]
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        plan: '',
        budget: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    plan: '',
                    budget: '',
                    message: ''
                })
                alert('Thank you for your message! We\'ll get back to you within 24 hours.')
            } else {
                setSubmitStatus('error')
                alert('Something went wrong. Please try again or email us directly at hello@luminoidx.com')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitStatus('error')
            alert('Something went wrong. Please try again or email us directly at hello@luminoidx.com')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target

        // Reset budget when plan changes
        if (name === 'plan' && value !== 'enterprise') {
            setFormData({
                ...formData,
                [name]: value,
                budget: ''
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    return (
        <div id='contact' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto">
            {/* Title */}
            <SlideEffect className="text-center">
                <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
            </SlideEffect>

            {/* Description */}
            <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base text-center">
                {settings.description}
            </SlideEffect>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Contact Info */}
                <SlideEffect isSpring={false} delay={0.1} className="lg:col-span-1 space-y-6">
                    <Card className="bg-secondary h-full">
                        <h3 className="text-lg font-medium text-black mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            {settings.contactInfo.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-2 rounded-lg">
                                        <item.icon className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-black/60">{item.label}</div>
                                        <div className="text-black font-medium">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </SlideEffect>

                {/* Contact Form */}
                <SlideEffect isSpring={false} delay={0.2} className="lg:col-span-2">
                    <Card className="bg-white">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-black">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-black">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Phone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-black">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>

                                {/* Service Interest */}
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium text-black">
                                        Service Interest *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="ai-automation">AI Automation</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="full-service">Full Service</option>
                                        <option value="consultation">Consultation</option>
                                    </select>
                                </div>
                            </div>

                            {/* Plan Selection */}
                            <div className="space-y-2">
                                <label htmlFor="plan" className="text-sm font-medium text-black">
                                    Plan *
                                </label>
                                <select
                                    id="plan"
                                    name="plan"
                                    required
                                    value={formData.plan}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white"
                                >
                                    <option value="">Select a plan</option>
                                    <option value="starter">Starter - Starting at $800</option>
                                    <option value="professional">Professional - Starting at $1,500</option>
                                    <option value="enterprise">Enterprise - Custom Pricing</option>
                                </select>
                            </div>

                            {/* Conditional Budget Field for Enterprise */}
                            {formData.plan === 'enterprise' && (
                                <div className="space-y-2">
                                    <label htmlFor="budget" className="text-sm font-medium text-black">
                                        Budget *
                                    </label>
                                    <input
                                        type="text"
                                        id="budget"
                                        name="budget"
                                        required
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="e.g., $10,000 - $50,000"
                                    />
                                </div>
                            )}

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-black">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </Card>
                </SlideEffect>
            </div>
        </div>
    )
}
