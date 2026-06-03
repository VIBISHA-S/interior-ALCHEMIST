"use client";

import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const proofItems = [
  { value: "12+", label: "Years Experience" },
  { value: "150+", label: "Homes Designed & Executed" },
  { value: "Premium", label: "Material Standards" },
  { value: "Structured", label: "Execution Process" },
  { value: "Transparent", label: "Communication" }
];

function ProofCard({ item, index }: { item: typeof proofItems[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleTouch(e: React.TouchEvent) {
    const touch = e.touches[0];
    if (!touch) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(touch.clientX - left);
    mouseY.set(touch.clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      className="group relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] to-[#070707] border border-white/[0.03] rounded-2xl p-6 hover:border-[#c5a880]/20 hover:bg-[#121212] transition-colors duration-300 flex flex-col items-center justify-center min-h-[120px] cursor-pointer"
    >
      {/* Dynamic gold spotlight background effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              160px circle at ${mouseX}px ${mouseY}px,
              rgba(197, 168, 128, 0.03),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Light gold border glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              85px circle at ${mouseX}px ${mouseY}px,
              rgba(197, 168, 128, 0.15),
              transparent 80%
            )
          `,
          padding: "1px",
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      <span className="text-2xl md:text-3xl font-semibold mb-2 text-white group-hover:scale-105 group-hover:text-[#c5a880] transition-all duration-300 z-10">
        {item.value}
      </span>
      <span className="text-[10px] text-gray-500 uppercase tracking-widest text-center group-hover:text-gray-300 transition-colors duration-300 z-10 font-light">
        {item.label}
      </span>
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto flex flex-col items-center text-center" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Social Proof
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight max-w-4xl mx-auto">
          Chosen By Homeowners Who Value Quality, Clarity, And Professional Execution
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full"
      >
        {proofItems.map((item, index) => (
          <ProofCard key={index} item={item} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
