"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Working with Buildio was a dream. They completely transformed our outdated living room into a modern masterpiece. The attention to detail is unmatched.",
    name: "Sarah Jenkins",
    role: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    text: "Their architectural vision gave our new office building a striking yet functional design. We receive compliments from clients every single day.",
    name: "Michael Chen",
    role: "Tech CEO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    text: "I loved how they took the time to understand my personal style and incorporated it flawlessly into the design. Highly recommend their services.",
    name: "Emily Rodriguez",
    role: "Boutique Owner",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Testimonials
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight">Hear from our clients</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
