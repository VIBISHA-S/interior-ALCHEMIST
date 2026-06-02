"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Sparkles, ShieldCheck, Workflow, Heart } from "lucide-react";
import { MouseEvent } from "react";

const benefits = [
  {
    title: "Beautifully Personalized",
    description: "Spaces tailored to your lifestyle and aesthetic.",
    icon: Sparkles,
  },
  {
    title: "Professionally Executed",
    description: "Professional coordination from concept to completion.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Process",
    description: "Clear timelines, approvals, and communication throughout the project.",
    icon: Workflow,
  },
  {
    title: "Peace Of Mind",
    description: "Minimal chaos. Maximum peace of mind.",
    icon: Heart,
  },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
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
      className="group relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] to-[#070707] border border-white/[0.03] rounded-[20px] p-5 hover:border-[#c5a880]/20 hover:bg-[#121212] transition-colors duration-300 flex flex-col justify-between min-h-[170px]"
    >
      {/* Dynamic gold spotlight background effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[20px] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              280px circle at ${mouseX}px ${mouseY}px,
              rgba(197, 168, 128, 0.03),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Light gold border glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[20px] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              100px circle at ${mouseX}px ${mouseY}px,
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

      <div className="flex gap-4 items-start z-10">
        <div className="w-10 h-10 bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#c5a880]/5 group-hover:border-[#c5a880]/20 transition-all duration-300">
          <benefit.icon className="w-[18px] h-[18px] text-gray-400 group-hover:text-[#c5a880] transition-colors" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-normal mb-1 text-white tracking-wide">{benefit.title}</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300 font-light">
            {benefit.description}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-1 text-[11px] font-normal text-gray-400 group-hover:text-[#c5a880] transition-colors duration-300 self-end mt-3 cursor-pointer relative pb-0.5 z-10">
        <span>Learn more</span>
        <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">→</span>
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c5a880]/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto relative overflow-hidden" id="services">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#c5a880]/[0.02] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-block px-2.5 py-0.5 mb-3 text-[10px] tracking-wider uppercase text-gray-400 border border-white/10 rounded-full bg-white/[0.02]">
          Benefits
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">Benefits that elevate your experience</h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed max-w-lg font-light">
          We don&apos;t just design beautiful spaces — we make the entire journey structured, professional, and stress-free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, i) => (
          <BenefitCard key={i} benefit={benefit} index={i} />
        ))}
      </div>
    </section>
  );
}
