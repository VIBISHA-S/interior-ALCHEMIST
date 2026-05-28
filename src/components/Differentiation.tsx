"use client";

import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    category: "Approach",
    ordinary: "Furniture-focused",
    alchemist: "Experience-focused",
  },
  {
    category: "Concept",
    ordinary: "Generic modular layouts",
    alchemist: "Deeply personalized concepts",
  },
  {
    category: "Relationship",
    ordinary: "Transactional approach",
    alchemist: "Lifestyle transformation",
  },
  {
    category: "Management",
    ordinary: "Execution confusion",
    alchemist: "Structured process clarity",
  },
  {
    category: "Design DNA",
    ordinary: "Trend-driven design",
    alchemist: "Timeless sophistication",
  },
  {
    category: "Execution",
    ordinary: "Vendor coordination stress",
    alchemist: "Seamless end-to-end execution",
  },
];

export default function Differentiation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-white/[0.04] relative overflow-hidden" id="differentiation">
      {/* Background Aurora */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#c5a880]/[0.02] rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          The Difference
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">
          The Difference Is Felt Immediately.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left Side: Ordinary Interior Firms (Muted & Desaturated) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#070707]/80 border border-white/[0.02] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between opacity-50 hover:opacity-75 transition-opacity duration-300"
        >
          <div className="space-y-8">
            <h3 className="text-xl md:text-2xl font-light text-gray-600 pb-4 border-b border-white/[0.02] tracking-wide">
              Ordinary Interior Firms
            </h3>
            <div className="space-y-6">
              {comparisons.map((row, idx) => (
                <div key={idx} className="flex items-start gap-4 text-gray-600">
                  <X className="w-4 h-4 text-gray-700 shrink-0 mt-1" strokeWidth={2} />
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-gray-700 font-medium block">
                      {row.category}
                    </span>
                    <p className="text-sm md:text-base font-light">{row.ordinary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Interior Alchemist (Premium Gold Glow) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseMove={handleMouseMove}
          className="bg-[#0e0e0e]/80 border border-[#c5a880]/20 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group transition-all duration-300 hover:border-[#c5a880]/30"
        >
          {/* Gold spotlight hover background */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  350px circle at ${mouseX}px ${mouseY}px,
                  rgba(197, 168, 128, 0.05),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Gold border glow highlight */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  150px circle at ${mouseX}px ${mouseY}px,
                  rgba(197, 168, 128, 0.25),
                  transparent 80%
                )
              `,
              padding: "1px",
              maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
            }}
          />
          
          <div className="space-y-8 z-10">
            <h3 className="text-xl md:text-2xl font-medium text-white pb-4 border-b border-white/[0.06] flex items-center justify-between tracking-wide">
              <span>Interior Alchemist</span>
              <span className="text-xs text-[#c5a880] bg-[#c5a880]/10 border border-[#c5a880]/20 px-3 py-1 rounded-full font-light tracking-wider uppercase">
                Premium Choice
              </span>
            </h3>
            <div className="space-y-6">
              {comparisons.map((row, idx) => (
                <div key={idx} className="flex items-start gap-4 text-white group-hover:translate-x-0.5 transition-transform duration-300">
                  <span className="w-5.5 h-5.5 rounded-full border border-[#c5a880]/30 bg-[#c5a880]/5 flex items-center justify-center text-[#c5a880] shrink-0 mt-0.5 group-hover:border-[#c5a880] transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-[#c5a880]" strokeWidth={2.5} />
                  </span>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#c5a880]/80 font-medium block">
                      {row.category}
                    </span>
                    <p className="text-sm md:text-base font-normal">{row.alchemist}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
