import Image from "next/image";
import ArcSeam from "./ArcSeam";
import Reveal from "./Reveal";
import Shape from "./Shape";

const outcomes = [
  { title: "A distinct design identity", text: "One central concept connects every room, giving your home a character of its own." },
  { title: "Storage, made invisible", text: "Custom storage built into the design, so every room stays clear and calm." },
  { title: "Lighting that creates atmosphere", text: "From bright, energising mornings to warm, relaxing evenings, lighting designed around how you live." },
  { title: "Materials with character", text: "Stone, wood and fabrics chosen for depth, warmth and how they feel to the touch." },
  { title: "Designed around your lifestyle", text: "How you cook, entertain, relax and spend time with your family shapes every space." },
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
            <p className="eyebrow text-taupe">Outcome of Alchemist process</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="headline text-ink text-[clamp(2.8rem,6*var(--vw),5.5rem)] mt-8">
              A home that feels <em>beautiful,</em> personal, and uniquely <em>yours.</em> Every single day.
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
