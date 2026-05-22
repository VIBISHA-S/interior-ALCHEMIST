"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Alex Rivera",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
  },
  {
    name: "Jessica Lin",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
  {
    name: "Marcus Thorne",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  }
];

export default function Team() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Team
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight">The dedicated<br/>team behind the craft</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center group"
          >
            <div className="relative w-full aspect-[3/4] rounded-t-[200px] rounded-b-3xl overflow-hidden mb-6 bg-[#111111]">
              <Image 
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
                  <span className="w-5 h-5 text-white block bg-white rounded-sm"></span>
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
                  <span className="w-5 h-5 text-white block bg-white rounded-sm"></span>
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
                  <span className="w-5 h-5 text-white block bg-white rounded-sm"></span>
                </a>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-1">{member.name}</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
