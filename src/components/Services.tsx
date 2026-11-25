import ArcSeam from "./ArcSeam";
import Reveal from "./Reveal";
import Shape from "./Shape";

const benefits = [
  { title: <><em>Designed</em> around you</>, text: "Every concept begins with your personality, preferences and lifestyle, never a catalogue of ready-made designs." },
  { title: <><em>Built</em> with precision</>, text: "From custom details to final finishes, every element is executed to stay true to the original vision." },
  { title: <><em>Clear</em> at every stage</>, text: "Defined timelines, transparent communication and a dedicated point of contact throughout your project." },
  { title: <><em>Calm,</em> start to finish</>, text: "From first concept to final handover, we manage everything, so you can simply enjoy creating your home." },
];

export default function Services() {
  return (
    <section className="relative isolate overflow-hidden bg-sand text-ink py-20 md:py-32 px-6 md:px-10" id="services">
      <Shape kind="leaf" className="-left-6 bottom-6 w-[clamp(8.125rem,14*var(--vw),13.75rem)] -rotate-6" />
      <ArcSeam half="bottom" side="right" />
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-6 eyebrow">
            <span>What you get</span>
            <span className="flex-1 h-px bg-ink/30" />
            <span>What you get</span>
          </div>
        </Reveal>

        <ul className="mt-16 border-t border-ink/20">
          {benefits.map((b, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <li className="group grid md:grid-cols-[1fr_auto] items-center gap-4 md:gap-12 py-8 md:py-10 border-b border-ink/20">
                <h3 className="headline text-[clamp(2.4rem,6*var(--vw),5.5rem)] group-hover:translate-x-3 transition-transform duration-500 ease-out">
                  {b.title}
                </h3>
                <p className="md:max-w-xs md:text-right text-taupe leading-relaxed">{b.text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
