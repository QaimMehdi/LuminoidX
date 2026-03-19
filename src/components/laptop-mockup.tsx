'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface LaptopMockupProps {
  logo: string
  bgColor: string
  className?: string
}

export default function LaptopMockup({ logo, bgColor, className = "" }: LaptopMockupProps) {
  return (
    <div className={`relative w-full max-w-[400px] mx-auto ${className}`}>
      {/* Laptop Screen Frame */}
      <div className="relative aspect-[16/10] bg-[#111] rounded-t-[1.5rem] p-[1.5%] shadow-2xl overflow-hidden border-[3px] border-[#333]">
        {/* Anti-glare/glass effect layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-10 pointer-events-none" />
        
        {/* Content Area */}
        <div 
          className="w-full h-full rounded-[0.5rem] overflow-hidden flex items-center justify-center relative"
          style={{ backgroundColor: bgColor }}
        >
          {/* Subtle noise/texture for that premium feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <span className={`font-bold text-center px-4 select-none ${bgColor === '#ffffff' ? 'text-black' : 'text-white'}`}
                style={{ 
                  fontSize: 'clamp(1rem, 5vw, 2.5rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'pre-line'
                }}>
            {logo}
          </span>
        </div>
      </div>

      {/* Laptop Bottom/Base */}
      <div className="relative h-[12px] w-[110%] -left-[5%] bg-[#ccc] rounded-b-[8px] shadow-lg border-t border-[#eee]">
        {/* Trackpad/Indent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20%] h-[3px] bg-black/20 rounded-b-full shadow-inner" />
      </div>
      
      {/* Subtle Shadow beneath the laptop */}
      <div className="mt-4 w-full h-8 bg-black/10 blur-xl rounded-[100%] mx-auto opacity-50" />
    </div>
  )
}
