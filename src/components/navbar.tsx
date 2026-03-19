'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { AlignJustify, ChevronDown, X, Bot, Zap, Code2, MonitorSmartphone, Smartphone, Headset, ShieldCheck, Mail, Phone, ArrowUpRight } from "lucide-react"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-m"
import { useState } from "react"

const settings = {
  navLinks: [
    { name: "home", href: "/" },
    { name: "services", href: "/services" },
    { name: "about", href: "#about" },
    { name: "case studies", href: "/case-studies" },
    { name: "contact", href: "#contact" },
  ],
  services: [
    { name: "AI Agent Development", href: "/services/ai-agents", icon: Bot, desc: "Intelligent autonomous agents" },
    { name: "Workflow Automation", href: "/services/automation", icon: Zap, desc: "Streamline business operations" },
    { name: "Custom API Integration", href: "/services/api-integration", icon: Code2, desc: "Seamless system connectivity" },
    { name: "Modern Web Development", href: "/services/web-development", icon: MonitorSmartphone, desc: "Scalable web applications" },
    { name: "Mobile App Development", href: "/services/mobile-development", icon: Smartphone, desc: "Native & cross-platform apps" },
    { name: "Quality Assurance", href: "/services/quality-assurance", icon: ShieldCheck, desc: "Rigorous testing & QA" },
    { name: "Consultation", href: "https://cal.com/qaim-mehdi", icon: Headset, desc: "Expert technical guidance" },
  ],
  engagementModels: [
    { name: "Fixed Cost", href: "#contact" },
    { name: "Dedicated Team", href: "#contact" },
    { name: "Startup MVP", href: "#contact" },
    { name: "Staff Augmentation", href: "#contact" },
  ],
  cta: {
    content: "Schedule a Consultation",
    href: "https://cal.com/qaim-mehdi",
  },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" title="Home" className="flex-shrink-0 flex items-center relative z-10">
            <span className="text-2xl font-bold text-black tracking-tight">
              Luminoid
              <span className="bg-gradient-to-r from-[#6ECE9D] to-[#4FB882] bg-clip-text text-transparent">
                X
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            <ul className="flex items-center gap-6 text-sm font-medium h-full">
              {settings.navLinks.map((link) => {
                
                if (link.name !== "services") {
                  return (
                    <li key={link.name} className="h-full flex items-center">
                      <Link
                        href={link.href}
                        className="capitalize text-gray-700 hover:text-[#4FB882] transition-colors relative group py-2"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6ECE9D] transition-all duration-300 group-hover:w-full rounded-full"></span>
                      </Link>
                    </li>
                  )
                }

                // Services Mega Menu
                return (
                  <li
                    key={link.name}
                    className="h-full flex items-center"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 capitalize py-2 relative transition-colors ${servicesOpen ? 'text-[#4FB882]' : 'text-gray-700 hover:text-[#4FB882]'}`}
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#6ECE9D] rounded-full transition-all duration-300 ${servicesOpen ? 'w-full' : 'w-0'}`}></span>
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-1/2 -translate-x-1/2 top-[80px] w-[900px] bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden cursor-default flex"
                        >
                          {/* Services Grid */}
                          <div className="w-[50%] p-8 bg-white">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Our Services</h3>
                            <div className="grid grid-cols-1 gap-4">
                              {settings.services.map(service => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="group flex gap-4 p-3 -m-3 rounded-xl hover:bg-gray-50 transition-colors"
                                >
                                  <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-lg bg-[#6ECE9D]/10 flex items-center justify-center text-[#4FB882] group-hover:bg-[#6ECE9D] group-hover:text-white transition-colors duration-300">
                                      <service.icon size={20} />
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-[#4FB882] transition-colors">
                                      {service.name}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                      {service.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          
                          {/* Engagement Models & Contact Info */}
                          <div className="w-[50%] bg-gray-50/80 p-8 border-l border-gray-100 flex flex-col justify-between">
                             <div>
                               <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Engagement Models</h3>
                               <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                                {settings.engagementModels.map(model => (
                                  <Link
                                    key={model.name}
                                    href={model.href}
                                    className="text-sm font-medium text-gray-700 hover:text-[#4FB882] transition-colors flex items-center gap-2 group"
                                  >
                                    <ArrowUpRight size={14} className="text-gray-300 group-hover:text-[#4FB882] transition-colors" />
                                    {model.name}
                                  </Link>
                                ))}
                               </div>
                             </div>

                             {/* Contact Info Card inside Dropdown */}
                             <div className="mt-10 bg-gradient-to-br from-[#6ECE9D] to-[#4FB882] rounded-xl p-6 text-white shadow-inner relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                                <h4 className="text-sm font-bold mb-4">Get in touch</h4>
                                <div className="space-y-4">
                                  <div className="flex items-center space-x-3">
                                    <Mail size={16} className="text-white/80" />
                                    <span className="text-sm font-medium">info@luminoidx.com</span>
                                  </div>
                                  <div className="flex items-center space-x-3">
                                    <Phone size={16} className="text-white/80" />
                                    <div className="flex flex-col text-sm">
                                      <span className="font-medium">+1 (000) 000-0000 <span className="text-white/60 text-xs">(USA)</span></span>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-3">
                                    <Phone size={16} className="text-white/80" />
                                    <div className="flex flex-col text-sm">
                                      <span className="font-medium">+92 000 0000000 <span className="text-white/60 text-xs">(PK)</span></span>
                                    </div>
                                  </div>
                                </div>
                             </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>

            {/* CTA Button */}
            <Link href={settings.cta.href} target="_blank" rel="noopener noreferrer" title={settings.cta.content} className="ml-2">
              <Button className="bg-black hover:bg-[#6ECE9D] text-white rounded-full px-5 py-2.5 text-[14px] font-medium transition-all duration-300 shadow-sm hover:shadow-[0_8px_16px_-8px_rgba(110,206,157,0.8)]">
                {settings.cta.content}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            title="Menu"
            className="lg:hidden p-2 text-gray-900 focus:outline-none relative z-50"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-6">
              <ul className="space-y-4">
                {settings.navLinks.map((link) => {
                  if (link.name !== "services") {
                    return (
                      <li key={link.name} className="border-b border-gray-50 pb-4">
                        <Link
                          href={link.href}
                          onClick={toggleMenu}
                          className="capitalize block text-lg font-medium text-gray-900 hover:text-[#4FB882]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    )
                  }

                  return (
                    <li key={link.name} className="border-b border-gray-50 pb-6 space-y-4">
                      <div className="capitalize text-lg font-bold text-[#6ECE9D]">
                        {link.name}
                      </div>
                      <div className="grid grid-cols-1 gap-4 pl-2">
                        {settings.services.map(service => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={toggleMenu}
                            className="flex items-center gap-3 text-gray-600 hover:text-[#6ECE9D]"
                          >
                            <div className="w-8 h-8 rounded-md bg-gray-50 flex items-center justify-center text-[#4FB882]">
                              <service.icon size={16} />
                            </div>
                            <span className="text-[15px] font-medium">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="capitalize text-sm font-bold text-gray-400 mt-6 tracking-wider uppercase">
                        Engagement Models
                      </div>
                      <div className="pl-2 space-y-3">
                        {settings.engagementModels.map(model => (
                          <Link
                            key={model.name}
                            href={model.href}
                            onClick={toggleMenu}
                            className="block text-[15px] text-gray-600 hover:text-[#6ECE9D] font-medium"
                          >
                            {model.name}
                          </Link>
                        ))}
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="pt-4">
                <Link href={settings.cta.href} target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                  <Button className="w-full bg-black hover:bg-[#6ECE9D] text-white py-5 rounded-xl text-base font-medium transition-colors">
                    {settings.cta.content}
                  </Button>
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 mb-4">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail size={16} className="text-[#4FB882]" />
                    <span className="text-sm font-medium">info@luminoidx.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone size={16} className="text-[#4FB882]" />
                    <span className="text-sm font-medium">+1 (000) 000-0000 <span className="text-gray-400 text-xs">(USA)</span></span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone size={16} className="text-[#4FB882]" />
                    <span className="text-sm font-medium">+92 000 0000000 <span className="text-gray-400 text-xs">(PK)</span></span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}