import logoLight from "@/assets/mind-light.png";
import logoDark from "@/assets/mind-dark.png";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#030712] border-t border-slate-100 dark:border-white/5 py-12 text-slate-500 dark:text-slate-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <img
              src={logoLight}
              alt="Mindsync Logo"
              className="h-9 w-auto dark:hidden"
            />
            <img
              src={logoDark}
              alt="Mindsync Logo"
              className="h-9 w-auto hidden dark:block text-white"
            />
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              © {new Date().getFullYear()} MindSync Solutions
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 md:gap-x-10">
            <a href="/products" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors">Ecosystem</a>
            <a href="/speed" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors">Speed Test</a>
            <a href="/privacy" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="/terms" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors">Terms</a>
            <a href="mailto:hello@mindsync.solutions" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
