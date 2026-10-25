import Image from "next/image";
import ArcSeam from "./ArcSeam";
import Reveal from "./Reveal";
import Shape from "./Shape";

const outcomes = [
  { title: "Intentional details", text: "Walk into a home where every finish and element feels like it belongs." },
  { title: "Effortless storage", text: "Smart layouts and bespoke storage that eliminate daily clutter." },
  { title: "Mood-enhancing lighting", text: "Lighting that moves from bright workspace to cosy lounge." },
  { title: "Premium materials", text: "Natural stone, rich woods and tactile fabrics chosen to feel premium to the touch." },
  { title: "A layout built around your life", text: "Spaces planned around the way you live, cook, work and relax." },
];

export default function DreamOutcome() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-20 md:py-36 px-6 md:px-10" id="vision">
      <Shape kind="hatch-circle" className="left-[3%] top-10 w-[clamp(5.625rem,9*var(--vw),8.75rem)]" />
      <ArcSeam half="top" side="right" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-5 flex justify-center">
          <figure className="polaroid -rotate-3 w-[18.75rem] sm:w-[22.5rem] group">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/work/dining-cane.webp"
                alt="Dining area with cane chairs and a botanical mural"
                fill
                sizes="360px"
                className="photo"
              />
            </div>
            <figcaption className="font-serif italic text-xl text-ink mt-4 text-center">
              Not just visually impressive. Emotionally right.
            </figcaption>
          </figure>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-taupe">The outcome</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="headline text-ink text-[clamp(2.8rem,6*var(--vw),5.5rem)] mt-8">
              A home that <em>feels</em> beautiful to experience <em>every</em> single day
            </h2>
          </Reveal>
          <ul className="mt-12 border-t border-l border-ink/20 pl-5">
            {outcomes.map((o, i) => (
              <Reveal key={o.title} delay={0.15 + i * 0.06}>
                <li className="grid sm:grid-cols-[1fr_1.4fr] gap-2 sm:gap-8 py-5 border-b border-ink/20">
                  <h3 className="font-serif text-2xl text-ink">{o.title}</h3>
                  <p className="text-taupe leading-relaxed">{o.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
