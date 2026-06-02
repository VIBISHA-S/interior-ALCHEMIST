"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsOpen(false);
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Our services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
  ];

  // Reset scrollbar to top on refresh
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // If at the very top of the page, clear active nav link highlight
      if (window.scrollY < 120) {
        setActiveSection("");
        return;
      }

      const sections = ["services", "about", "portfolio", "faq"];
      const scrollPosition = window.scrollY + 200;
      let matched = false;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            matched = true;
            break;
          }
        }
      }

      if (!matched) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6 transition-all duration-300 ${
          isOpen
            ? "bg-transparent border-b border-transparent"
            : isScrolled 
              ? "bg-[#0a0a0a] border-b border-white/[0.04] md:bg-black/20 md:backdrop-blur-md md:border-b md:border-white/[0.04]" 
              : "bg-[#0a0a0a] border-b border-white/[0.04] md:bg-transparent md:border-b-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand logo on left */}
          <div className="text-xl md:text-2xl tracking-tighter text-white z-50">
            <Link href="/" onClick={handleLogoClick} className="hover:opacity-80 transition-opacity">
              <span className="font-light text-white/75">interior</span>{" "}
              <span className="font-bold bg-gradient-to-r from-white via-white to-[#c5a880] text-transparent bg-clip-text">ALCHEMIST</span>
            </Link>
          </div>

          {/* Desktop view: Floating Glass Pill Container */}
          <div className="hidden md:flex items-center bg-white/[0.02] backdrop-blur-md border border-white/[0.06] rounded-full p-1 shadow-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-xs font-normal rounded-full transition-all duration-300 ${
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

          {/* Mobile view: Animated Hamburger Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col gap-1.5 justify-center items-center w-8 h-8 z-50 relative focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`h-[1.5px] w-5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`h-[1.5px] w-5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black/65 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-start pt-28 px-8"
          >
            <motion.div 
              className="flex flex-col mt-4"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.08
                  }
                },
                hide: {
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1
                  }
                }
              }}
              initial="hide"
              animate="show"
              exit="hide"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.div
                    key={link.href}
                    variants={{
                      show: { opacity: 1, y: 0 },
                      hide: { opacity: 0, y: 15 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-normal py-5 border-b border-white/[0.06] flex items-center justify-between group transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <span className="relative py-1">
                        {link.name}
                        {/* Slide underline on hover */}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                      </span>
                      <span className="text-gray-500 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 text-lg">
                        →
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
