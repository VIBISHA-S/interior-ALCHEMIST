"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Our services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Add subtle background shift on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlight
      const sections = ["services", "about", "portfolio", "faq"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/10 backdrop-blur-md border-b border-white/[0.04]" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand logo on left */}
        <div className="text-xl md:text-2xl font-normal tracking-tighter text-white">
          <Link href="/">interior ALCHEMIST</Link>
        </div>

        {/* Floating Glass Pill Container on the right */}
        <div className="flex items-center bg-white/[0.02] backdrop-blur-md border border-white/[0.06] rounded-full p-1 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-normal rounded-full transition-all duration-300 ${
                  isActive 
                    ? "bg-white/[0.08] text-white border border-white/[0.08]" 
                    : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
