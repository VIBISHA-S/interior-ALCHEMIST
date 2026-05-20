"use client";

import { motion } from "framer-motion";
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

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="portfolio">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Portfolio
        </div>
        <h2 className="text-3xl md:text-5xl font-medium">A showcase of<br/>our recent projects</h2>
      </div>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111111] border border-gray-800/50 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 space-y-6 order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-medium leading-tight">{project.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                {project.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 pb-4">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  Location: {project.location}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  Year: {project.year}
                </span>
              </div>
              <Button variant="outline" className="rounded-full px-8 py-6 bg-transparent border-gray-600 hover:bg-white hover:text-black transition-all">
                View project
              </Button>
            </div>
            <div className="flex-1 w-full flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative w-full max-w-[400px] aspect-[4/3] md:aspect-[4/5] rounded-t-[200px] rounded-b-3xl overflow-hidden group">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" className="rounded-full px-8 py-6 bg-transparent border-gray-600 hover:bg-white hover:text-black transition-all text-base">
          View all projects
        </Button>
      </div>
    </section>
  );
}
