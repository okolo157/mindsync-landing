import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "@/config/products";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { useState, type CSSProperties } from "react";
import { ProductQuickView } from "@/components/Landing/ProductQuickView";
import { 
  GraduationCap, Layout, Users, Zap, Share2, Bot, BookOpen, Trophy 
} from "lucide-react";

const productIconMap: Record<string, React.ElementType> = {
  sims: GraduationCap,
  lms: Layout,
  tutorsmart: Users,
  coursify: Zap,
  magazine: Share2,
  jobs: Bot,
  coach: BookOpen,
  sport: Trophy
};

export default function Products() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": p.name,
      "description": p.description,
      "url": p.link || "https://mindsync.solutions"
    }))
  };

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] text-slate-900 dark:text-white overflow-x-hidden selection:bg-indigo-500/30 font-sans transition-colors duration-300">
      <SEO
        title="AI Solutions for Education | MindSync Solutions"
        description="Explore the AI-first MindSync ecosystem. From AI course creation and AI tutoring to intelligent SIMS and LMS, we provide the AI tools to power education."
        canonicalUrl="https://mindsync.solutions/products"
      />
      <StructuredData data={productSchema} />
      <Navbar />

      <main>
      {/* Hero Section */}
       <div className="relative pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative text-center">
          <h1
            className="text-6xl sm:text-9xl lg:text-[11rem] font-black tracking-tight mb-8 leading-[0.8] text-slate-900 dark:text-white"
          >
            Empowering <br />
            <span className="text-indigo-600 dark:text-indigo-500">Evolution.</span>
          </h1>
          <p
            className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            A cohesive suite of architectural foundations designed to scale
            modern educational institutions with precision and reliability.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {PRODUCTS.map((product) => {
              const Icon = productIconMap[product.id] || Zap;
              return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative p-12 rounded-[3.5rem] bg-white dark:bg-slate-900/30 border border-slate-100 dark:border-white/5 hover:border-indigo-500/20 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden cursor-pointer"
              >
                {/* Visual Accent */}
                <div 
                  className="absolute -right-24 -top-24 w-64 h-64 rounded-full blur-[100px] opacity-[0.05] dark:opacity-[0.1] group-hover:opacity-[0.15] transition-all duration-700" 
                  style={{ backgroundColor: product.themeColor }}
                />

                {/* Blended Background Icon */}
                <Icon 
                  className="absolute -bottom-8 -right-8 w-48 h-48 opacity-[0.02] dark:opacity-[0.04] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none" 
                  style={{ color: product.themeColor }} 
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-end mb-8">
                    {product.link && (
                      <div
                        className="p-4 rounded-full bg-slate-50 dark:bg-slate-800/50 text-slate-400 group-hover:text-indigo-600 transition-colors ml-auto"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    )}
                  </div>

                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 transition-colors duration-500">
                    {product.name}
                  </h2>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mb-8 [color:var(--tagline-light)] dark:[color:var(--tagline-dark)]"
                    style={{
                      "--tagline-light": product.textColor.light,
                      "--tagline-dark": product.textColor.dark,
                    } as CSSProperties}
                  >
                    {product.tagline}
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed mb-12 font-medium">
                    {product.description}
                  </p>

                  <div
                    className="inline-flex items-center gap-4 text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-all"
                  >
                    Quick View
                    <div className="w-8 h-[2px] bg-slate-900 dark:bg-white group-hover:w-16 group-hover:bg-indigo-600 transition-all duration-500 opacity-20" />
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      <ProductQuickView 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />


      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden px-4">
        <div className="max-w-7xl mx-auto relative group">
          <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 rounded-[4rem] group-hover:scale-[1.01] transition-transform duration-700" />

          <div className="relative z-10 py-24 px-8 md:px-16 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-[0.9]">
              Ready for a <br />
              <span className="text-indigo-600">Strategic Shift?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 font-medium max-w-2xl mx-auto">
              Our specialists are ready to help you migrate to a more resilient,
              interoperable educational ecosystem.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="px-12 h-16 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Consult Our Team
            </button>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

