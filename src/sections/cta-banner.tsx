import SlideEffect from "@/components/slide-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CtaBanner() {
  return (
    <SlideEffect className="w-full relative z-20">
      <div className="relative w-full rounded-[2rem] bg-[#0c1322] overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5">
        
        {/* Abstract Background Effects */}
        <div className="absolute top-[-50%] left-[-20%] w-full h-[200%] bg-[#6ECE9D] opacity-[0.03] blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute top-0 right-[-10%] w-[50%] h-[150%] bg-[#4FB882] opacity-[0.04] blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

        {/* Left Side: Graphic / Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 relative z-10">
          <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px]">
            {/* The generated image will be placed here */}
            {/* Using a placeholder glowing CSS composition in case image isn't available or as a fallback */}
            <Image 
              src="/ai_development_isometric.png" 
              alt="AI and Development" 
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 mt-4 md:mt-0">
            Transform Your Vision into High-Performing Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ECE9D] to-[#4FB882]">With AI & Expert Developers</span>
          </h2>
          
          <Link href="https://cal.com/qaim-mehdi" target="_blank" rel="noopener noreferrer" title="Schedule a Call" className="block w-full md:w-auto">
            <Button 
              size="default" 
              className="w-full md:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-5 rounded-md text-base font-bold shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all duration-300"
            >
              Schedule a Call
            </Button>
          </Link>
        </div>

      </div>
    </SlideEffect>
  )
}
