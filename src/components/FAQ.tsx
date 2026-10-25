import Reveal from "./Reveal";
import Shape from "./Shape";

const faqs = [
  {
    q: "How much does a premium interior project usually cost?",
    a: "Every home is different based on scope, materials and requirements. During the consultation we help you understand realistic investment ranges clearly.",
  },
  {
    q: "Do you handle execution as well?",
    a: "Yes. Interior Alchemist manages both design and execution to keep consistency, coordination and quality control in one place.",
  },
  {
    q: "How long does the process take?",
    a: "Timelines depend on project size and complexity. A structured execution roadmap is shared before work begins.",
  },
  {
    q: "Will I receive regular updates?",
    a: "Yes. We maintain transparent communication and project updates throughout the process.",
  },
  {
    q: "Can you work within my preferred style?",
    a: "Absolutely. The design process is tailored around your lifestyle, preferences and functional needs.",
  },
  {
    q: "What makes Interior Alchemist different?",
    a: "We focus not only on visually refined interiors but on a thoughtful, organised and professionally managed experience from start to finish.",
  },
];

export default function FAQ() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-20 md:py-36 px-6 md:px-10" id="faq">
      <Shape kind="hatch-circle" className="right-[4%] bottom-10 w-[clamp(5.625rem,9*var(--vw),8.75rem)]" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 border-l border-ink/40 pl-5">
          <Reveal>
            <p className="eyebrow text-taupe">FAQ</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="headline text-ink text-[clamp(2.8rem,6*var(--vw),5rem)] mt-8">
              Frequently <em>asked</em> questions
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8 border-t border-ink/30">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={0.1 + i * 0.05}>
              <details className="group border-b border-ink/30">
                <summary className="flex items-baseline justify-between gap-6 py-6 cursor-pointer list-none font-serif text-2xl md:text-3xl text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden className="font-serif text-3xl leading-none transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-6 text-taupe leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
