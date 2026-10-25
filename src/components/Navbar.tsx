"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Process", href: "/#process" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream text-ink">
      <div className="flex items-center justify-between h-16 px-5 md:px-10">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Interior Alchemist home" className="py-1.5">
          <Logo variant="wordmark" className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link key={l.name} href={l.href} className="eyebrow relative py-1 group">
              {l.name}
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}
          <Link href="/book" className="btn btn-ink !py-2.5 !px-5">
            Book a consultation
          </Link>
        </nav>

        <button
          className="lg:hidden eyebrow -mr-3 px-3 py-3.5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden fixed inset-0 top-16 bg-cream text-ink flex flex-col px-6 pt-10"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i }}
                className="border-b border-ink/20"
              >
                <Link href={l.href} onClick={() => setOpen(false)} className="font-serif text-4xl py-4 block">
                  {l.name}
                </Link>
              </motion.div>
            ))}
            <Link href="/book" onClick={() => setOpen(false)} className="btn btn-ink mt-10 self-start">
              Book a consultation
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
