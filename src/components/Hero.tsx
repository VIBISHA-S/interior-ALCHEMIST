"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

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
          Concept Studio
        </div>
        <h1 className="text-4xl md:text-6xl font-normal leading-tight mb-6 tracking-tight">
          Your Home Should Feel Like A Masterpiece You Get To Live Inside.
        </h1>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8 max-w-xl">
          Interior Alchemist designs emotionally refined living spaces for modern homeowners who want more than ordinary interiors. If you want a home that feels luxurious, intentional, peaceful, and deeply personal.
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/book" className="w-fit">
            <Button className="w-full rounded-full px-8 py-6 bg-white text-black hover:bg-[#c5a880] active:bg-[#c5a880] hover:text-black hover:shadow-[0_0_25px_rgba(197,168,128,0.35)] transition-all duration-300 text-base font-normal">
              Book Your Free Design Consultation
            </Button>
          </Link>
          <p className="text-xs text-gray-500 max-w-md pl-1 mt-1">
            Limited projects are taken each month to maintain execution quality.
          </p>
        </div>

        {/* Trust Line */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 border-t border-white/[0.06] pt-8 max-w-xl">
          {[
            "India’s 1st Conceptual Interior Design Studio",
            "End-to-End Execution",
            "Structured Timelines & Process Clarity",
            "Premium Material & Finish Selection"
          ].map((text, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs text-gray-400">
              <span className="w-5 h-5 rounded-full border border-[#c5a880]/30 bg-[#c5a880]/5 flex items-center justify-center text-[#c5a880] shrink-0">
                <Check className="w-3 h-3 text-[#c5a880]" strokeWidth={3} />
              </span>
              <span className="font-light">{text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mobile view: Two-Row Opposite Horizontal Scrolling Marquee */}
      <div className="sm:hidden w-full flex flex-col gap-4 mt-8 pointer-events-none">
        {/* Row 1 (Scrolls Left) */}
        <div className="w-full h-[110px] relative overflow-hidden">
          {/* Left and Right Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          
          <div className="flex w-max animate-marquee-left">
            {/* First Set */}
            <div className="flex gap-4 pr-4 shrink-0">
              {column1Cards.map((card) => (
                <div 
                  key={`horiz-a-${card.id}`}
                  className="relative w-[160px] h-[110px] rounded-[20px] overflow-hidden group border border-white/5 bg-neutral-900/50"
                >
                  <Image 
                    src={card.image} 
                    alt={card.title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <h3 className="text-[10px] font-normal text-white mb-0.5 tracking-wide">{card.title}</h3>
                    <p className="text-[8px] text-gray-400 font-normal">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate Set */}
            <div className="flex gap-4 pr-4 shrink-0">
              {column1Cards.map((card) => (
                <div 
                  key={`horiz-a-dup-${card.id}`}
                  className="relative w-[160px] h-[110px] rounded-[20px] overflow-hidden group border border-white/5 bg-neutral-900/50"
                >
                  <Image 
                    src={card.image} 
                    alt={card.title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <h3 className="text-[10px] font-normal text-white mb-0.5 tracking-wide">{card.title}</h3>
                    <p className="text-[8px] text-gray-400 font-normal">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 (Scrolls Right) */}
        <div className="w-full h-[110px] relative overflow-hidden">
          {/* Left and Right Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          
          <div className="flex w-max animate-marquee-right">
            {/* First Set */}
            <div className="flex gap-4 pr-4 shrink-0">
              {column2Cards.map((card) => (
                <div 
                  key={`horiz-b-${card.id}`}
                  className="relative w-[160px] h-[110px] rounded-[20px] overflow-hidden group border border-white/5 bg-neutral-900/50"
                >
                  <Image 
                    src={card.image} 
                    alt={card.title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <h3 className="text-[10px] font-normal text-white mb-0.5 tracking-wide">{card.title}</h3>
                    <p className="text-[8px] text-gray-400 font-normal">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate Set */}
            <div className="flex gap-4 pr-4 shrink-0">
              {column2Cards.map((card) => (
                <div 
                  key={`horiz-b-dup-${card.id}`}
                  className="relative w-[160px] h-[110px] rounded-[20px] overflow-hidden group border border-white/5 bg-neutral-900/50"
                >
                  <Image 
                    src={card.image} 
                    alt={card.title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <h3 className="text-[10px] font-normal text-white mb-0.5 tracking-wide">{card.title}</h3>
                    <p className="text-[8px] text-gray-400 font-normal">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="hidden sm:block flex-1 w-full max-w-[600px] h-[450px] md:h-[600px] relative overflow-hidden"
      >
        {/* Top and Bottom Fades for smooth card entry/exit */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
 
        {/* 2-Column Scrolling Grid (Touch-transparent on mobile to prevent scroll capture) */}
        <div className="grid grid-cols-2 gap-4 h-full pointer-events-none md:pointer-events-auto">
          {/* Column 1 (Scrolls Up) */}
          <div className="relative h-full overflow-hidden">
            <div className="flex flex-col shrink-0 animate-marquee-up md:hover:[animation-play-state:paused] cursor-default [will-change:transform] transform-gpu">
              {/* First Set */}
              <div className="flex flex-col gap-4 pb-4 shrink-0 h-[880px] sm:h-auto">
                {column1Cards.map((card) => (
                  <div 
                    key={`col1-a-${card.id}`}
                    className="relative w-full h-[160px] sm:h-auto sm:aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden group border border-white/5 bg-neutral-900/50"
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
              <div className="flex flex-col gap-4 pb-4 shrink-0 h-[880px] sm:h-auto">
                {column1Cards.map((card) => (
                  <div 
                    key={`col1-b-${card.id}`}
                    className="relative w-full h-[160px] sm:h-auto sm:aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden group border border-white/5 bg-neutral-900/50"
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
            <div className="flex flex-col shrink-0 animate-marquee-down md:hover:[animation-play-state:paused] cursor-default [will-change:transform] transform-gpu">
              {/* First Set */}
              <div className="flex flex-col gap-4 pb-4 shrink-0 h-[880px] sm:h-auto">
                {column2Cards.map((card) => (
                  <div 
                    key={`col2-a-${card.id}`}
                    className="relative w-full h-[160px] sm:h-auto sm:aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden group border border-white/5 bg-neutral-900/50"
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
              <div className="flex flex-col gap-4 pb-4 shrink-0 h-[880px] sm:h-auto">
                {column2Cards.map((card) => (
                  <div 
                    key={`col2-b-${card.id}`}
                    className="relative w-full h-[160px] sm:h-auto sm:aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden group border border-white/5 bg-neutral-900/50"
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
