"use client";

import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Compass, FileText, Crown, UserCheck, Home, ClipboardCheck } from "lucide-react";

const reasons = [
  {
    title: "Design + Execution",
    description: "We don’t just design beautiful spaces. We ensure they’re executed with precision.",
    icon: Compass,
    span: "lg:col-span-2",
  },
  {
    title: "End-to-End Process Clarity",
    description: "Clear scope, structured timelines, and transparent communication at every stage.",
    icon: FileText,
    span: "lg:col-span-1",
  },
  {
    title: "Premium Finish Standards",
    description: "Every detail is reviewed carefully to maintain consistency and quality.",
    icon: Crown,
    span: "lg:col-span-1",
  },
  {
    title: "Dedicated Coordination",
    description: "A streamlined execution process without daily vendor stress.",
    icon: UserCheck,
    span: "lg:col-span-1",
  },
  {
    title: "Lifestyle-Centered Design",
    description: "Your home should reflect how you live — not just how it looks.",
    icon: Home,
    span: "lg:col-span-1",
  },
  {
    title: "Accountability",
    description: "Structured approvals, updates, and execution tracking throughout the project. We take complete ownership from design consultation to final handover.",
    icon: ClipboardCheck,
    span: "lg:col-span-3",
  },
];

function ReasonCard({ item, index }: { item: typeof reasons[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden bg-[#0d0d0d]/60 backdrop-blur-md border border-white/[0.03] rounded-[2rem] p-8 hover:border-[#c5a880]/20 hover:bg-[#121212] transition-colors duration-300 flex flex-col justify-between min-h-[220px] ${item.span}`}
    >
      {/* Gold spotlight hover background */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              320px circle at ${mouseX}px ${mouseY}px,
              rgba(197, 168, 128, 0.03),
              transparent 80%
            )
          `,
        }}
      />

      {/* Gold border glow highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              120px circle at ${mouseX}px ${mouseY}px,
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

      <div className="space-y-6 z-10">
        <div className="w-10 h-10 bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#c5a880]/5 group-hover:border-[#c5a880]/20 transition-all duration-300">
          <item.icon className="w-5 h-5 text-gray-400 group-hover:text-[#c5a880] transition-colors" />
        </div>
        <div className="space-y-2">
          <h3 className="text-base md:text-lg font-normal text-white tracking-wide">
            {item.title}
          </h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors font-light">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-white/[0.04] relative overflow-hidden" id="why-us">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c5a880]/[0.02] rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Why Us
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">
          Why Homeowners Trust Interior Alchemist
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, idx) => (
          <ReasonCard key={idx} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}
