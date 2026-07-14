import { PRODUCTS } from "@/config/products";

const stats = [
  {
    value: String(PRODUCTS.length),
    label: "Connected products sharing one data core",
  },
  {
    value: "2,300+",
    label: "Verified teachers in the Jobs network",
  },
  {
    value: "100+",
    label: "Teachers placed in educational institutions",
  },
  {
    value: "Vetted",
    label: "Every tutor is a registered teacher with WWC/TRCN checks",
  },
];

export const TrustStrip = () => {
  return (
    <section className="py-20 relative bg-white dark:bg-[#030712] border-y border-slate-100 dark:border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                {stat.value}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-snug max-w-[24ch] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
