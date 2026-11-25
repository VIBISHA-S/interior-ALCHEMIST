import Image from "next/image";
import Reveal from "./Reveal";

// The one-line thesis, set heavy over a full-bleed room photo.
export default function Statement() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream">
      <Image
        src="/work/living-heritage-arches.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/30" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-48">
        <Reveal>
          <p className="eyebrow text-cream/80 max-w-xs leading-loose">A concept-led interior design studio</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="display text-[clamp(2.6rem,6.5*var(--vw),6.5rem)] leading-[0.95] mt-8 max-w-5xl">
            Your home should feel like a masterpiece you get to live inside.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
