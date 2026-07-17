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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-4 lg:divide-x lg:divide-slate-100 dark:lg:divide-white/5 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="group text-center px-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-105">
                {stat.value}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-snug max-w-[22ch] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
