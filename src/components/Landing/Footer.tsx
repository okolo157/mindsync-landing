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
    <footer className="bg-white dark:bg-[#030712] border-t border-slate-100 dark:border-white/5 py-14 text-slate-500 dark:text-slate-400">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="space-y-4">
              <img
                src={logoLight}
                alt="Mindsync Logo"
                className="h-10 w-auto dark:hidden"
              />
              <img
                src={logoDark}
                alt="Mindsync Logo"
                className="h-10 w-auto hidden dark:block text-white"
              />
              <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                AI-powered products built to help schools, teachers, students, and parents
                learn smarter and move faster.
              </p>
            </div>
            <div className="text-sm space-y-2">
              <p>
                Enquiries:{" "}
                <a
                  href="mailto:sales@mindsync.solutions"
                  className="font-medium hover:text-indigo-600 transition-colors"
                >
                  sales@mindsync.solutions
                </a>
              </p>
              <p>AU: +61 430 003 953</p>
              <p>NG: +234 904 484 8699</p>
              <p>GH: +233 543 613 605 (Call) · +233 505 061 692 (WhatsApp)</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Explore
            </h3>
            <nav className="flex flex-col gap-3 text-sm font-medium">
              <a href="/products" className="hover:text-indigo-600 transition-colors">
                Ecosystem
              </a>
              <a href="/speed" className="hover:text-indigo-600 transition-colors">
                Speed Test
              </a>
              <a
                href="https://blog.mindsync.solutions"
                className="hover:text-indigo-600 transition-colors"
              >
                Blog
              </a>
              <a href="/contact" className="hover:text-indigo-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Connect
            </h3>
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
            <p className="text-sm">
              Follow us for product updates, insights, and education technology news.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
          <span>© {new Date().getFullYear()} MindSync Solutions</span>
          <div className="flex items-center gap-4">
            <a
              href="https://policies.mindsync.solutions/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://policies.mindsync.solutions/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
