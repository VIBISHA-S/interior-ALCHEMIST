"use client";

import { motion } from "framer-motion";

const proofItems = [
  { value: "12+", label: "Years Experience" },
  { value: "150+", label: "Homes Designed & Executed" },
  { value: "Premium", label: "Material Standards" },
  { value: "Structured", label: "Execution Process" },
  { value: "Transparent", label: "Communication" }
];

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
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-6 bg-[#111111] border border-gray-800/50 rounded-2xl transition-all duration-300 hover:border-white/10 hover:bg-[#151515] group"
          >
            <span className="text-2xl md:text-3xl font-semibold mb-2 text-white group-hover:scale-105 transition-transform duration-300">
              {item.value}
            </span>
            <span className="text-xs text-gray-400 uppercase tracking-wider text-center">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
