import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PRODUCTS } from "@/config/products";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import {
  ArrowLeft, Globe,
  Zap, Calendar, GraduationCap, CreditCard,
  Users, Fingerprint, Bot, Layout,
  PieChart, CheckSquare, Video, History,
  FileText, Share2, Layers, Send,
  Image as ImageIcon, MapPin, Clock,
  ShieldCheck, BaggageClaim, BookOpen,
  Activity, MessageSquare, Trophy, ClipboardList
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Calendar, GraduationCap, CreditCard, Users, Fingerprint, 
  Bot, Layout, PieChart, CheckSquare, Zap, Video, History, 
  FileText, Share2, Layers, Send, Image: ImageIcon, MapPin, 
  Clock, ShieldCheck, BaggageClaim, BookOpen, Activity,
  MessageSquare, Trophy, ClipboardList
};

const ProductDetailPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();
    const product = PRODUCTS.find(p => p.id === productId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                <button 
                  onClick={() => navigate("/products")}
                  className="px-8 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold"
                >
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-300">
            <SEO 
                title={`${product.name} | MindSync Solutions`}
                description={product.description}
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div 
                      className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full blur-[120px] opacity-20"
                      style={{ backgroundColor: product.themeColor }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <button 
                        onClick={() => navigate("/products")}
                        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-12 font-bold text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Ecosystem
                    </button>

                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-8"
                        >
                            {product.tagline}
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]"
                        >
                            {product.name.split(" ").map((word, i) => (
                                <span key={i} className={i === product.name.split(" ").length - 1 ? "text-indigo-600" : ""}>
                                    {word}{" "}
                                </span>
                            ))}
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-12"
                        >
                            {product.longDescription || product.description}
                        </motion.p>

                        {product.link && (
                            <motion.a
                                href={product.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-4 px-10 h-16 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-lg hover:scale-105 transition-all shadow-2xl"
                            >
                                Launch Platform
                                <Globe className="w-5 h-5" />
                            </motion.a>
                        )}
                    </div>
                </div>
            </section>

            {/* Core Modules / Features */}
            <section className="py-24 bg-slate-50 dark:bg-white/5 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {product.features.map((feature, idx) => {
                            const Icon = iconMap[feature.iconName] || Zap;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-indigo-500/20 transition-all shadow-sm hover:shadow-xl"
                                >
                                    <div 
                                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                                      style={{ backgroundColor: `${product.themeColor}15`, color: product.themeColor }}
                                    >
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
