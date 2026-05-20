"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto"
    >
      <div className="text-2xl font-normal tracking-tighter">
        <Link href="/">interior ALCHEMIST</Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <Link href="#services" className="hover:text-white transition-colors">Our services</Link>
        <Link href="#process" className="hover:text-white transition-colors">Our process</Link>
        <Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
        <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
      </div>

      <div>
        <Button variant="outline" className="rounded-full px-6 py-2 bg-transparent border-gray-600 hover:bg-white hover:text-black transition-all">
          Let&apos;s talk
        </Button>
      </div>
    </motion.nav>
  );
}
