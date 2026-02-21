import Contact from "@/sections/contact";
import FAQ from "@/sections/faq";
import Features1 from "@/sections/features-1";
import Features2 from "@/sections/features-2";
import Features3 from "@/sections/features-3";
import Features4 from "@/sections/features-4";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Portfolio from "@/sections/portfolio";
import Pricing from "@/sections/pricing";
import Testimonials from "@/sections/testimonials";

export default function HomePage() {
  return (
    <div className="relative z-10 px-4 xl:px-0 max-w-5xl mx-auto space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40 scroll-smooth">
      <Hero />
      <Features1 />
      <Features2 />
      <Features3 />
      <Features4 />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}