import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { preloadCalendly } from "@/utils/calendly";

export const Hero = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const words = ["Intelligence.", "Potential.", "Learning.", "Solutions.", "Evolution."];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative pt-24 pb-10 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-32 overflow-hidden z-10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col items-center w-full">
                    <div className="text-center w-full">
                        <h1
                            className="text-[3.25rem] sm:text-8xl lg:text-[9rem] font-black tracking-tight mb-8 leading-[0.9] text-slate-900 dark:text-white"
                        >
                            Infinite
                            <span className="block relative h-[1.1em] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={words[index]}
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: "-100%", opacity: 0 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute inset-0 text-indigo-600 dark:text-indigo-500 w-full"
                                    >
                                        {words[index]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h1>

                        <p
                            className="text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-normal"
                        >
                            MindSync Solutions uses AI to solve the real problems in education.
                            One intelligent platform for schools, teachers, students, and parents.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row items-center justify-center gap-8"
                        >
                            <button
                                onClick={() => navigate("/contact")}
                                className="group relative inline-flex items-center justify-center px-10 h-16 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:scale-105 transition-all duration-500 font-bold overflow-hidden shadow-2xl"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Make Enquiry
                                    <MessageSquare className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>

                            <button
                                onClick={() => navigate("/schedule-demo")}
                                onMouseEnter={preloadCalendly}
                                className="group text-slate-600 dark:text-slate-400 font-bold flex items-center gap-2 hover:text-indigo-600 transition-colors"
                            >
                                Book Consultation
                                <Rocket className="h-4 w-4" />
                                <div className="w-8 h-[2px] bg-slate-200 dark:bg-slate-800 group-hover:w-12 group-hover:bg-indigo-500 transition-all" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
