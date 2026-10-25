"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Shape from "./Shape";
import PhotoStack from "./PhotoStack";
import { LOADED_KEY } from "./Preloader";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  // Wait for the preloader curtain on the first visit of the session; on later visits start at once.
  const [delay, setDelay] = useState<number | null>(null);
  useEffect(() => {
    setDelay(sessionStorage.getItem(LOADED_KEY) || reduce ? 0.3 : 2.3);
  }, [reduce]);

  const rise = (i: number) =>
    delay === null
      ? {}
      : {
          initial: { y: "110%" },
          animate: { y: 0 },
          transition: { duration: 1, ease, delay: delay + i * 0.12 },
        };

  return (
    <section className="relative isolate overflow-hidden bg-cream text-ink min-h-screen flex flex-col pt-16">
      <Shape kind="leaf" className="-right-10 top-20 w-[clamp(11.25rem,22*var(--vw),21.25rem)]" />
      <Shape kind="pinwheel" className="left-[5%] bottom-24 w-[clamp(5.625rem,10*var(--vw),9.375rem)]" />

      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-10 text-center">
        <h1 className="display uppercase text-[clamp(2.6rem,13.5*var(--vw),12rem)]">
          <span className="block overflow-hidden">
            <motion.span className="block" {...rise(0)}>
              Interior
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" {...rise(1)}>
              Alchemist
            </motion.span>
          </span>
        </h1>

        {/* Pile of polaroids tucked under the wordmark; a new one lands every few seconds */}
        <PhotoStack
          className="-mt-6 md:-mt-10 w-[clamp(7.5rem,15*var(--vw),13.75rem)]"
          delay={(delay ?? 0) + 0.7}
        />

        <motion.div
          className="mt-10 md:mt-12 max-w-xl space-y-7"
          initial={{ opacity: 0, y: 16 }}
          animate={delay === null ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: (delay ?? 0) + 0.9 }}
        >
          <p className="text-base md:text-lg leading-relaxed text-ink/80">
            Emotionally refined living spaces for those who want more than ordinary interiors: luxurious, intentional, peaceful, and deeply personal.
          </p>
          <Link href="/book" className="btn btn-outline">
            Book your free consultation →
          </Link>
          <p className="eyebrow text-taupe">Limited projects each month, to keep execution quality high</p>
        </motion.div>
      </div>

      <div className="px-6 md:px-10 pb-14 flex items-center gap-6 eyebrow">
        <span>Concept studio</span>
        <span className="flex-1 h-px bg-ink/40" />
        <span>Based in India</span>
      </div>
    </section>
  );
}
