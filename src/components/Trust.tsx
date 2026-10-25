import ArcSeam from "./ArcSeam";
import Reveal from "./Reveal";
import Shape from "./Shape";

const points = [
  "Detailed scope clarity",
  "Transparent material selection",
  "Structured execution process",
  "Regular progress updates",
  "Quality check systems",
  "Dedicated coordination",
];

export default function Trust() {
  return (
    <section className="relative isolate overflow-hidden bg-sand py-20 md:py-36 px-6 md:px-10" id="trust">
      <Shape kind="waves" className="-right-6 -top-10 w-[clamp(9.375rem,15*var(--vw),14.375rem)]" />
      <ArcSeam half="top" side="left" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-taupe">Clarity & care</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="headline text-ink text-[clamp(2.8rem,6*var(--vw),5.5rem)] mt-8">
              A premium experience built around <em>clarity</em> and accountability
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-taupe leading-relaxed">
              Your home is one of the biggest emotional and financial investments you’ll make. Every stage is designed to give you clarity, confidence and peace of mind.
            </p>
          </Reveal>
        </div>
        <ul className="lg:col-span-6 border-t border-ink/30">
          {points.map((p, i) => (
            <Reveal key={p} delay={0.1 + i * 0.06}>
              <li className="flex items-center justify-between py-5 border-b border-ink/30 font-serif text-2xl md:text-3xl text-ink">
                {p}
                <span aria-hidden className="eyebrow text-taupe">Included</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
