'use client'

import React from 'react'
import * as motion from "motion/react-m"
import Image from 'next/image'

interface CarouselProps {
  images: string[]
  itemWidth?: number
  itemHeight?: number
  spacing?: number
  duration?: number
}

export default function Carousel({ 
  images, 
  itemWidth = 40, 
  itemHeight = 40, 
  spacing = 60,
  duration = 20
}: CarouselProps) {
  // Triple the images to ensure there's always enough content to cover the view 
  // and make the transition point invisible.
  const displayImages = [...images, ...images, ...images]

  return (
    <div className="overflow-hidden w-full relative h-[60px] flex items-center">
      {/* Side gradients for smooth fade in/out */}
      <div className='w-20 h-full absolute top-0 left-0 bg-gradient-to-r from-secondary to-transparent z-20 pointer-events-none' />
      <div className='w-20 h-full absolute top-0 right-0 bg-gradient-to-l from-secondary to-transparent z-20 pointer-events-none' />

      <motion.div
        className="flex items-center"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          gap: `${spacing}px`,
          paddingLeft: `${spacing / 2}px`
        }}
      >
        {displayImages.map((img, index) => (
          <div 
            key={index} 
            className="flex-shrink-0"
            style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
          >
            <Image
              src={img}
              alt={`Tech logo ${index % images.length}`}
              width={100}
              height={100}
              className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}