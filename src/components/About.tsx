import Reveal from "./Reveal";
import Shape from "./Shape";

const proof = [
  { value: "12+", label: "Years of experience" },
  { value: "150+", label: "Homes designed & built" },
  { value: "30+", label: "Years master artisans" },
  { value: "15", label: "Years of warranty support" },
  { value: "100+", label: "Interior design concepts created" },
];

const trust = [
  "End-to-end interiors",
  "Personalized professional interior designers",
  "Certified quality raw material",
  "Custom factory-made fine finishes",
];

export default function About() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-20 md:py-36 px-6" id="about">
      <Shape kind="quarters" className="right-[4%] bottom-16 w-[clamp(5.625rem,9*var(--vw),8.75rem)]" />
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <p className="eyebrow text-taupe">About Interior Alchemist</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline text-ink text-[clamp(2.6rem,6.5*var(--vw),5.5rem)] mt-8">
            We don&apos;t just design <em>spaces.</em> We give them an <em>identity.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 max-w-2xl mx-auto space-y-5 text-taupe text-base md:text-lg leading-relaxed">
            <p>
              Every home begins with an idea. We create one for yours, drawn from your personality and the way you live, and shape every material, light, and detail around it.
            </p>
            <p>
              And because we design and execute every project, the concept doesn&apos;t remain on paper. We bring it to life, exactly as envisioned.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-16">
          <ul className="grid grid-cols-2 md:grid-cols-5 border-t border-b border-ink/20 divide-y md:divide-y-0 md:divide-x divide-ink/20">
            {proof.map((p) => (
              <li key={p.label} className="py-6 px-3 last:col-span-2 md:last:col-span-1">
                <span className="font-serif text-3xl md:text-4xl text-ink block">{p.value}</span>
                <span className="eyebrow text-taupe mt-2 block">{p.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-x-8 gap-y-3 eyebrow text-ink text-left mx-auto w-fit sm:w-auto">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-3 leading-relaxed">
                <span aria-hidden className="w-1.5 h-1.5 bg-oxblood rotate-45" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
