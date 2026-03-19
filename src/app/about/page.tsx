import AboutHero from "@/sections/about-hero";
import AboutMission from "@/sections/about-mission";
import AboutValues from "@/sections/about-values";
import AboutStats from "@/sections/about-stats";
import Testimonials from "@/sections/testimonials";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <main className="relative z-10 scroll-smooth">
      <Navbar />
      
      <div className="px-4 xl:px-0 max-w-5xl mx-auto space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28 mt-12">
        <AboutHero />
        <AboutStats />
        <AboutMission />
        <AboutValues />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
