"use client";

import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Modern Home Interior Design",
    description: "A complete overhaul of a classic mid-century home, bringing in modern elements while preserving its original character. Light, airy, and functional.",
    location: "Los Angeles, CA",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
  },
  {
    title: "Villa Summer Classic Design",
    description: "Mediterranean-inspired villa redesign focusing on indoor-outdoor flow, utilizing natural stone, warm woods, and expansive glass.",
    location: "Miami, FL",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Modern Living Room Design",
    description: "A minimalist approach to a downtown penthouse living area. Custom furniture, integrated lighting, and panoramic city views.",
    location: "New York, NY",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  }
];

function ProjectCard({ project, i }: { project: typeof projects[0]; i: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isEven = i % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="bg-[#0e0e0e]/60 border border-white/[0.03] backdrop-blur-md rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 md:gap-10 hover:border-[#c5a880]/20 hover:bg-[#121212] transition-colors duration-300 relative group overflow-hidden"
    >
      {/* Gold spotlight hover background */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(197, 168, 128, 0.03),
              transparent 80%
            )
          `,
        }}
      />

      <div className={`flex-1 space-y-4 ${isEven ? "order-2 md:order-1" : "order-2 md:order-2"}`}>
        <h3 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight">{project.title}</h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg font-light">
          {project.description}
        </p>
        <div className="flex items-center gap-6 text-xs text-gray-500 pb-2">
          <span className="flex items-center gap-2 font-light">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]/50" />
            Location: {project.location}
          </span>
          <span className="flex items-center gap-2 font-light">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]/50" />
            Year: {project.year}
          </span>
        </div>
        <Button variant="outline" className="rounded-full px-6 py-4 bg-transparent border-[#c5a880]/30 hover:border-[#c5a880] hover:bg-[#c5a880] hover:text-black transition-all text-xs font-normal">
          View project
        </Button>
      </div>

      <div className={`flex-1 w-full flex ${isEven ? "justify-center md:justify-end order-1 md:order-2" : "justify-center md:justify-start order-1 md:order-1"}`}>
        <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-[2rem] overflow-hidden group p-1 border border-white/[0.04] bg-[#0c0c0c] hover:border-[#c5a880]/20 transition-colors duration-500">
          {/* Accent corner marks on image wrapper */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#c5a880]/30 rounded-tl-sm z-20 group-hover:border-[#c5a880]/60 transition-colors duration-500" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#c5a880]/30 rounded-br-sm z-20 group-hover:border-[#c5a880]/60 transition-colors duration-500" />
          
          <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
            <Image 
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative overflow-hidden" id="portfolio">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#c5a880]/[0.02] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Portfolio
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-4 tracking-tight">Real Homes. Real Transformations.</h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
          Every project is designed around the homeowner’s lifestyle, taste, and daily experience.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} i={i} />
        ))}
      </div>

      <div className="mt-20 border-t border-white/[0.06] pt-16 text-center max-w-xl mx-auto space-y-6">
        <h3 className="text-xl md:text-2xl font-light text-white leading-relaxed">
          Your Dream Home Deserves More Than Just Ordinary Design
        </h3>
        <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-gray-200 text-base font-normal">
          Book A Consultation
        </Button>
      </div>
    </section>
  );
}
