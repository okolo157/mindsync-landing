import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-300 flex flex-col">
            <SEO title="Page Not Found | MindSync Solutions" description="The page you're looking for doesn't exist." />
            <Navbar />

            <main className="flex-1 flex items-center justify-center px-4">
                <div className="text-center max-w-lg">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-8xl md:text-[10rem] font-black text-indigo-600 leading-none mb-6"
                    >
                        404
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Page Not Found
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 dark:text-slate-400 text-lg font-medium mb-10"
                    >
                        The page you're looking for doesn't exist or has been moved.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        onClick={() => navigate("/")}
                        className="inline-flex items-center gap-3 px-8 h-14 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-base hover:scale-105 transition-all shadow-xl"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </motion.button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default NotFound;
