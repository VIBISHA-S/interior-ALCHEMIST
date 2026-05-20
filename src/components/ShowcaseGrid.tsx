"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
];

export default function ShowcaseGrid() {
  return (
    <section className="py-12 overflow-hidden bg-[#0a0a0a]">
      <div className="flex justify-center items-end gap-4 px-4 min-w-max md:min-w-0">
        {images.map((src, i) => {
          // Create an alternating height pattern to mimic the reference image
          const heights = ["h-[200px]", "h-[300px]", "h-[250px]", "h-[320px]", "h-[220px]"];
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative w-[180px] sm:w-[220px] md:w-[260px] ${heights[i]} rounded-t-full rounded-b-3xl overflow-hidden shrink-0 group`}
            >
              <Image 
                src={src}
                alt={`Showcase ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
