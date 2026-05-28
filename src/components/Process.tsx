"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery Consultation",
    desc: "Understand your lifestyle, vision, requirements, and investment range.",
  },
  {
    num: "02",
    title: "Conceptual Design Planning",
    desc: "Space planning, concepts, materials, and visualizations.",
  },
  {
    num: "03",
    title: "Approvals & Finalization",
    desc: "Selections, timelines, scope confirmation, and execution planning.",
  },
  {
    num: "04",
    title: "Execution & Coordination",
    desc: "Managed implementation with updates and quality checks.",
  },
  {
    num: "05",
    title: "Final Handover",
    desc: "A beautifully completed home ready to live in.",
  },
];

export default function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-white/[0.04] relative overflow-hidden" id="process">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c5a880]/[0.02] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Our Process
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight max-w-2xl tracking-tight">
          A Structured Process Designed To Keep Everything Clear And Stress-Free
        </h2>
      </div>

      {/* Timeline Stepper Container */}
      <div className="relative">
        {/* Horizontal Background Line (Base) for Desktop */}
        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-white/[0.04] z-0" />

        {/* Horizontal Active Glowing Line for Desktop */}
        <motion.div
          className="hidden md:block absolute top-[28px] left-[10%] h-[2px] bg-gradient-to-r from-[#c5a880] to-[#c5a880]/60 shadow-[0_0_8px_rgba(197,168,128,0.4)] z-0 origin-left"
          initial={{ width: "0%" }}
          animate={{
            width: hoveredIndex !== null ? `${(hoveredIndex / (steps.length - 1)) * 80}%` : "0%"
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
          {steps.map((step, idx) => {
            const isActive = hoveredIndex !== null && idx <= hoveredIndex;
            const isCurrent = hoveredIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Stepper Bubble */}
                <motion.div 
                  animate={{
                    scale: isCurrent ? 1.05 : 1,
                  }}
                  className={`w-14 h-14 rounded-full border bg-[#0d0d0d] flex items-center justify-center text-sm font-medium mb-6 relative transition-all duration-300 shadow-2xl z-10 ${
                    isActive 
                      ? "border-[#c5a880]/40 text-[#c5a880]" 
                      : "border-white/10 text-gray-400 group-hover:border-white/20 group-hover:text-white"
                  }`}
                >
                  {step.num}
                  {/* Glow ring */}
                  <div className={`absolute -inset-1.5 rounded-full border border-[#c5a880]/20 opacity-0 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : ""
                  }`} />
                </motion.div>

                {/* Title & Description */}
                <div className="space-y-2 px-2 z-10">
                  <h4 className={`text-sm md:text-base font-normal transition-colors duration-300 ${
                    isActive ? "text-[#c5a880]" : "text-white group-hover:text-gray-200"
                  }`}>
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-[13px] text-gray-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
