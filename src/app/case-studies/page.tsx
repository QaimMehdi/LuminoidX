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
    <div className="relative z-10 px-4 xl:px-0 max-w-5xl mx-auto scroll-smooth pb-10">
      <Navbar />
      <section className="pt-0 pb-10 md:pb-16">
        <Portfolio />
      </section>
      <Contact />
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
