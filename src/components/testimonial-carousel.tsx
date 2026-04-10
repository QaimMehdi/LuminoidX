"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";

interface Testimonial {
  id: string;
  videoUrl: string;
  name: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  { id: "1", videoUrl: "/reviews/nexum.mp4", name: "Hammad Ahmed", designation: "Director Manager at Nexum" },
  { id: "2", videoUrl: "/reviews/nexum.mp4", name: "Hammad Ahmed", designation: "Director Manager at Nexum" },
  { id: "3", videoUrl: "/reviews/nexum.mp4", name: "Hammad Ahmed", designation: "Director Manager at Nexum" },
  { id: "4", videoUrl: "/reviews/nexum.mp4", name: "Hammad Ahmed", designation: "Director Manager at Nexum" },
  { id: "5", videoUrl: "/reviews/nexum.mp4", name: "Hammad Ahmed", designation: "Director Manager at Nexum" },
  { id: "6", videoUrl: "/reviews/nexum.mp4", name: "Hammad Ahmed", designation: "Director Manager at Nexum" },
  { id: "7", videoUrl: "/reviews/nexum.mp4", name: "Hammad Ahmed", designation: "Director Manager at Nexum" },
  { id: "8", videoUrl: "/reviews/nexum.mp4", name: "Hammad Ahmed", designation: "Director Manager at Nexum" },
];

export default function TestimonialCarousel() {
  // Start with middle video (index 3 is 4th video)
  const [activeIndex, setActiveIndex] = useState(3);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const total = testimonials.length;
  // Compute true index correctly mapping negatives to positive indices
  const safeActiveIndex = ((activeIndex % total) + total) % total;

  useEffect(() => {
    // Play active video, pause others
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === safeActiveIndex) {
        video.muted = isMuted;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, [safeActiveIndex, isMuted, activeIndex]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => prev - 1);
  }, []);

  return (
    <div className="w-full py-12 md:py-16 overflow-hidden relative flex flex-col items-center">
      {/* Container */}
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] flex items-center justify-center perspective-[1000px]">
        {testimonials.map((test, index) => {
          // Calculate relative un-bound offset
          let offset = index - safeActiveIndex;
          
          // Wrap offsets so they fall in range [-total/2, total/2]
          if (offset > Math.floor(total / 2)) offset -= total;
          if (offset < -Math.floor(total / 2)) offset += total;
          
          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= 2;
          
          // Visual properties based on position
          const scale = isActive ? 1 : Math.abs(offset) === 1 ? 0.85 : 0.7;
          const finalOpacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.6 : Math.abs(offset) === 2 ? 0.2 : 0;
          const zIndex = 40 - Math.abs(offset) * 10;
          const blur = isActive ? "blur(0px)" : Math.abs(offset) === 1 ? "blur(4px)" : "blur(8px)";
          
          // X Position calculated based on width %
          // This gives a slight overlap and spacing effect
          const xPos = `${offset * 105}%`; 

          return (
            <motion.div
              key={test.id}
              className="absolute w-[220px] sm:w-[260px] md:w-[300px] h-[340px] sm:h-[380px] md:h-[440px] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl bg-black"
              initial={false}
              animate={{
                x: xPos,
                scale: scale,
                opacity: isVisible ? finalOpacity : 0,
                filter: isVisible ? blur : "blur(10px)",
                zIndex: zIndex,
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              onClick={() => {
                if (!isActive) {
                  // Direct navigation to clicked video
                  setActiveIndex((prev) => prev + offset);
                }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset: dragOffset, velocity }) => {
                // Single item stays centered - return to center on drag
                return;
              }}
            >
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={test.videoUrl}
                className="w-full h-full object-cover pointer-events-none"
                loop
                playsInline
                muted={!isActive || isMuted}
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              
              {isActive && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex justify-between items-end z-20 pointer-events-none"
                >
                  <div className="text-left text-white drop-shadow-md pr-2">
                    <h4 className="font-bold text-base md:text-lg truncate">{test.name}</h4>
                    <p className="text-xs md:text-sm text-gray-200 font-medium truncate">{test.designation}</p>
                  </div>

                </motion.div>
              )}


            </motion.div>
          );
        })}

        {/* Overlaid Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all text-white cursor-pointer group/btn"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all text-white cursor-pointer group/btn"
          aria-label="Next video"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => setIsMuted((prev) => !prev)}
          className="absolute right-4 md:right-12 top-4 z-50 p-3 md:p-4 rounded-full bg-black/70 hover:bg-black/95 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all text-white"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </button>
      </div>

      {/* Case Studies CTA */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-12 md:mt-20 relative z-50 group">
        <span className="text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-muted-foreground group-hover:text-black transition-colors duration-300 text-center md:text-left">
          Check out our case studies here
        </span>
        
        {/* Curved Arrow SVG (Desktop) */}
        <div className="hidden md:block relative w-24 text-muted-foreground group-hover:text-[#6ECE9D] transition-colors duration-300 transform translate-y-1">
           <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto drop-shadow-sm transition-all duration-300">
             <path d="M 5,22 C 25,22 45,22 55,18 C 70,10 35,0 30,18 C 28,28 60,36 90,22" />
             <path d="M 78,12 L 90,22 L 80,32" />
           </svg>
        </div>

        {/* Down Arrow (Mobile) */}
        <div className="md:hidden relative h-12 text-muted-foreground group-hover:text-[#6ECE9D] transition-colors duration-300">
           <svg width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-auto drop-shadow-sm transition-all duration-300">
             <path d="M 15,5 C 5,15 5,30 20,30 C 35,30 35,10 15,15 C 5,18 10,45 15,53" />
             <path d="M 8,45 L 15,55 L 22,45" />
           </svg>
        </div>

        <Link href="/case-studies">
          <button className="rounded-full px-8 py-4 uppercase tracking-widest text-xs md:text-sm font-bold border-2 border-transparent bg-[#111] hover:bg-[#6ECE9D] hover:shadow-[0_0_20px_rgba(110,206,157,0.4)] text-white hover:text-black transition-all duration-300">
            Case Studies
          </button>
        </Link>
      </div>
    </div>
  );
}
