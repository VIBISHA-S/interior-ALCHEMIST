"use client";
import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { XCircle } from "lucide-react";

const painPoints = [
  {
    text: "Contractor chaos and poor coordination",
    span: "sm:col-span-2",
  },
  {
    text: "Delayed timelines with zero accountability",
    span: "sm:col-span-1",
  },
  {
    text: "Cheap-looking finishes after huge investments",
    span: "sm:col-span-1",
  },
  {
    text: "Generic modular designs with no personality",
    span: "sm:col-span-2",
  },
  {
    text: "Endless follow-ups and communication gaps",
    span: "sm:col-span-1",
  },
  {
    text: "Spaces that look good online but fail in real life",
    span: "sm:col-span-1",
  },
];

function PainPointCard({ text, span, index }: { text: string; span: string; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden bg-[#0d0d0d]/60 backdrop-blur-md border border-white/[0.03] rounded-2xl p-5 hover:border-red-900/30 hover:bg-gradient-to-b hover:from-red-950/[0.02] hover:to-transparent transition-colors duration-300 flex items-start gap-4 ${span}`}
    >
      {/* Red hover spotlight background */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              220px circle at ${mouseX}px ${mouseY}px,
              rgba(239, 68, 68, 0.03),
              transparent 80%
            )
          `,
        }}
      />

      {/* Red border glow highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              80px circle at ${mouseX}px ${mouseY}px,
              rgba(239, 68, 68, 0.1),
              transparent 80%
            )
          `,
          padding: "1px",
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      <div className="w-6 h-6 rounded-full bg-red-950/20 border border-red-900/20 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-105 transition-transform duration-300 z-10">
        <XCircle className="w-3.5 h-3.5" />
      </div>
      
      <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors z-10 font-light">
        {text}
      </p>
    </motion.div>
  );
}

export default function Problem() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-white/[0.04] relative overflow-hidden" id="challenges">
      {/* Ambient Red Glow Backdrop */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-950/[0.06] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="inline-block px-3 py-1 text-xs text-red-400 border border-red-950/50 bg-red-950/10 rounded-full">
            The Reality
          </div>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">
            Most Interior Projects Become Stressful Long Before They Become Beautiful.
          </h2>
        </motion.div>

        {/* Right Column: Bento Grid of Pain Points */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={index}
              text={point.text}
              span={point.span}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom Full-Width Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 bg-white/[0.01] border-t border-t-[#c5a880]/20 border-x border-x-white/[0.03] border-b border-b-white/[0.03] backdrop-blur-xl rounded-[2rem] p-8 md:p-10 text-center max-w-3xl mx-auto space-y-4 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden"
      >
        {/* Decorative subtle gold light leak */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/40 to-transparent" />
        <p className="text-lg md:text-xl font-light text-white leading-relaxed tracking-wide">
          Your home is deeply personal.
        </p>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto font-light">
          You deserve a team that handles it with clarity, accountability, and care from day one.
        </p>
      </motion.div>
    </section>
  );
}
