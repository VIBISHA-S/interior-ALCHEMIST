import Shape from "./Shape";
import Reveal from "./Reveal";

const painPoints = [
  "Contractor chaos and poor coordination",
  "Delayed timelines with zero accountability",
  "Cheap-looking finishes after huge investments",
  "Generic modular designs with no personality",
  "Endless follow-ups and communication gaps",
  "Spaces that look good online but fail in real life",
];

export default function Problem() {
  return (
    <section className="relative isolate overflow-hidden bg-oxblood text-cream py-20 md:py-36 px-6 md:px-10" id="challenges">
      <Shape kind="hatching" className="bg-cream/10 left-[4%] bottom-10 w-[clamp(11.25rem,20*var(--vw),18.75rem)]" />
      <Shape kind="waves" className="bg-cream/15 -right-6 -top-6 w-[clamp(9.375rem,16*var(--vw),15.625rem)]" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-cream/70">The reality</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="headline text-[clamp(2.8rem,6*var(--vw),5.5rem)] mt-8">
              Most interior projects become <em>stressful</em> long before they become <em>beautiful.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-serif italic text-2xl md:text-3xl mt-10">Your home is deeply personal.</p>
            <p className="mt-3 text-cream/70 max-w-sm leading-relaxed">
              You deserve a team that handles it with clarity, accountability, and care from day one.
            </p>
          </Reveal>
        </div>

        <ul className="lg:col-span-7 border-t border-cream/30">
          {painPoints.map((text, i) => (
            <Reveal key={text} delay={0.1 + i * 0.06}>
              <li className="group flex items-baseline gap-6 py-6 border-b border-cream/30">
                <span aria-hidden className="font-serif text-3xl leading-none text-cream/70 group-hover:text-cream transition-colors">
                  ×
                </span>
                <span className="text-lg md:text-2xl font-light">{text}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
