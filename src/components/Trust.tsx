"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustPoints = [
  "Detailed Scope Clarity",
  "Transparent Material Selection",
  "Structured Execution Process",
  "Regular Progress Updates",
  "Quality Check Systems",
  "Dedicated Coordination",
];

export default function Trust() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-white/[0.04] relative overflow-hidden" id="trust">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#c5a880]/[0.02] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading and Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6 text-left"
        >
          <div className="inline-block px-3 py-1 text-xs text-gray-400 border border-gray-800 rounded-full">
            Clarity & Care
          </div>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">
            A Premium Experience Built Around Clarity And Accountability
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
            Your home is one of the biggest emotional and financial investments you’ll make. That’s why every stage is designed to create clarity, confidence, and peace of mind.
          </p>
        </motion.div>

        {/* Right Column: Grid of Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3.5 p-5 bg-white/[0.01] border border-white/[0.03] backdrop-blur-md rounded-2xl hover:border-[#c5a880]/20 hover:bg-[#c5a880]/[0.01] transition-all duration-300 group"
            >
              <span className="w-6 h-6 rounded-full border border-[#c5a880]/30 bg-[#c5a880]/5 flex items-center justify-center text-[#c5a880] shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Check className="w-3.5 h-3.5 text-[#c5a880]" strokeWidth={3} />
              </span>
              <span className="text-sm md:text-base font-normal text-gray-300 group-hover:text-white transition-colors duration-300 font-light">
                {point}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
