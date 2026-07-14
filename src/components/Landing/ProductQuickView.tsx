import React from "react";
import {
  Sheet,
  SheetContent,

} from "@/components/ui/sheet";
import {
  Calendar, GraduationCap, CreditCard, Users, Fingerprint,
  Bot, Layout, PieChart, CheckSquare, Zap, Video, History,
  FileText, Share2, Layers, Send, Image as ImageIcon, MapPin,
  Clock, ShieldCheck, BaggageClaim, ArrowRight, BookOpen,
  Activity, MessageSquare, Trophy, ClipboardList, Brain,
  ScanLine, Mic
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Product } from "@/config/products";

const iconMap: Record<string, React.ElementType> = {
  Calendar, GraduationCap, CreditCard, Users, Fingerprint,
  Bot, Layout, PieChart, CheckSquare, Zap, Video, History,
  FileText, Share2, Layers, Send, Image: ImageIcon, MapPin,
  Clock, ShieldCheck, BaggageClaim, BookOpen, Activity,
  MessageSquare, Trophy, ClipboardList, Brain, ScanLine, Mic
};

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  isOpen,
  onClose
}) => {
  const navigate = useNavigate();

  if (!product) return null;

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="sm:max-w-xl w-full p-0 border-l border-white/10 overflow-hidden bg-white dark:bg-slate-950">
        <div className="h-full flex flex-col">
          {/* Visual Header Accent */}
          <div
            className="h-28 w-full relative overflow-hidden flex items-center p-8"
            style={{ backgroundColor: `${product.themeColor}10` }}
          >
            <div
              className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-20"
              style={{ backgroundColor: product.themeColor }}
            />
            <div className="relative z-10">

              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                {product.name}
              </h2>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <div className="max-w-md">
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-12">
                {product.description}
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Core Capabilities
                </div>

                <div className="space-y-6">
                  {product.features.map((feature, idx) => {
                    const Icon = iconMap[feature.iconName] || Zap;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex gap-6 group hover:translate-x-1 transition-transform"
                      >
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
                          style={{ backgroundColor: `${product.themeColor}15`, color: product.themeColor }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>


            </div>
          </div>

          {/* Persistent Footer Action */}
          <div className="p-8 border-t border-slate-100 dark:border-white/5 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl">
            <button
              onClick={() => {
                navigate(`/products/${product.id}`);
                onClose();
              }}
              className="w-full h-16 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl"
            >
              View Full Product Profile
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
