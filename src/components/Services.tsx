"use client";

import { motion } from "framer-motion";
import { PenTool, Home, MessageSquare, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function Services() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="services">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Expertise
        </div>
        <h2 className="text-3xl md:text-5xl font-medium">Services that shape spaces</h2>
        <p className="text-gray-400 mt-4 max-w-lg">
          We offer a comprehensive range of design services tailored to meet your unique needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-[#111111] border border-gray-800/50 rounded-3xl p-10 hover:bg-[#161616] transition-colors"
          >
            <div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-8">{service.description}</p>
            <Button variant="outline" className="rounded-full px-6 bg-transparent border-gray-600 hover:bg-white hover:text-black transition-all">
              Learn more
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
