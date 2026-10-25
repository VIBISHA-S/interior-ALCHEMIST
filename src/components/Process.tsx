import Shape from "./Shape";
import Reveal from "./Reveal";

const steps = [
  { title: "Discovery consultation", text: "We learn your lifestyle, vision, requirements and investment range." },
  { title: "Concept & planning", text: "Space planning, concepts, materials and visualisations." },
  { title: "Approvals", text: "Selections, timelines and scope confirmed before work begins." },
  { title: "Execution", text: "Managed implementation with regular updates and quality checks." },
  { title: "Handover", text: "A finished home, ready to live in." },
];

export default function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-cream text-ink py-20 md:py-36 px-6 md:px-10" id="process">
      <Shape kind="asterisk" className="right-[5%] top-12 w-[clamp(5rem,8*var(--vw),7.5rem)]" />
      <Shape kind="leaf" className="-left-8 bottom-6 w-[clamp(8.75rem,15*var(--vw),15rem)] -rotate-12" />
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="eyebrow text-taupe">Our process</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline text-[clamp(2.8rem,6.5*var(--vw),6rem)] mt-8 max-w-4xl">
            A <em>structured</em> process that keeps everything clear and <em>stress-free</em>
          </h2>
        </Reveal>

        <ol className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.1 + i * 0.1}>
              <li className="border-l border-ink/30 pl-5 h-full">
                <span className="eyebrow text-ink">Step {String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-2xl mt-4">{s.title}</h3>
                <p className="mt-3 text-taupe leading-relaxed text-sm">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
