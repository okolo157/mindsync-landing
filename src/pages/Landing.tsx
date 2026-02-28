import { motion } from "framer-motion";
import {
  Rocket,
  ChevronRight,
  Check,
  Users,
  BookOpen,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { SUBSCRIPTION_TIERS } from "@/config/subscriptionTiers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { CTAButton } from "@/components/ui/ctaButton";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { preloadCalendly } from "@/utils/calendly";
import { Differentiation } from "@/components/Landing/Differentiation";
import { TrustSection } from "@/components/Landing/TrustSection";
import { PowerFeatures } from "@/components/Landing/PowerFeatures";
import { MobileAppShowcase } from "@/components/Landing/MobileAppShowcase";

const adminsLight = "/assets/admins.png";
const adminsDark = "/assets/admins-dark.png";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] px-3 text-slate-900 dark:text-white overflow-x-hidden selection:bg-indigo-500/30 font-sans transition-colors duration-300">
      <Navbar />

      {/* Ambient Background - Simplified for Performance */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] will-change-transform" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] will-change-transform" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-12 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 overflow-hidden z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-[0.8] lg:flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/50 dark:from-white dark:via-white/90 dark:to-white/50"
              >
                Smart Management.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 dark:from-indigo-400 dark:to-purple-400">
                  Better Education.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-slate-600/90 dark:text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0"
              >
                Experience the power of a fully integrated educational ecosystem.
                Mindsync automates the mundane, so you can focus on what matters:
                Education.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
              >
                <button
                  onClick={() => navigate("/schedule-demo")}
                  onMouseEnter={preloadCalendly}
                  className="inline-flex items-center justify-center gap-2 text-base sm:text-lg px-8 sm:px-12 h-12 sm:h-16 rounded-full bg-indigo-600 dark:bg-white text-white dark:text-indigo-950 hover:bg-indigo-700 dark:hover:bg-slate-200 border-none shadow-xl dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 font-bold w-full sm:w-auto"
                >
                  Book a Demo
                  <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 lg:flex-[1.1] relative w-full max-w-[650px] lg:max-w-none"
            >
              <div className="relative">
                {/* Decorative background glow using CSS only for better perf than motion */}
                <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 blur-[80px] rounded-full scale-110" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  {/* Light mode image */}
                  <img
                    src={adminsLight}
                    alt="Multicultural School Leaders collaborating in a library office"
                    loading="eager"
                    fetchPriority="high"
                    className="block dark:hidden rounded-2xl w-full h-auto drop-shadow-[0_20px_50px_rgba(79,70,229,0.15)] border border-white/10"
                  />

                  {/* Dark mode image */}
                  <img
                    src={adminsDark}
                    alt="Multicultural School Leaders collaborating in a library office"
                    loading="eager"
                    fetchPriority="high"
                    className="hidden dark:block rounded-2xl w-full h-auto drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)] border border-white/10"
                  />
                </motion.div>

                {/* Floating Badge 1: Revenue (Top Right) */}
                <motion.div
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="absolute -top-6 -right-2 sm:top-8 sm:-right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-white/10 flex items-center gap-4 z-20 animate-bounce-slow"
                  style={{ animationDelay: '0s' }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Revenue YTD</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">+ 45% Growth</div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Students (Bottom Left) */}
                <motion.div
                  initial={{ opacity: 0, y: 20, x: -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -bottom-6 -left-2 sm:bottom-12 sm:-left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-white/10 flex items-center gap-4 z-20 animate-bounce-slow"
                  style={{ animationDelay: '1.5s' }}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Students</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">1,250 Active</div>
                  </div>
                </motion.div>

                {/* Floating Badge 3: Staff (Middle Right - Lower) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="absolute bottom-8 right-0 sm:bottom-24 sm:-right-2 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-white/10 flex items-center gap-3 z-20 animate-bounce-slow"
                  style={{ animationDelay: '3s' }}
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Staff Attendance</div>
                    <div className="text-xs font-bold text-green-600">98% Present</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Differentiation Section - WHY US */}
      <Differentiation />

      {/* Power Features - FINANCE & TRANSPORT */}
      <PowerFeatures />

      {/* General Features Grid - COMPLETE SCHOOL OS - Redesigned */}
      <div id="features" className="py-24 relative z-10 overflow-hidden bg-slate-50/50 dark:bg-white/[0.02]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Complete School OSSSSS
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Beyond the core modules, everything else runs in harmony.
            </p>
            <Button
              onClick={() => navigate("/products")}
              variant="outline"
              className="rounded-full px-8 h-12 border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-indigo-600 dark:hover:text-white transition-all group"
            >
              View All Modules <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Card 1 - Student Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-8 transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 opacity-50 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Student Management</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  A 360-degree view of every student. Track admission history, medical records, and disciplinary actions in one secure digital vault.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Digital Profiles", "Admissions", "Medical Records", "Guardian Portal"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Academic Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-8 transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-900/10 opacity-50 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Academic Excellence</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  Flexible grading systems, automated report cards, and deep performance analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Gradebook</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">•</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">CBT</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Staff & HR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-8 transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/10 opacity-50 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6 text-amber-600 dark:text-amber-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Staff & HR</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  Manage teacher workloads, attendance, and leave requests with enterprise-grade HR tools.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Payroll</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">•</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Leave</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile App Section - Dedicated Showcase */}
      <MobileAppShowcase />

      {/* Trust & Compliance Section */}
      <TrustSection />

      {/* Pricing Section - Simplified */}
      <div className="py-12 sm:py-20 lg:py-32 relative z-10 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Flexible Pricing
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Choose the plan that fits your institution's size and needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {Object.values(SUBSCRIPTION_TIERS).map((tier) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl border flex flex-col bg-white dark:bg-slate-900 ${tier.recommended
                  ? "border-indigo-500 shadow-xl scale-105 z-10"
                  : "border-slate-200 dark:border-white/10"
                  }`}
              >
                {tier.recommended && (
                  <div className="self-center mb-4 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                  {tier.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
                  {tier.description}
                </p>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.slice(0, 5).map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                    >
                      <Check className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {tier.features.length > 5 && (
                    <li className="flex items-start gap-3 text-slate-500 dark:text-slate-500 italic">
                      <span className="text-sm">
                        + {tier.features.length - 5} more features
                      </span>
                    </li>
                  )}
                </ul>
                <CTAButton
                  onClick={() => navigate("/plans")}
                  variant={tier.recommended ? "default" : "outline"}
                  className="w-full mt-auto"
                >
                  View Details
                </CTAButton>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white dark:bg-slate-950 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Is Mindsync suitable for small schools?",
                a: "Absolutely. Our Basic plan is designed specifically for smaller institutions, providing all essential tools without the complexity.",
              },
              {
                q: "Can I migrate data from my old system?",
                a: "Yes, we offer comprehensive data migration services to ensure a smooth transition from your legacy system.",
              },
              {
                q: "Is my data secure?",
                a: "Security is our top priority. We use enterprise-grade encryption and strictly adhere to data protection regulations.",
              },
              {
                q: "Do you provide training?",
                a: "We provide extensive documentation, video tutorials, and dedicated support to help your staff get up to speed quickly.",
              },
              {
                q: "Can parents access the system?",
                a: "Yes, we have a dedicated portal and mobile app for parents to track their ward's performance, attendance, and fees.",
              },
              {
                q: "Customizable Report Cards?",
                a: "Yes, our report card generation engine is highly customizable to match your school's specific grading system and layout requirements.",
              },
              {
                q: "Does Mindsync work offline?",
                a: "Mindsync is primarily cloud-based for real-time data, but we offer offline capabilities for critical daily tasks like attendance taking.",
              },
              {
                q: "How is technical support handled?",
                a: "We offer 24/7 technical support via chat, email, and phone. Premium plans also include a dedicated account manager.",
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900 dark:text-slate-200">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 lg:py-32 relative overflow-hidden bg-indigo-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Ready for Liftoff?
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100 mb-10 px-4">
              Join the schools that are already experiencing the future of Education.
            </p>
            <CTAButton
              onClick={() => navigate("/contact")}
              size="lg"
              className="px-12 h-16 rounded-full bg-white text-indigo-900 hover:bg-indigo-50 border-none shadow-xl font-bold text-lg"
              icon={Rocket}
            >
              Get Started Now
            </CTAButton>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
