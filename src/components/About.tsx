"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "12+", label: "Years experience" },
  { value: "150+", label: "Projects completed" },
  { value: "20+", label: "Design awards" },
  { value: "50+", label: "Team members" },
];

export default function About() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          About us
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight max-w-3xl mx-auto">
          We&apos;ve built a team of top architects and interior designers dedicated to making your dream space a reality.
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-12 md:gap-24 w-full mb-20"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-semibold mb-2">{stat.value}</span>
            <span className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111111] border border-gray-800/50 p-8 md:p-12 rounded-3xl flex flex-col justify-center text-left"
        >
          <h3 className="text-2xl font-medium mb-6">What sets us apart</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              Tailored design approach
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              Expert project management
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              Sustainable materials
            </li>
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[300px] md:h-auto rounded-3xl overflow-hidden"
        >
          <Image 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" 
            alt="Interior layout"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
