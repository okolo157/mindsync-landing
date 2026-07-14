import { Sun, Moon, Menu, ChevronDown, Zap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { preloadCalendly } from "@/utils/calendly";
import logoDark from "@/assets/mind-dark.webp";
import logoLight from "@/assets/mind-light.webp";
import { PRODUCTS } from "@/config/products";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [showEcosystemMenu, setShowEcosystemMenu] = useState(false);

  // Determine effective theme for logo
  useEffect(() => {
    const checkTheme = () => {
      if (theme === "system") {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      } else {
        setIsDark(theme === "dark" || theme === "dark-blue");
      }
    };

    checkTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") checkTheme();
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const sims = PRODUCTS.find(p => p.id === "sims");
  const otherProducts = PRODUCTS.filter(p => p.id !== "sims");

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-4 bg-white/70 dark:bg-black/20 backdrop-blur-md border-b border-white/10 dark:border-white/5 transition-all duration-300">
      <div className="flex items-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* LEFT - Logo */}
        <div className="flex flex-1">
          <img
            src={isDark ? logoDark : logoLight}
            alt="Logo"
            width={280}
            height={147}
            onClick={() => navigate("/")}
            className="w-20 sm:w-28 h-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>

        {/* CENTER - Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-12">
          <button
            onClick={() => navigate("/")}
            className="group relative text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-600 group-hover:w-full transition-all duration-300" />
          </button>

          <div
            className="relative"
            onMouseEnter={() => setShowEcosystemMenu(true)}
            onMouseLeave={() => setShowEcosystemMenu(false)}
          >
            <button
              onClick={() => navigate("/products")}
              className="group flex items-center gap-1 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
            >
              Ecosystem
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", showEcosystemMenu && "rotate-180")} />
            </button>

            <AnimatePresence>
              {showEcosystemMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden p-8 grid grid-cols-2 gap-8"
                >
                  {/* SIMS Highlight */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                      SIMS Ecosystem
                    </div>
                    <div className="space-y-4">
                      {sims?.features.slice(0, 4).map((f) => (
                        <button
                          key={f.title}
                          onClick={() => {
                            navigate(`/products/sims`);
                            setShowEcosystemMenu(false);
                          }}
                          className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-left group/item"
                        >
                          <div className="pt-1 text-slate-400 group-hover/item:text-indigo-600 transition-colors">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{f.title}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-1">{f.description}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate("/products/sims")}
                      className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all px-3"
                    >
                      View Comprehensive SIMS <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Other Products */}
                  <div className="space-y-6 border-l border-slate-100 dark:border-white/10 pl-8">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Specialized Solutions
                    </div>
                    <div className="space-y-2">
                      {otherProducts.map(p => (
                        <button
                          key={p.id}
                          onClick={() => {
                            navigate(`/products/${p.id}`);
                            setShowEcosystemMenu(false);
                          }}
                          className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all group/p"
                        >
                          <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover/p:text-slate-900 dark:group-hover/p:text-white transition-colors">{p.name}</span>
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover/p:text-indigo-600 transition-all -translate-x-2 opacity-0 group-hover/p:translate-x-0 group-hover/p:opacity-100" />
                        </button>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-4">
                      <button
                        onClick={() => navigate("/products")}
                        className="w-full h-12 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs"
                      >
                        Explore Full Ecosystem
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => window.location.href = "https://blog.mindsync.solutions"}
            className="group relative text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-600 group-hover:w-full transition-all duration-300" />
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="group relative text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-600 group-hover:w-full transition-all duration-300" />
          </button>
        </div>

        {/* RIGHT - Actions */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center hover:scale-110 transition-transform"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-slate-300" />
            ) : (
              <Moon className="h-4 w-4 text-slate-600" />
            )}
          </button>

          <button
            onClick={() => navigate("/schedule-demo")}
            onMouseEnter={preloadCalendly}
            className="px-8 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-sm hover:scale-105 transition-all shadow-xl"
          >
            Consult Expert
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className="flex md:hidden items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full hover:bg-slate-100 dark:hover:bg-white/5"
          >
            {isDark ? <Sun /> : <Moon />}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="p-6">
              <div className="flex flex-col gap-8 mt-16 px-4">
                <button
                  onClick={() => navigate("/")}
                  className="text-left text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                >
                  Home
                </button>

                <button
                  onClick={() => navigate("/products")}
                  className="text-left text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                >
                  Ecosystem
                </button>

                <button
                  onClick={() => window.location.href = "https://blog.mindsync.solutions"}
                  className="text-left text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                >
                  Blog
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="text-left text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                >
                  Contact
                </button>

                <div className="pt-8 border-t border-slate-100 dark:border-white/5">
                  <button
                    onClick={() => navigate("/schedule-demo")}
                    onMouseEnter={preloadCalendly}
                    className="w-full h-14 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-lg"
                  >
                    Consult Expert
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}

// Helper function for class merging
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

