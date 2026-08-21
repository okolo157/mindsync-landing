import React, { useRef, useState } from "react";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  Send,
  Building2,
  User,
  Users,
  CheckCircle,
  Loader2,
  GraduationCap,
  Layout,
  Trophy,
  BookOpen,
  Code,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Share2,
  Bot,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import whatsappIcon from "@/assets/whatsapp.svg";

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return <img src={whatsappIcon} alt="" width={size} height={size} />;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const goToStep = (newStep: number) => {
    setStep(newStep);
    if (formRef.current) {
      const top =
        formRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const isPhoneInput =
    /^[0-9+\s\-()]*$/.test(formData.email) && formData.email.trim().length > 0;
  const ContactIcon = isPhoneInput ? Phone : Mail;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: "Mindsync Contact Form",
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json().catch(() => null);
        throw new Error(
          errorResponse?.error || "Failed to send message to the server.",
        );
      }

      setIsSubmitted(true);
      toast.success("Message sent successfully! We'll respond within 2 hours.");
      setFormData({
        name: "",
        email: "",
        organization: "",
        role: "",
        message: "",
      });
      setStep(1);
      setSelectedGoal("");
    } catch (error: unknown) {
      console.error("Error submitting contact form:", error);
      const message =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Sales Enquiries",
      value: "sales@mindsync.solutions",
      sub: "We'll respond within 2 business hours",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/50",
    },
    {
      icon: Mail,
      title: "General Enquiries",
      value: "hello@mindsync.solutions",
      sub: "We'll respond within 2 business hours",
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "group-hover:border-green-500/50",
    },
    {
      icon: Phone,
      title: "Ghana (Call)",
      value: "+233 543 613 605",
      sub: "Primary regional line",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "group-hover:border-emerald-500/50",
    },
    {
      icon: WhatsAppIcon,
      title: "Ghana (WhatsApp)",
      value: "+233 505 061 692",
      sub: "WhatsApp enquiries",
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "group-hover:border-green-500/50",
    },
    {
      icon: Phone,
      title: "Nigeria",
      value: "+234 904 484 8699",
      sub: "Regional contact line",
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      border: "group-hover:border-violet-500/50",
    },
    {
      icon: Phone,
      title: "Australia",
      value: "+61 430 003 953",
      sub: "Regional contact line",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "group-hover:border-amber-500/50",
    },
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact MindSync Solutions",
    description:
      "Ready to transform your institution? Contact our team of educational technology experts today.",
    mainEntity: {
      "@type": "Organization",
      name: "MindSync Solutions",
      email: "sales@mindsync.solutions",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "sales@mindsync.solutions",
          telephone: "+233543613605",
          areaServed: "GH",
        },
        {
          "@type": "ContactPoint",
          contactType: "WhatsApp",
          telephone: "+233505061692",
          areaServed: "GH",
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+2349044848699",
          areaServed: "NG",
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+61430003953",
          areaServed: "AU",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] text-slate-900 dark:text-white overflow-x-hidden selection:bg-indigo-500/30 font-sans transition-colors duration-300">
      <SEO
        title="Contact Us | MindSync Solutions"
        description="Get in touch with the MindSync Solutions team. We're here to help you revolutionize your educational ecosystem."
        canonicalUrl="https://mindsync.solutions/contact"
      />
      <StructuredData data={contactSchema} />
      <Navbar />

      <main>
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-8xl lg:text-[9rem] font-black tracking-tight mb-8 leading-[0.9] text-slate-900 dark:text-white">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
              Ready to transform your educational future? Our team in Ghana,
              Nigeria, and Australia is here to help you navigate our ecosystem
              and find the right solutions for your community.
            </p>
          </div>

          <div
            ref={formRef}
            className="max-w-2xl mx-auto mb-24 relative z-10 scroll-mt-24"
          >
            <div className="p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.75rem] md:rounded-[3.5rem] border border-white dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                    Message Sent!
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Thank you for reaching out. We'll respond within 2 business
                    hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                      <span>Step {step} of 4</span>
                      <span>
                        {step === 1 && "Select Goal"}
                        {step === 2 && "Contact Details"}
                        {step === 3 && "Organization Info"}
                        {step === 4 && "Message"}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-600 dark:bg-indigo-500 h-full transition-all duration-300"
                        style={{ width: `${(step / 4) * 100}%` }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step-1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">
                            What can we help you with?
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {
                                id: "sims",
                                label: "MindSync SIMS",
                                desc: "School Management System",
                                icon: GraduationCap,
                              },
                              {
                                id: "lms",
                                label: "MindSync LMS",
                                desc: "Learning System & coursework",
                                icon: Layout,
                              },
                              {
                                id: "coach",
                                label: "MindSync Coach",
                                desc: "AI classroom suite & lesson plans",
                                icon: BookOpen,
                              },
                              {
                                id: "sport",
                                label: "MindSync Sport",
                                desc: "Athletic operations & meets",
                                icon: Trophy,
                              },
                              {
                                id: "tutorsmart",
                                label: "TutorSmart",
                                desc: "One-to-one professional tutoring",
                                icon: Users,
                              },
                              {
                                id: "coursify",
                                label: "Coursify",
                                desc: "Convert files & videos to courses",
                                icon: Zap,
                              },
                              {
                                id: "magazine",
                                label: "MindSync Magazine",
                                desc: "Parent newsletters & calendars",
                                icon: Share2,
                              },
                              {
                                id: "jobs",
                                label: "MindSync Jobs",
                                desc: "Substitute teacher staffing",
                                icon: Bot,
                              },
                              {
                                id: "custom",
                                label: "Custom Integration",
                                desc: "Connect data to custom systems",
                                icon: Code,
                              },
                              {
                                id: "general",
                                label: "General Enquiry",
                                desc: "Other questions or support",
                                icon: HelpCircle,
                              },
                            ].map((item) => {
                              const Icon = item.icon;
                              const isSelected = selectedGoal === item.id;
                              return (
                                <button
                                  key={item.id}
                                  type="button"
                                  onClick={() => {
                                    setSelectedGoal(item.id);
                                    let templateText = "";
                                    if (item.id === "sims")
                                      templateText =
                                        "I'm looking to implement MindSync SIMS for our school. ";
                                    if (item.id === "lms")
                                      templateText =
                                        "I'm looking to set up MindSync LMS for our institution. ";
                                    if (item.id === "coach")
                                      templateText =
                                        "I'm interested in implementing MindSync Coach for lesson planning, grading rubrics, and classroom bots. ";
                                    if (item.id === "sport")
                                      templateText =
                                        "I'm interested in setting up MindSync Sport for athletic operations, meets, and brackets. ";
                                    if (item.id === "tutorsmart")
                                      templateText =
                                        "I'd like to learn more about TutorSmart tutoring solutions for our students. ";
                                    if (item.id === "coursify")
                                      templateText =
                                        "I'm interested in using Coursify to convert static materials into LMS-compatible courses. ";
                                    if (item.id === "magazine")
                                      templateText =
                                        "I'd like details on setting up MindSync Magazine for parent communications and newsletters. ";
                                    if (item.id === "jobs")
                                      templateText =
                                        "We are looking to implement MindSync Jobs to streamline our relief staffing and substitute recruitment. ";
                                    if (item.id === "custom")
                                      templateText =
                                        "We need assistance with connecting our data or building custom integrations. ";
                                    setFormData((prev) => ({
                                      ...prev,
                                      message: templateText,
                                    }));
                                    setTimeout(() => goToStep(2), 250);
                                  }}
                                  className={`flex items-start gap-3.5 p-3.5 rounded-2xl border text-left transition-all duration-200 hover:scale-[1.01] w-full ${
                                    isSelected
                                      ? "border-indigo-600 bg-indigo-50/40 dark:border-indigo-500 dark:bg-indigo-500/10"
                                      : "border-white dark:border-white/5 bg-white/60 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.05]"
                                  }`}
                                >
                                  <div
                                    className={`p-2.5 rounded-xl ${
                                      isSelected
                                        ? "bg-indigo-600 text-white dark:bg-indigo-500"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                                    }`}
                                  >
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-[#0F172A] dark:text-white text-sm">
                                      {item.label}
                                    </h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                      {item.desc}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step-2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">
                            Who should we contact?
                          </h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label
                                htmlFor="name"
                                className="text-slate-700 dark:text-slate-300 font-semibold"
                              >
                                Full Name
                              </Label>
                              <div className="relative">
                                <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                                <Input
                                  id="name"
                                  name="name"
                                  placeholder="John Doe"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  disabled={isSubmitting}
                                  enableUppercaseDisplay={false}
                                  className="pl-10 bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 font-medium"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label
                                htmlFor="email"
                                className="text-slate-700 dark:text-slate-300 font-semibold"
                              >
                                Email or Phone Number
                              </Label>
                              <div className="relative">
                                <ContactIcon className="absolute left-3 top-3 h-5 w-5 text-slate-400 transition-all duration-300" />
                                <Input
                                  id="email"
                                  name="email"
                                  type="text"
                                  placeholder="john@school.edu or +61 400 000 000"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  disabled={isSubmitting}
                                  enableUppercaseDisplay={false}
                                  className="pl-10 bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 font-medium"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button
                              type="button"
                              onClick={() => goToStep(1)}
                              variant="outline"
                              className="flex-1 h-12 rounded-xl text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10"
                            >
                              <ChevronLeft className="w-4 h-4 mr-1" /> Back
                            </Button>
                            <Button
                              type="button"
                              disabled={
                                !formData.name.trim() ||
                                !formData.email.trim() ||
                                !(
                                  formData.email.includes("@") ||
                                  /^\+?[0-9\s\-()]{7,20}$/.test(
                                    formData.email.trim(),
                                  )
                                )
                              }
                              onClick={() => goToStep(3)}
                              className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
                            >
                              Next <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step-3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">
                            Tell us about your institution
                          </h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <Label
                                  htmlFor="organization"
                                  className="text-slate-700 dark:text-slate-300 font-semibold"
                                >
                                  Organization / School Name
                                </Label>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      organization: "Anonymous",
                                    }))
                                  }
                                  className="text-xs text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-bold transition-all hover:underline"
                                >
                                  Keep Anonymous
                                </button>
                              </div>
                              <div className="relative">
                                <Building2 className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                                <Input
                                  id="organization"
                                  name="organization"
                                  placeholder="School Name"
                                  value={formData.organization}
                                  onChange={handleChange}
                                  required
                                  disabled={isSubmitting}
                                  enableUppercaseDisplay={false}
                                  className="pl-10 bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 font-medium"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label
                                htmlFor="role"
                                className="text-slate-700 dark:text-slate-300 font-semibold"
                              >
                                Your Role
                              </Label>
                              <Input
                                id="role"
                                name="role"
                                placeholder="Principal, Admin, Teacher, etc."
                                value={formData.role}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                                enableUppercaseDisplay={false}
                                className="bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 font-medium mb-2"
                              />

                              <div className="flex flex-wrap gap-2 pt-1">
                                {[
                                  "Principal",
                                  "Administrator",
                                  "IT Director",
                                  "Teacher",
                                  "Other",
                                ].map((roleOption) => (
                                  <button
                                    key={roleOption}
                                    type="button"
                                    onClick={() =>
                                      setFormData((prev) => ({
                                        ...prev,
                                        role: roleOption,
                                      }))
                                    }
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                                      formData.role === roleOption
                                        ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500"
                                        : "bg-slate-50 border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
                                    }`}
                                  >
                                    {roleOption}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button
                              type="button"
                              onClick={() => goToStep(2)}
                              variant="outline"
                              className="flex-1 h-12 rounded-xl text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10"
                            >
                              <ChevronLeft className="w-4 h-4 mr-1" /> Back
                            </Button>
                            <Button
                              type="button"
                              disabled={
                                !formData.organization.trim() ||
                                !formData.role.trim()
                              }
                              onClick={() => goToStep(4)}
                              className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
                            >
                              Next <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {step === 4 && (
                        <motion.div
                          key="step-4"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          <div>
                            <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-1">
                              Tell us a bit more or let us reach out
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Provide details or select the quick contact option
                              below.
                            </p>
                          </div>

                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  message:
                                    "No message, please just reach out to me directly.",
                                }))
                              }
                              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                                formData.message ===
                                "No message, please just reach out to me directly."
                                  ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500"
                                  : "bg-slate-50 border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
                              }`}
                            >
                              Just contact me (no message)
                            </button>
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="message"
                              className="text-slate-700 dark:text-slate-300 font-semibold"
                            >
                              Message / Requirements
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder="Tell us about your requirements..."
                              rows={5}
                              value={formData.message}
                              onChange={handleChange}
                              required
                              disabled={isSubmitting}
                              enableUppercaseDisplay={false}
                              className="bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 resize-none font-medium"
                            />
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button
                              type="button"
                              onClick={() => goToStep(3)}
                              variant="outline"
                              className="flex-1 h-12 rounded-xl text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10"
                              disabled={isSubmitting}
                            >
                              <ChevronLeft className="w-4 h-4 mr-1" /> Back
                            </Button>
                            <Button
                              type="submit"
                              disabled={
                                isSubmitting || !formData.message.trim()
                              }
                              className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="h-5 w-5 animate-spin" />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  Submit <Send className="h-4 w-4" />
                                </>
                              )}
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </>
              )}
            </div>
          </div>

          <div className="max-w-6xl mx-auto border-t border-slate-200 dark:border-white/5 pt-16 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
                Direct Contact Channels
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Want to skip the form? Reach out directly via our regional
                lines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-[2.5rem] border border-white dark:border-white/5 bg-white/60 dark:bg-white/[0.02] hover:bg-white/80  ${info.border}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${info.bg} ${info.color}`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0F172A] dark:text-white">
                        {info.title}
                      </h3>
                      <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
                        {info.value}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {info.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
