import { PRODUCTS } from "@/config/products";
import { useState } from "react";
import { ProductQuickView } from "./ProductQuickView";
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

export const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section className="py-32 relative overflow-hidden bg-white dark:bg-[#030712]">
      {/* Decorative lines / Background accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto mb-24">
          <h2
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[0.9]"
          >
            Curated <span className="text-indigo-600 dark:text-indigo-500">Ecosphere.</span>
          </h2>
          <p
            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
          >
            Each platform in the MindSync ecosystem is meticulously engineered to
            work in concert, providing a seamless operational backbone for your institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {PRODUCTS.map((product) => {
            const Icon = productIconMap[product.id] || Zap;
            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative p-10 rounded-[3rem] bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/10 hover:border-indigo-500/20 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] flex flex-col h-full overflow-hidden cursor-pointer"
              >
                {/* Blur accent */}
                <div 
                  className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-3xl opacity-[0.05] dark:opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-500" 
                  style={{ backgroundColor: product.themeColor }}
                />

                {/* Blended Background Icon */}
                <Icon 
                  className="absolute -bottom-8 -right-8 w-40 h-40 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-700 pointer-events-none" 
                  style={{ color: product.themeColor }} 
                />

                <div className="mb-6 relative z-10">
                  <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <div 
                    className="text-[10px] font-bold uppercase tracking-widest opacity-80"
                    style={{ color: product.themeColor }}
                  >
                    {product.tagline}
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-10 flex-1 relative z-10">
                  {product.description}
                </p>

                <div
                  className="inline-flex items-center gap-3 text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors relative z-10"
                >
                  Quick View
                  <div className="w-6 h-[2px] bg-slate-900 dark:bg-white group-hover:w-10 group-hover:bg-indigo-600 transition-all opacity-20" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ProductQuickView 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};


