"use client";

import { motion, useReducedMotion } from "framer-motion";

// Oxblood curtain that lifts on every route change.
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[90] bg-ink origin-top pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: reduce ? 0 : 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      />
      {children}
    </>
  );
}
