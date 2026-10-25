"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";
import Reveal from "./Reveal";
import Shape from "./Shape";

// Add a `videoUrl` to a client to give its card a play button and open the video modal.
// The old Vimeo links returned 403, so no client has a video yet.
const feedbacks: { name: string; role: string; thumbnail: string; videoUrl?: string }[] = [
  {
    name: "Krishna",
    role: "Hair stylist · Owner of Page 3 – KNK",
    thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    name: "Ananya Sharma",
    role: "Creative director · Studio Design Co.",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    name: "Rohan Mehta",
    role: "Founder · Vertex Labs",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const tilt = ["-rotate-2", "rotate-1", "-rotate-1"];

export default function VideoFeedback() {
  const [active, setActive] = useState<(typeof feedbacks)[0] | null>(null);

  return (
    <section className="relative isolate overflow-hidden bg-cream py-20 md:py-36 px-6 md:px-10" id="video-feedbacks">
      <Shape kind="leaf" className="-right-6 top-16 w-[clamp(8.125rem,14*var(--vw),13.75rem)] rotate-6" />
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="eyebrow text-taupe">Video reviews</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline text-ink text-[clamp(2.8rem,6.5*var(--vw),6rem)] mt-8 max-w-3xl">
            Hear it in <em>their</em> own words
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {feedbacks.map((f, i) => {
            const Card = f.videoUrl ? "button" : "div";
            return (
            <Reveal key={f.name} delay={i * 0.1}>
              <Card
                {...(f.videoUrl && { onClick: () => setActive(f), "aria-label": `Play video review from ${f.name}` })}
                className={`polaroid ${tilt[i]} w-full max-w-[21.25rem] mx-auto block text-left group hover:rotate-0 transition-transform duration-500`}
              >
                <span className="relative block aspect-[4/5] overflow-hidden">
                  <Image src={f.thumbnail} alt="" fill sizes="340px" className="photo" />
                  {f.videoUrl && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-16 h-16 rounded-full bg-cream/90 text-ink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </span>
                    </span>
                  )}
                </span>
                <span className="block mt-4 font-serif text-2xl text-ink">{f.name}</span>
                <span className="block eyebrow text-taupe mt-1">{f.role}</span>
              </Card>
            </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-ink/90 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="relative w-full max-w-4xl bg-ink"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 bg-blush text-ink">
                <span className="eyebrow">{active.name}</span>
                <button onClick={() => setActive(null)} aria-label="Close video" className="hover:rotate-90 transition-transform">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <video src={active.videoUrl} controls autoPlay playsInline className="w-full aspect-video" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
