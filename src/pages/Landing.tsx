import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { AdvantageSection } from "@/components/Landing/AdvantageSection";
import { ProductShowcase } from "@/components/Landing/ProductShowcase";
import { Hero } from "@/components/Landing/Hero";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MindSync Solutions",
    url: "https://mindsync.solutions",
    logo: "https://mindsync.solutions/mindsync.svg",
    description:
      "MindSync Solutions provides a comprehensive ecosystem of educational technology products, including SIMS, LMS, Tutoring platforms, and more.",
  };

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] px-3 text-slate-900 dark:text-white overflow-x-clip selection:bg-indigo-500/30 font-sans transition-colors duration-300">
      <SEO
        title="MindSync Solutions | AI-First Education Platform"
        description="Discover the AI-first MindSync ecosystem. From AI course creation and AI tutoring to intelligent school management, we power the future of education."
        canonicalUrl="https://mindsync.solutions"
      />
      <StructuredData data={organizationSchema} />
      <Navbar />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[80px]" />
      </div>

      <Hero />

      <ProductShowcase />

      <AdvantageSection />

      <section className="py-32 relative overflow-hidden px-4">
        <div className="max-w-[1400px] mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 to-slate-900 rounded-[4rem] group-hover:scale-[1.01] transition-transform duration-700" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />

          <div className="relative z-10 py-24 px-8 md:px-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[0.9]">
                Architecting the Future
                <span className="block text-indigo-400 opacity-90">
                  of Education.
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-indigo-100/70 mb-12 font-medium">
                Connect with our specialists today to orchestrate your
                institution's digital transformation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-12 h-16 rounded-full bg-white text-slate-950 font-black text-lg hover:scale-105 transition-all shadow-2xl"
                >
                  Share Your Needs
                </button>
                <button
                  onClick={() => navigate("/schedule-demo")}
                  className="px-12 h-16 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-md"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
