import Shape from "./Shape";
import Reveal from "./Reveal";

const reasons = [
  { title: "Design + execution", text: "We don’t just design beautiful spaces. We make sure they’re built with precision." },
  { title: "End-to-end clarity", text: "Clear scope, structured timelines and transparent communication at every stage." },
  { title: "Premium finish standards", text: "Every detail is reviewed to keep consistency and quality." },
  { title: "Dedicated coordination", text: "A streamlined site process without daily vendor stress." },
  { title: "Lifestyle-centred design", text: "Your home should reflect how you live, not only how it looks." },
  { title: "Accountability", text: "Structured approvals, updates and tracking. We own the project from first consultation to handover." },
];

export default function WhyUs() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-20 md:py-36 px-6 md:px-10" id="why-us">
      <Shape kind="leaf" className="right-[5%] top-12 w-[clamp(7.5rem,12*var(--vw),11.875rem)] -scale-x-100" />
      <Shape kind="hatching" className="right-[4%] bottom-10 w-[clamp(12.5rem,24*var(--vw),22.5rem)]" />
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="eyebrow text-taupe">Why us</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline text-ink text-[clamp(2.8rem,6.5*var(--vw),6rem)] mt-8 max-w-4xl">
            Why homeowners <em>trust</em> Interior Alchemist
          </h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={0.1 + i * 0.06}>
              <li className="border-t border-ink/30 pt-6">
                <h3 className="font-serif text-2xl md:text-3xl text-ink">{r.title}</h3>
                <p className="mt-3 text-taupe leading-relaxed">{r.text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
