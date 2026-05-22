"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Working with interior ALCHEMIST was a dream. They completely transformed our outdated living room into a modern masterpiece. The attention to detail is unmatched.",
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
  },
  {
    text: "The team delivered the project ahead of schedule and exceeded our expectations. The material selection and custom color palettes are stunning.",
    name: "David Foster",
    role: "Real Estate Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
  {
    text: "They designed our art gallery with such precision. The lighting design is a work of art in itself, highlighting every piece perfectly.",
    name: "Aisha Rahman",
    role: "Gallery Curator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
  },
  {
    text: "Our restaurant's dining room layout has drastically improved our guest experience. The combination of industrial and warm elements is brilliant.",
    name: "James Wilson",
    role: "Restaurateur",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
  },
  {
    text: "From concept to completion, they made the design process seamless. Our villa in Malibu now feels like a private sanctuary.",
    name: "Sofia Rossi",
    role: "Luxury Homeowner",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
  },
  {
    text: "They understand spatial harmony like no other. The bespoke furniture pieces they created are the highlights of our home.",
    name: "Liam Gallagher",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&q=80",
  },
  {
    text: "The modern minimal aesthetic they achieved in our penthouse is exactly what we wanted. It is clean, functional, and warm.",
    name: "Nina Patel",
    role: "Apparel Designer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
  },
  {
    text: "They managed to preserve the historic character of our estate while integrating state-of-the-art modern comforts. Absolutely brilliant craftsmanship.",
    name: "Thomas Mueller",
    role: "Architectural Historian",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&q=80",
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.children[0]?.getBoundingClientRect().width || clientWidth;
      const index = Math.round(scrollLeft / (cardWidth + 24)); // 24px is the flex gap
      setActiveIndex(index);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.children[0]?.getBoundingClientRect().width || clientWidth;
      const scrollAmount = direction === "left" ? -(cardWidth + 24) : (cardWidth + 24);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToActiveIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.getBoundingClientRect().width || scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: index * (cardWidth + 24), behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Testimonials
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight">Hear from our clients</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 py-2"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="snap-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-2xl"
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
              
              <div className="flex items-center gap-4 mt-auto pt-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pagination & Controls */}
      <div className="flex items-center justify-between mt-10 px-4">
        {/* Pagination Dots */}
        <div className="flex gap-2 max-w-[60%] overflow-x-auto scrollbar-none">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 shrink-0 ${
                activeIndex === i ? "bg-white w-6" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Action Arrows */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] active:scale-95 transition-all flex items-center justify-center text-white cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] active:scale-95 transition-all flex items-center justify-center text-white cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
