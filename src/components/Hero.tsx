"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 max-w-2xl"
      >
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Architecture & Design
        </div>
        <h1 className="text-5xl md:text-7xl font-normal leading-tight mb-6 tracking-tight">
          Crafting spaces<br />that match your<br />style and needs.
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-md">
          We design beautiful interiors that feel like home. Transform your living spaces today with our expert touch.
        </p>
        <div className="flex items-center gap-4">
          <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-gray-200 text-base">
            Our work
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 bg-transparent border-gray-600 hover:bg-white hover:text-black text-base">
            Let&apos;s talk
          </Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex-1 w-full flex justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-t-[1000px] rounded-b-[40px] overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" 
            alt="Modern Architecture"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay elements like 'Award Winning' badge could go here */}
          <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-normal">
              AW
            </div>
            <div>
              <p className="text-xs text-gray-300">Award winning</p>
              <p className="text-sm font-normal">Design Studio</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
