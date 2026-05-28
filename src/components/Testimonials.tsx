"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    title: "“The Entire Process Felt Surprisingly Stress-Free”",
    text: "We were worried about delays and coordination before starting. But everything felt organized and transparent from the beginning. The final result exceeded our expectations.",
    name: "Sarah Jenkins",
    role: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    title: "“They Understood Exactly What We Wanted”",
    text: "The designs felt personal, functional, and premium. The execution quality and communication gave us complete confidence throughout the project.",
    name: "Michael Chen",
    role: "Tech CEO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    title: "“We Didn’t Have To Chase Anyone”",
    text: "The structured execution and regular updates made the entire experience surprisingly stress-free.",
    name: "Emily Rodriguez",
    role: "Boutique Owner",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalPages = testimonials.length - visibleCards + 1;

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.children[0]?.getBoundingClientRect().width || clientWidth;
      const step = cardWidth + 24; // 24px is the flex gap
      
      let index = Math.round(scrollLeft / step);
      
      // Boundary checking
      if (scrollLeft <= 5) {
        index = 0;
      } else if (scrollLeft + clientWidth >= scrollWidth - 5) {
        index = testimonials.length - visibleCards;
      }
      
      index = Math.max(0, Math.min(testimonials.length - visibleCards, index));
      setActiveIndex(index);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.getBoundingClientRect().width || scrollRef.current.clientWidth;
      const step = cardWidth + 24;
      
      let targetIndex = activeIndex;
      if (direction === "left") {
        targetIndex = Math.max(0, activeIndex - 1);
      } else {
        targetIndex = Math.min(testimonials.length - visibleCards, activeIndex + 1);
      }
      
      scrollRef.current.scrollTo({ left: targetIndex * step, behavior: "smooth" });
      setActiveIndex(targetIndex);
    }
  };

  const scrollToActiveIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.getBoundingClientRect().width || scrollRef.current.clientWidth;
      const step = cardWidth + 24;
      
      scrollRef.current.scrollTo({ left: index * step, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden" id="testimonials">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Testimonials
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight">
          What Homeowners Say About Working With Interior Alchemist
        </h2>
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
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 py-2 justify-start md:justify-center lg:justify-start"
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
                <h3 className="text-white text-base md:text-lg font-medium mb-3 leading-snug">
                  {testimonial.title}
                </h3>
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
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-10 px-4">
          {/* Pagination Dots */}
          <div className="flex gap-2 max-w-[60%] overflow-x-auto scrollbar-none">
            {mounted && testimonials.slice(0, totalPages).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 shrink-0 ${
                  activeIndex === i ? "bg-white w-6" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            {!mounted && testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full shrink-0 ${
                  i === 0 ? "bg-white w-6" : "bg-white/20"
                }`}
              />
            ))}
          </div>

          {/* Action Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={activeIndex === 0}
              className={`w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white transition-all ${
                activeIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/[0.08] active:scale-95 cursor-pointer"
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={activeIndex >= testimonials.length - visibleCards}
              className={`w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white transition-all ${
                activeIndex >= testimonials.length - visibleCards ? "opacity-30 cursor-not-allowed" : "hover:bg-white/[0.08] active:scale-95 cursor-pointer"
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
