"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const outcomes = [
  { title: "Intentional Details", text: "Walk into a home where every finish and element feels like it belongs." },
  { title: "Effortless Storage", text: "Smart layouts and bespoke storage solutions that eliminate daily clutter." },
  { title: "Mood-Enhancing Lighting", text: "Lighting designs that transition seamlessly from bright workspace to cozy lounge." },
  { title: "Premium Material Selection", text: "Natural stone, rich woods, and tactile fabrics selected to feel premium to the touch." },
  { title: "Lifestyle-Supporting Layout", text: "Spaces optimized specifically around the way you live, cook, work, and relax." },
];

export default function DreamOutcome() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="vision">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side: Premium Image with Overlay & Corner Accents */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#111] border border-white/[0.04] p-1 group"
        >
          {/* Subtle gold corner borders */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-[#c5a880]/30 rounded-tl-lg z-20 group-hover:border-[#c5a880]/60 transition-colors duration-500" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-[#c5a880]/30 rounded-br-lg z-20 group-hover:border-[#c5a880]/60 transition-colors duration-500" />

          <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
              alt="Serene home interior outcome"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-90 transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <p className="text-xl md:text-2xl font-light text-white italic leading-relaxed">
                &quot;Not just visually impressive. But emotionally right.&quot;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Copy & Bento Outcome Cards */}
        <div className="flex-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-block px-3 py-1 text-xs text-emerald-400 border border-emerald-950/50 bg-emerald-950/10 rounded-full">
              The Outcome
            </div>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white tracking-tight">
              A Home That Feels Beautiful To Experience Every Single Day
            </h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
              Imagine walking into a home where every detail feels intentional, supporting your life beautifully and effortlessly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outcomes.map((item, idx) => {
              const isLast = idx === outcomes.length - 1;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`flex items-start gap-3.5 p-4 bg-white/[0.01] border border-white/[0.03] rounded-2xl hover:border-emerald-900/20 hover:bg-emerald-950/[0.01] transition-all duration-300 group ${
                    isLast ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="w-5.5 h-5.5 rounded-full border border-emerald-900/30 bg-emerald-950/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 group-hover:scale-105 group-hover:border-emerald-500/30 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] transition-all duration-300">
                    <Check className="w-3 h-3 text-emerald-400" strokeWidth={2.5} />
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm md:text-base font-medium text-white group-hover:text-emerald-400 transition-colors duration-300">{item.title}</h4>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
