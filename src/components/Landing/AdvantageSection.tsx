import { Layers, Zap, TrendingUp, Cpu } from 'lucide-react';

export const AdvantageSection = () => {
  const highlights = [
    { 
      icon: Layers, 
      title: 'Seamless Interconnectivity', 
      desc: 'Our products are engineered to share intelligence, creating a unified operational backbone for your institution.' 
    },
    { 
      icon: Cpu, 
      title: 'AI-First Foundation', 
      desc: 'Leverage the power of AI-native learning, intelligent scheduling, and automated workflows across all our products.' 
    },
    { 
      icon: TrendingUp, 
      title: 'Infinite Scalability', 
      desc: 'Built to evolve alongside your growth, from individual colleges to complex multi-campus networks.' 
    },
    { 
      icon: Zap, 
      title: 'Operational Velocity', 
      desc: 'Reduce administrative friction and accelerate learning outcomes with tools that work as one.'
    }
  ];

  return (
    <section className="py-32 relative bg-white dark:bg-[#030712] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto mb-24">
          <h2 
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[0.9]"
          >
            Unified Intelligence. <br />
            <span className="text-indigo-600 dark:text-indigo-500">Unlimited Potential.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            MindSync is more than a suite of tools, it's an AI-powered collective
            engineered to orchestrate your entire digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 hover:border-indigo-500/20 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-500">
                <item.icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};