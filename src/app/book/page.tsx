"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/Logo";

const field =
  "w-full bg-blush border border-ink/30 px-4 py-3.5 text-base font-light text-ink placeholder:text-taupe/70 focus:outline-none focus:border-ink transition-colors";

export default function BookConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <main className="min-h-screen bg-sand text-ink flex flex-col">
      <header className="flex items-center justify-between h-16 px-5 md:px-10 border-b border-ink/20">
        <Link href="/" aria-label="Interior Alchemist home" className="py-1.5">
          <Logo variant="wordmark" className="h-8 w-auto" />
        </Link>
        <Link href="/" className="eyebrow -mr-3 px-3 py-3.5 hover:underline underline-offset-4">
          ← Back home
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-2xl bg-cream text-ink p-8 md:p-14"
            >
              <p className="eyebrow text-taupe text-center">Consultation</p>
              <h1 className="font-serif text-[clamp(2.4rem,5*var(--vw),4rem)] leading-[0.95] text-ink text-center mt-5">
                Request a <em>private</em> consultation
              </h1>
              <p className="text-taupe text-center mt-5 max-w-md mx-auto leading-relaxed">
                Tell us about your space, your layout preferences and the home you have in mind.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true); // ponytail: not wired to a backend yet; add an email/form service when the client is ready
                }}
                className="mt-10 space-y-4"
              >
                <input className={field} placeholder="Full name" required value={form.name} onChange={set("name")} aria-label="Full name" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className={field} type="email" placeholder="Email address" required value={form.email} onChange={set("email")} aria-label="Email address" />
                  <input className={field} type="tel" placeholder="Phone number" required value={form.phone} onChange={set("phone")} aria-label="Phone number" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="eyebrow text-taupe">Preferred date</span>
                    <input className={`${field} mt-2`} type="date" required value={form.date} onChange={set("date")} />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-taupe">Preferred time</span>
                    <input className={`${field} mt-2`} type="time" required value={form.time} onChange={set("time")} />
                  </label>
                </div>
                <textarea
                  className={`${field} resize-none`}
                  rows={4}
                  placeholder="Tell us a little about your home and layout goals"
                  value={form.message}
                  onChange={set("message")}
                  aria-label="Project brief"
                />
                <button type="submit" className="btn btn-ink w-full mt-4">
                  Request consultation
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-xl bg-cream text-ink p-10 md:p-14 text-center"
            >
              <p className="eyebrow text-taupe">Request received</p>
              <h2 className="font-serif text-[clamp(2.4rem,5*var(--vw),4rem)] leading-[0.95] text-ink mt-5">
                Thank you, {form.name.split(" ")[0]}
              </h2>
              <dl className="mt-8 border-t border-b border-ink/20 divide-y divide-ink/20 text-left">
                <div className="flex justify-between py-3">
                  <dt className="eyebrow text-taupe">Date</dt>
                  <dd>{form.date}</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="eyebrow text-taupe">Time</dt>
                  <dd>{form.time}</dd>
                </div>
              </dl>
              <p className="mt-6 text-taupe leading-relaxed">
                Our principal designer will review your notes and reach out within 24 hours to confirm your meeting.
              </p>
              <Link href="/" className="btn btn-ink mt-8">
                Return home
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
