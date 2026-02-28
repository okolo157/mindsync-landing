import { motion } from "framer-motion";
import { Wallet, Bus, ShieldAlert, CreditCard } from "lucide-react";

const busImage = "/assets/bus.png";

export const PowerFeatures = () => {
    return (
        <div className="py-20 sm:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                        The Powerhouse Modules
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Drive revenue and ensure safety with our specialized core systems.
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Finance Section */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold mb-6">
                                <Wallet className="w-4 h-4" />
                                <span>Financial Operating System</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                                Complete Financial Control
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                A unified power-suite for your school's finances. Seamlessly manage student billing, staff payroll, and daily expenses—all flowing automatically into a professional General Ledger.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Smart Billing & Multi-Channel Payment Recording",
                                    "Comprehensive Staff Payroll & Tax Management",
                                    "Double-Entry General Ledger & Financial Reporting",
                                    "Budget Controls & Real-time Expense Tracking"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <CreditCard className="w-3 h-3 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-2xl"
                        >
                            {/* Abstract Finance Visual */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <div className="text-sm text-slate-500">Global Revenue (YTD)</div>
                                        <div className="text-3xl font-bold text-slate-900 dark:text-white">$ 124,250,000</div>
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">+18%</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-white/5">
                                        <div className="text-xs text-slate-500 mb-1">Fee Collection</div>
                                        <div className="text-lg font-semibold text-indigo-600">96.4%</div>
                                        <div className="w-full bg-slate-100 h-1.5 mt-2 rounded-full overflow-hidden"><div className="bg-indigo-500 h-full w-[96%]"></div></div>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-white/5">
                                        <div className="text-xs text-slate-500 mb-1">Currency Support</div>
                                        <div className="text-lg font-semibold text-green-600">USD, NGN, GHS...</div>
                                        <div className="text-[10px] text-slate-400 mt-2">15+ Currencies</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Transport Section */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-semibold mb-6">
                                <Bus className="w-4 h-4" />
                                <span>Transport & Logistics</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                                Global Safety Standards
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Manage your fleet efficiently while giving parents peace of mind regardless of location. Our advanced transport system handles route optimization and student safety worldwide.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Live Bus Tracking & Parent Notifications",
                                    "Automated Global Route Optimization",
                                    "Vehicle Maintenance Scheduling & Fuel Tracking",
                                    "International Safety Compliance"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                                            <ShieldAlert className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full relative"
                        >
                            <div className="absolute inset-0 bg-amber-500/20 blur-[80px] rounded-full" />
                            <img
                                src={busImage}
                                alt="Diverse group of students boarding school bus"
                                className="relative w-full rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 z-10"
                            />
                            <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-4">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase">Route 12 - Global Network</div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">International Safety Priority</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
