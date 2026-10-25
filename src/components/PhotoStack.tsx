"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const photos = [
  { src: "/work/living-k2-curved-sofa.webp", alt: "Living room with a curved sofa under ring chandeliers" },
  { src: "/work/living-heritage-arches.webp", alt: "Living room with arched doorways and brass mirrors" },
  { src: "/work/living-sage-arch.webp", alt: "Living area with a sage-green arched feature wall" },
  { src: "/work/living-teal-sofa.webp", alt: "Long living room with a teal sofa and wood-panelled TV wall" },
  { src: "/work/bedroom-mandala.webp", alt: "Bedroom with a mandala wall motif and floating bed" },
];

// Three slots, bottom to top. Each layer is fanned out so its edges show behind the one above.
const slots = [
  { x: -22, y: 10, rotate: -11, scale: 0.94 },
  { x: 14, y: 4, rotate: 7, scale: 0.97 },
  { x: 0, y: 0, rotate: -2, scale: 1 },
];
const ease = [0.22, 1, 0.36, 1] as const;

// A pile of polaroids: every few seconds the next photo lands on top and the bottom one slips away.
export default function PhotoStack({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(slots.length);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setCount((c) => c + 1), 1500);
    return () => clearInterval(id);
  }, [reduce]);

  // the last three photos, oldest first
  const pile = Array.from({ length: slots.length }, (_, i) => count - slots.length + i);

  return (
    <motion.div
      className={cn("relative aspect-[4/5]", className)}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {/* keep every photo decoded so a new card never lands blank */}
      <span className="hidden">
        {photos.map((p) => (
          <Image key={p.src} src={p.src} alt="" width={200} height={250} loading="eager" />
        ))}
      </span>
      <AnimatePresence initial={false}>
        {pile.map((n, i) => {
          const photo = photos[((n % photos.length) + photos.length) % photos.length];
          return (
            <motion.span
              key={n}
              className="absolute inset-0 bg-blush p-[6%] pb-[14%] shadow-[0_24px_50px_-18px_rgba(0,0,0,0.4)]"
              style={{ zIndex: i }}
              initial={{ x: 70, y: -110, rotate: 16, scale: 1.06, opacity: 0 }}
              animate={{ ...slots[i], opacity: 1 }}
              exit={{ x: -40, y: 50, rotate: -22, opacity: 0, transition: { duration: 0.35, ease } }}
              transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.7 }}
            >
              <span className="relative block h-full w-full overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill sizes="240px" className="object-cover" />
              </span>
            </motion.span>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
