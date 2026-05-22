"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { PenTool, Home, MessageSquare, LayoutGrid } from "lucide-react";
import { MouseEvent } from "react";

const services = [
  {
    title: "Interior Design",
    description: "Creating spaces that reflect your personality while maximizing functionality and comfort.",
    icon: PenTool,
  },
  {
    title: "Architecture",
    description: "Structural and aesthetic design planning for residential and commercial buildings.",
    icon: Home,
  },
  {
    title: "Consulting",
    description: "Expert advice on material selection, color palettes, and overall design direction.",
    icon: MessageSquare,
  },
  {
    title: "Space Planning",
    description: "Optimizing layouts to ensure smooth flow, usability, and optimal utilization of space.",
    icon: LayoutGrid,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/[0.05] rounded-[20px] p-5 hover:border-white/[0.12] transition-colors duration-300 flex flex-col justify-between min-h-[170px]"
    >
      {/* Dynamic spotlight background effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[20px] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              280px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.04),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Light border glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[20px] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              100px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.12),
              transparent 80%
            )
          `,
          padding: "1px",
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      <div className="flex gap-4 items-start">
        <div className="w-10 h-10 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-white/[0.06] group-hover:border-white/[0.15] transition-all duration-300">
          <service.icon className="w-[18px] h-[18px] text-gray-300 group-hover:text-white transition-colors" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-normal mb-1 text-white tracking-wide">{service.title}</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
            {service.description}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-1 text-[11px] font-normal text-gray-400 group-hover:text-white transition-colors duration-300 self-end mt-3 cursor-pointer">
        <span>Learn more</span>
        <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">→</span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="services">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-block px-2.5 py-0.5 mb-3 text-[10px] tracking-wider uppercase text-gray-400 border border-white/10 rounded-full bg-white/[0.02]">
          Expertise
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight">Services that shape spaces</h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed max-w-lg">
          We offer a comprehensive range of design services tailored to meet your unique needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
