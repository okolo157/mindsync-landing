import logoLight from "@/assets/mind-light.png";
import logoDark from "@/assets/mind-dark.png";
import { Instagram, Facebook } from "lucide-react";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#030712] border-t border-slate-100 dark:border-white/5 py-12 text-slate-500 dark:text-slate-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
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
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              © {new Date().getFullYear()} MindSync Solutions
            </span>
            </div>
            <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 text-center md:text-left space-y-1">
              <p>
                Enquiries: <a href="mailto:sales@mindsync.solutions" className="hover:text-indigo-600 transition-colors">sales@mindsync.solutions</a>
              </p>
              <p>AU: +61 430 003 953 · NG: +234 904 484 8699</p>
              <p>GH: +233 543 613 605 (Call) · +233 505 061 692 (WhatsApp)</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 md:gap-x-6">
            <a href="/products" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors">Ecosystem</a>
            <a href="/speed" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors">Speed Test</a>
            <a href="https://blog.mindsync.solutions" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors">Blog</a>
            <a href="https://policies.mindsync.solutions/privacy" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="https://policies.mindsync.solutions/terms" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors">Terms</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/mindsync.solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/mindsyncsol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/193YrZzH57/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
