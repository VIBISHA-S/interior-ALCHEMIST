"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const column1Cards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    title: "Minimalist Lounge",
    subtitle: "Tokyo, Japan",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Modernist Villa",
    subtitle: "Zurich, Switzerland",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    title: "Helicoidal Staircase",
    subtitle: "Milan, Italy",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Japandi Dining",
    subtitle: "Kyoto, Japan",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    title: "Concrete Kitchen",
    subtitle: "Copenhagen, Denmark",
  },
];

const column2Cards = [
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    title: "Bright Loft",
    subtitle: "Berlin, Germany",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    title: "Monolithic Bath",
    subtitle: "Oslo, Norway",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    title: "Warm Brutalism",
    subtitle: "São Paulo, Brazil",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    title: "Malibu Residence",
    subtitle: "California, USA",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    title: "Zen Entryway",
    subtitle: "Seattle, USA",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
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
        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8 max-w-md">
          We design beautiful interiors that feel like home. Transform your living spaces today with our expert touch.
        </p>
        <div className="flex items-center gap-4">
          <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-gray-200 text-base font-normal">
            Our work
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 bg-transparent border-gray-600 hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black text-base font-normal">
            Let&apos;s talk
          </Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex-1 w-full max-w-[600px] h-[500px] sm:h-[600px] md:h-[650px] relative overflow-hidden"
      >
        {/* Top and Bottom Fades for smooth card entry/exit */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* 2-Column Scrolling Grid */}
        <div className="grid grid-cols-2 gap-4 h-full">
          {/* Column 1 (Scrolls Up) */}
          <div className="relative h-full overflow-hidden">
            <div className="flex flex-col animate-marquee-up hover:[animation-play-state:paused] cursor-pointer">
              {/* First Set */}
              <div className="flex flex-col gap-4 pb-4">
                {column1Cards.map((card) => (
                  <div 
                    key={`col1-a-${card.id}`}
                    className="relative w-full aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden group border border-white/5 bg-neutral-900/50"
                  >
                    <Image 
                      src={card.image} 
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                      <h3 className="text-xs md:text-sm font-normal text-white mb-0.5 tracking-wide">{card.title}</h3>
                      <p className="text-[10px] md:text-xs text-gray-400 font-normal">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate Set for Infinite Scroll */}
              <div className="flex flex-col gap-4 pb-4">
                {column1Cards.map((card) => (
                  <div 
                    key={`col1-b-${card.id}`}
                    className="relative w-full aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden group border border-white/5 bg-neutral-900/50"
                  >
                    <Image 
                      src={card.image} 
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                      <h3 className="text-xs md:text-sm font-normal text-white mb-0.5 tracking-wide">{card.title}</h3>
                      <p className="text-[10px] md:text-xs text-gray-400 font-normal">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 (Scrolls Down) */}
          <div className="relative h-full overflow-hidden">
            <div className="flex flex-col animate-marquee-down hover:[animation-play-state:paused] cursor-pointer">
              {/* First Set */}
              <div className="flex flex-col gap-4 pb-4">
                {column2Cards.map((card) => (
                  <div 
                    key={`col2-a-${card.id}`}
                    className="relative w-full aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden group border border-white/5 bg-neutral-900/50"
                  >
                    <Image 
                      src={card.image} 
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                      <h3 className="text-xs md:text-sm font-normal text-white mb-0.5 tracking-wide">{card.title}</h3>
                      <p className="text-[10px] md:text-xs text-gray-400 font-normal">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate Set for Infinite Scroll */}
              <div className="flex flex-col gap-4 pb-4">
                {column2Cards.map((card) => (
                  <div 
                    key={`col2-b-${card.id}`}
                    className="relative w-full aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden group border border-white/5 bg-neutral-900/50"
                  >
                    <Image 
                      src={card.image} 
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                      <h3 className="text-xs md:text-sm font-normal text-white mb-0.5 tracking-wide">{card.title}</h3>
                      <p className="text-[10px] md:text-xs text-gray-400 font-normal">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
