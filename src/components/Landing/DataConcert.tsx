import React from "react";
import { Database, Layout, GraduationCap, BookOpen, Trophy, Code, ArrowRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const DataConcert: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 relative bg-white dark:bg-[#030712] overflow-hidden border-t border-slate-100 dark:border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400 block">
                The Core of a School is Data
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[0.9]">
                Let Your Data Work <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  as One.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Update a student record once and it's current everywhere: timetables, reports, sports rosters, and parent newsletters. Every MindSync product, and anything custom you run, works from the same live data.
              </p>
            </div>

            {/* Feature Cards/Bullet points */}
            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:border-indigo-500/10 transition-colors">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 h-fit">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                    Ecosystem Integration
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    Bi-directional sync links your SIMS, LMS, Coach, and Sport products to eliminate manual entry errors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:border-indigo-500/10 transition-colors">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 h-fit">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                    Custom Integrations & APIs
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    Connect seamlessly to your custom products, legacy software, or third-party web services.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate("/contact")}
                className="group text-slate-600 dark:text-slate-400 font-bold flex items-center gap-2 hover:text-indigo-600 transition-colors"
              >
                Discuss Integrations
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                <div className="w-8 h-[2px] bg-slate-200 dark:bg-slate-800 group-hover:w-12 group-hover:bg-indigo-500 transition-all" />
              </button>
            </div>
          </div>

          {/* Right Column: Beautiful Animated Diagram */}
          <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
            {/* Ambient glow behind the diagram */}
            <div className="absolute w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-[60px]" />

            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              
              {/* SVG lines for connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="line-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Connection lines from center (200, 200) to 5 nodes */}
                {/* Node 1: Top (200, 70) */}
                <line x1="200" y1="200" x2="200" y2="70" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,6" className="text-indigo-500/30 dark:text-indigo-400/20" />
                
                {/* Node 2: Top Right (324, 160) */}
                <line x1="200" y1="200" x2="324" y2="160" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,6" className="text-purple-500/30 dark:text-purple-400/20" />
                
                {/* Node 3: Bottom Right (276, 305) */}
                <line x1="200" y1="200" x2="276" y2="305" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,6" className="text-indigo-500/30 dark:text-indigo-400/20" />
                
                {/* Node 4: Bottom Left (124, 305) */}
                <line x1="200" y1="200" x2="124" y2="305" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,6" className="text-purple-500/30 dark:text-purple-400/20" />

                {/* Node 5: Top Left (76, 160) */}
                <line x1="200" y1="200" x2="76" y2="160" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,6" className="text-indigo-500/30 dark:text-indigo-400/20" />
              </svg>

              {/* Pulsing Dot animation overlay using Framer Motion */}
              {/* Dot 1: Center to Top */}
              <motion.div
                animate={{
                  x: [0, 0, 0],
                  y: [0, -130, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ left: "50%", top: "50%", marginLeft: "-7px", marginTop: "-7px" }}
                className="absolute w-3.5 h-3.5 rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1]"
              />

              {/* Dot 2: Center to Top Right */}
              <motion.div
                animate={{
                  x: [0, 124, 0],
                  y: [0, -40, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                style={{ left: "50%", top: "50%", marginLeft: "-7px", marginTop: "-7px" }}
                className="absolute w-3.5 h-3.5 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]"
              />

              {/* Dot 3: Center to Bottom Right */}
              <motion.div
                animate={{
                  x: [0, 76, 0],
                  y: [0, 105, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.6,
                }}
                style={{ left: "50%", top: "50%", marginLeft: "-7px", marginTop: "-7px" }}
                className="absolute w-3.5 h-3.5 rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1]"
              />

              {/* Dot 4: Center to Bottom Left */}
              <motion.div
                animate={{
                  x: [0, -76, 0],
                  y: [0, 105, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.4,
                }}
                style={{ left: "50%", top: "50%", marginLeft: "-7px", marginTop: "-7px" }}
                className="absolute w-3.5 h-3.5 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]"
              />

              {/* Dot 5: Center to Top Left */}
              <motion.div
                animate={{
                  x: [0, -124, 0],
                  y: [0, -40, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3.2,
                }}
                style={{ left: "50%", top: "50%", marginLeft: "-7px", marginTop: "-7px" }}
                className="absolute w-3.5 h-3.5 rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1]"
              />

              {/* Orbiting ring for visual flair */}
              <div className="absolute w-[360px] h-[360px] rounded-full border border-slate-200/40 dark:border-white/5 animate-[spin_40s_linear_infinite] pointer-events-none" />
              <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-indigo-500/10 dark:border-indigo-400/5 animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />

              {/* Center Core Node */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                style={{ left: "calc(50% - 48px)", top: "calc(50% - 48px)" }}
                className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-br from-slate-900 to-indigo-950 dark:from-slate-950 dark:to-indigo-950 flex flex-col items-center justify-center border border-indigo-500/30 shadow-[0_20px_50px_rgba(99,102,241,0.2)] text-white text-center p-2"
              >
                <Database className="w-8 h-8 text-indigo-400 mb-1" />
                <span className="text-[10px] font-black uppercase tracking-wider">Core Data</span>
              </motion.div>

              {/* Outer Nodes */}
              {/* Node 1: Top - SIMS */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate("/products/sims")}
                style={{ left: "calc(50% - 32px)", top: "calc(17.5% - 32px)" }}
                className="absolute z-10 w-16 h-16 rounded-[1.25rem] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 flex items-center justify-center shadow-lg group cursor-pointer hover:border-indigo-500/40 transition-colors"
              >
                <div className="text-center flex flex-col items-center">
                  <GraduationCap className="w-6 h-6 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">SIMS</span>
                </div>
              </motion.div>

              {/* Node 2: Top Right - LMS */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate("/products/lms")}
                style={{ left: "calc(81% - 32px)", top: "calc(40% - 32px)" }}
                className="absolute z-10 w-16 h-16 rounded-[1.25rem] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 flex items-center justify-center shadow-lg group cursor-pointer hover:border-purple-500/40 transition-colors"
              >
                <div className="text-center flex flex-col items-center">
                  <Layout className="w-6 h-6 text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">LMS</span>
                </div>
              </motion.div>

              {/* Node 3: Bottom Right - Sport */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate("/products/sport")}
                style={{ left: "calc(69% - 32px)", top: "calc(76.25% - 32px)" }}
                className="absolute z-10 w-16 h-16 rounded-[1.25rem] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 flex items-center justify-center shadow-lg group cursor-pointer hover:border-indigo-500/40 transition-colors"
              >
                <div className="text-center flex flex-col items-center">
                  <Trophy className="w-6 h-6 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">Sport</span>
                </div>
              </motion.div>

              {/* Node 4: Bottom Left - Coach */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate("/products/coach")}
                style={{ left: "calc(31% - 32px)", top: "calc(76.25% - 32px)" }}
                className="absolute z-10 w-16 h-16 rounded-[1.25rem] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 flex items-center justify-center shadow-lg group cursor-pointer hover:border-purple-500/40 transition-colors"
              >
                <div className="text-center flex flex-col items-center">
                  <BookOpen className="w-6 h-6 text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">Coach</span>
                </div>
              </motion.div>

              {/* Node 5: Top Left - Custom Product */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate("/contact")}
                style={{ left: "calc(19% - 32px)", top: "calc(40% - 32px)" }}
                className="absolute z-10 w-16 h-16 rounded-[1.25rem] bg-slate-900 dark:bg-white border border-slate-800 dark:border-white flex items-center justify-center shadow-lg group cursor-pointer hover:border-indigo-500/40 transition-colors"
              >
                <div className="text-center flex flex-col items-center">
                  <Code className="w-6 h-6 text-white dark:text-slate-900 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-600 mt-0.5">Custom</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
