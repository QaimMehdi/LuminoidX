import CtaBanner from "@/sections/cta-banner";
import Contact from "@/sections/contact";
import FAQ from "@/sections/faq";
import Features1 from "@/sections/features-1";
import Features2 from "@/sections/features-2";
import Features3 from "@/sections/features-3";
import Features4 from "@/sections/features-4";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import MobileDev from "@/sections/mobile-dev";
import Pricing from "@/sections/pricing";
import Testimonials from "@/sections/testimonials";
import Clients from "@/sections/clients";

export default function HomePage() {
  return (
    <div className="relative z-10 px-4 xl:px-0 max-w-5xl mx-auto space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-20 scroll-smooth">
      <Hero />
      <Clients />
      <Features1 />
      <Features2 />
      <Features3 />
      <MobileDev />
      <Features4 />
      <CtaBanner />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}