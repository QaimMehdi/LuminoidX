'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { AlignJustify, ChevronDown, X } from "lucide-react"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-m"
import { useState } from "react"

const settings = {
  navLinks: [
    { name: "home", href: "/" },
    { name: "services", href: "#features" },
    { name: "about", href: "#about" },
    { name: "contact", href: "#contact" },
  ],
  services: [
    { name: "AI Agent Development", href: "#features" },
    { name: "Workflow Automation", href: "#features" },
    { name: "Custom API Integration", href: "#features" },
    { name: "Modern Web Development", href: "#features" },
    { name: "Mobile App Development", href: "#features" },
    { name: "Consultation", href: "#contact" },
  ],
  cta: {
    content: "get started",
    href: "#contact",
  },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <nav className="w-full h-fit py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link href="/" title="Home" id="Logo">
        <span className="text-2xl font-bold text-black">
          Luminoid
          <span className="bg-gradient-to-r from-[#6ECE9D] to-[#4FB882] bg-clip-text text-transparent">
            X
          </span>
        </span>
      </Link>

      {/* desktop menu */}
      <div className="items-center justify-center gap-6 hidden md:flex rounded-full border border-black/5 bg-white/80 backdrop-blur px-4 py-2 shadow-sm">
        <ul className="flex items-center justify-center gap-4 text-black font-medium select-none text-link">
          {settings.navLinks.map(link => {
            if (link.name !== "services") {
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    title={link.name}
                    className="hover:opacity-80 transition-all capitalize"
                  >
                    {link.name}
                  </Link>
                </li>
              )
            }

            return (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 capitalize hover:opacity-80 transition-all"
                >
                  services
                  <ChevronDown size={14} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 mt-3 w-56 rounded-2xl border border-black/5 bg-white/95 shadow-lg backdrop-blur-sm py-2 z-50"
                    >
                      {settings.services.map(service => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-left capitalize hover:bg-black/[0.03] hover:pl-5 transition-all"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>

        {/* Call To Action */}
        <Link href={settings.cta.href} title={settings.cta.content}>
          <Button className="capitalize">{settings.cta.content}</Button>
        </Link>
      </div>

      {/* mobile only - burger menu icon */}
      <motion.div
        initial={{ scale: 1, y: 0 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-none flex md:hidden cursor-pointer text-black"
        onClick={toggleMenu}
      >
        {!isOpen && <AlignJustify size={20} />}
        {isOpen && <X size={20} />}
      </motion.div>

      {/* mobile only - menu container with AnimatePresence for exit animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 1, y: -20 }}
            animate={{ height: "100vh", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 1, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed flex flex-col md:hidden top-16 left-0 w-full bg-white z-40 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              <ul className="flex flex-col space-y-2 text-black font-medium select-none text-base">
                {settings.navLinks.map(link => {
                  if (link.name !== "services") {
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          title={link.name}
                          onClick={toggleMenu}
                          className="block py-2 capitalize"
                        >
                          {link.name}
                        </Link>
                      </li>
                    )
                  }

                  return (
                    <li key={link.name} className="space-y-1">
                      <span className="block py-2 capitalize">services</span>
                      <div className="ml-3 space-y-1 text-sm">
                        {settings.services.map(service => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={toggleMenu}
                            className="block py-1 capitalize text-black/80"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </li>
                  )
                })}
              </ul>

              <Link
                href={settings.cta.href}
                title={settings.cta.content}
                onClick={toggleMenu}
              >
                <Button className="w-full capitalize">
                  {settings.cta.content}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}