"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, ArrowLeft, Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate premium submit transition
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 selection:bg-[#c5a880]/20 relative overflow-hidden">
      {/* Decorative Background Auroras */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c5a880]/[0.03] rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-950/[0.04] rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Top Left Navigation Back link */}
      <div className="absolute top-8 left-8">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="w-full max-w-xl relative mt-12 mb-12">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="booking-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-[#0e0e0e]/80 border border-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/50 to-transparent" />

              <div className="text-center mb-8 space-y-3">
                <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-wider text-[#c5a880] border border-[#c5a880]/20 bg-[#c5a880]/5 rounded-full">
                  Consultation
                </span>
                <h1 className="text-2xl md:text-4xl font-normal tracking-tight">
                  Request a Private Consultation
                </h1>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  Let&apos;s discuss your space, layout preferences, and vision to bring your dream interior to life.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[11px] uppercase tracking-wider text-gray-400 font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#c5a880]/60" /> Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white/[0.01] border border-white/[0.06] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880]/40 focus:bg-white/[0.03] transition-all placeholder:text-gray-600 font-light"
                  />
                </div>

                {/* Contact Info Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[11px] uppercase tracking-wider text-gray-400 font-medium flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#c5a880]/60" /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-white/[0.01] border border-white/[0.06] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880]/40 focus:bg-white/[0.03] transition-all placeholder:text-gray-600 font-light"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[11px] uppercase tracking-wider text-gray-400 font-medium flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#c5a880]/60" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white/[0.01] border border-white/[0.06] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880]/40 focus:bg-white/[0.03] transition-all placeholder:text-gray-600 font-light"
                    />
                  </div>
                </div>

                {/* Appointment Slots */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-[11px] uppercase tracking-wider text-gray-400 font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#c5a880]/60" /> Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880]/40 focus:bg-white/[0.03] transition-all text-white font-light scheme-dark"
                    />
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-[11px] uppercase tracking-wider text-gray-400 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#c5a880]/60" /> Preferred Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880]/40 focus:bg-white/[0.03] transition-all text-white font-light scheme-dark"
                    />
                  </div>
                </div>

                {/* Brief Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[11px] uppercase tracking-wider text-gray-400 font-medium flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#c5a880]/60" /> Project Brief & Vision
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little bit about your home and layout goals..."
                    className="w-full bg-white/[0.01] border border-white/[0.06] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880]/40 focus:bg-white/[0.03] transition-all placeholder:text-gray-600 resize-none font-light leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <Button 
                  type="submit" 
                  className="w-full rounded-full py-6 bg-white text-black hover:bg-[#c5a880] hover:text-black hover:shadow-[0_0_25px_rgba(197,168,128,0.3)] transition-all duration-500 text-base font-normal mt-4"
                >
                  Schedule Consultation
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0e0e0e]/80 border border-[#c5a880]/30 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Confirmed Indicator */}
              <div className="w-16 h-16 rounded-full border border-[#c5a880]/30 bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880] mx-auto mb-6 shadow-[0_0_20px_rgba(197,168,128,0.2)]">
                <Check className="w-8 h-8 text-[#c5a880]" strokeWidth={2.5} />
              </div>

              <h2 className="text-2xl md:text-3xl font-normal text-white mb-4">
                Thank You, {formData.name.split(" ")[0]}
              </h2>
              <p className="text-[#c5a880] text-sm tracking-widest uppercase mb-6 font-light">
                Consultation Request Received
              </p>
              
              <div className="bg-white/[0.01] border border-white/[0.04] rounded-2xl p-6 text-left max-w-md mx-auto space-y-3.5 mb-8 font-light text-sm text-gray-400">
                <p className="flex justify-between">
                  <span className="text-gray-500">Date requested:</span> 
                  <span className="text-white font-medium">{formData.date}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500">Time slot:</span> 
                  <span className="text-white font-medium">{formData.time}</span>
                </p>
                <p className="border-t border-white/[0.04] pt-3 text-[13px] text-gray-500 text-center leading-relaxed">
                  Our principal designer will review your vision details and reach out within 24 hours to confirm your private meeting link.
                </p>
              </div>

              <div className="flex flex-col gap-4 max-w-xs mx-auto">
                <Link href="/" className="w-full">
                  <Button className="w-full rounded-full py-5 bg-[#c5a880] text-black hover:bg-[#c5a880]/90 transition-all font-medium text-sm">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
