import Navbar from "@/components/navbar";
import Portfolio from "@/sections/portfolio";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | LuminoidX",
  description: "Explore our portfolio of enterprise-grade AI automation and web development solutions.",
};

export default function CaseStudiesPage() {
  return (
    <main className="relative z-10 scroll-smooth">
      <Navbar />
      <div className="px-4 xl:px-0 max-w-5xl mx-auto mt-12 space-y-20 md:space-y-32 pb-20">
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
