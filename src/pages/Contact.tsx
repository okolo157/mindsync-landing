import React, { useState } from "react";
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
  MessageSquare,
  Building2,
  User,
  CheckCircle,
  Loader2,
} from "lucide-react";

import { toast } from "sonner";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          source: "Mindsync Contact Form"
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json().catch(() => null);
        throw new Error(
          errorResponse?.error || "Failed to send message to the server."
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
      icon: Phone,
      title: "Ghana (Call)",
      value: "+233 543 613 605",
      sub: "Primary regional line",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "group-hover:border-emerald-500/50",
    },
    {
      icon: MessageSquare,
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
    "name": "Contact MindSync Solutions",
    "description": "Ready to transform your institution? Contact our team of educational technology experts today.",
    "mainEntity": {
      "@type": "Organization",
      "name": "MindSync Solutions",
      "email": "sales@mindsync.solutions",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "sales@mindsync.solutions",
          "telephone": "+233543613605",
          "areaServed": "GH"
        },
        {
          "@type": "ContactPoint",
          "contactType": "WhatsApp",
          "telephone": "+233505061692",
          "areaServed": "GH"
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+2349044848699",
          "areaServed": "NG"
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+61430003953",
          "areaServed": "AU"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] px-3 text-slate-900 dark:text-white overflow-x-hidden selection:bg-indigo-500/30 font-sans transition-colors duration-300">
      <SEO
        title="Contact Us | MindSync Solutions"
        description="Get in touch with the MindSync Solutions team. We're here to help you revolutionize your educational ecosystem."
        canonicalUrl="https://mindsync.solutions/contact"
      />
      <StructuredData data={contactSchema} />
      <Navbar />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="text-center mb-16">
          <h1
            className="text-5xl sm:text-8xl lg:text-[9rem] font-black tracking-tight mb-8 leading-[0.9] text-slate-900 dark:text-white"
          >
            Get in Touch
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Ready to transform your educational future? Our team is here to help you
            navigate our ecosystem and find the perfect solutions for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <div
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group p-6 rounded-[2.5rem] border border-white dark:border-white/5 bg-white/60 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.05] backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ${info.border}`}
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

            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl mt-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready for a Demo?</h3>
                <p className="text-indigo-100 mb-6">
                  See exactly how our platform can streamline your operations.
                  Book a personalized walkthrough with our team, or submit your needs first.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => (window.location.href = "/schedule-demo")}
                    className="bg-white text-indigo-600 hover:bg-indigo-50 border-none w-full sm:w-auto"
                  >
                    Schedule Demo
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setFormData((prev) => ({ ...prev, message: prev.message || "Our institution is looking for..." }))}
                    className="border-white/40 text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    Share Requirements
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="p-8 rounded-[3.5rem] border border-white dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                    Message Sent!
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Thank you for reaching out. We'll respond within 2 business hours.
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
                  <h2 className="text-2xl font-bold mb-6 text-[#0F172A] dark:text-white flex items-center gap-2">
                    <MessageSquare className="text-indigo-500" />
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-[#0F172A] font-semibold dark:text-slate-300"
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
                            className="pl-10 bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-slate-700 dark:text-slate-300"
                        >
                          Work Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@school.edu"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            enableUppercaseDisplay={false}
                            className="pl-10 bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="organization"
                          className="text-slate-700 dark:text-slate-300"
                        >
                          Organization
                        </Label>
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
                            className="pl-10 bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="role"
                          className="text-slate-700 dark:text-slate-300"
                        >
                          Role
                        </Label>
                        <Input
                          id="role"
                          name="role"
                          placeholder="Principal, Admin, etc."
                          value={formData.role}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          enableUppercaseDisplay={false}
                          className="bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-slate-700 dark:text-slate-300"
                      >
                        Message
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
                        className="bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none font-medium"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white text-lg font-medium rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
