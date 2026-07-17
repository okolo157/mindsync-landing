import { cn } from "@/lib/utils";

const stats = [
  {
    value: "2,300+",
    label: "Verified teachers in the Jobs network",
  },
  {
    value: "100+",
    label: "Teachers placed in educational institutions",
  },
  {
    value: "300+",
    label: "Qualified tutors matched with students",
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 sm:gap-y-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center",
                index === stats.length - 1 &&
                  "col-span-2 sm:col-span-1 max-w-[220px] mx-auto sm:max-w-none",
              )}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 sm:mb-3">
                {stat.value}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-snug max-w-[22ch] sm:max-w-[24ch] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
