"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[400px] md:h-[500px] rounded-[40px] overflow-hidden flex items-center justify-center text-center px-4"
      >
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" 
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-medium leading-tight">
            Let&apos;s create a space you&apos;ll love
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Ready to transform your home or office? Our team of expert designers is here to bring your vision to life.
          </p>
          <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-gray-200 text-base">
            Get in touch
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
