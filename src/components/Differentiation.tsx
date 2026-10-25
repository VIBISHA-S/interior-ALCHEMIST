import Reveal from "./Reveal";
import Shape from "./Shape";

const rows = [
  { category: "Approach", ordinary: "Furniture-focused", alchemist: "Experience-focused" },
  { category: "Concept", ordinary: "Generic modular layouts", alchemist: "Deeply personalised concepts" },
  { category: "Relationship", ordinary: "Transactional", alchemist: "Lifestyle transformation" },
  { category: "Management", ordinary: "Execution confusion", alchemist: "Structured process clarity" },
  { category: "Design DNA", ordinary: "Trend-driven", alchemist: "Timeless sophistication" },
  { category: "Execution", ordinary: "Vendor coordination stress", alchemist: "Seamless end-to-end delivery" },
];

export default function Differentiation() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-20 md:py-36 px-6 md:px-10" id="differentiation">
      <Shape kind="hatching" className="right-[4%] top-10 w-[clamp(11.25rem,20*var(--vw),18.75rem)]" />
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="eyebrow text-taupe">The difference</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline text-ink text-[clamp(2.8rem,6.5*var(--vw),6rem)] mt-8">
            The difference is <em>felt</em> immediately
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          {/* Three columns from md up; on phones each row stacks: category, then the two answers */}
          <div className="hidden md:grid grid-cols-3 gap-x-10 eyebrow border-b border-ink pb-4">
            <span className="text-taupe">Compare</span>
            <span className="text-taupe">Ordinary firms</span>
            <span className="text-ink">Interior Alchemist</span>
          </div>
          {rows.map((r) => (
            <div
              key={r.category}
              className="grid md:grid-cols-3 gap-y-1.5 md:gap-x-10 md:items-baseline py-5 border-b border-ink/20 border-t md:border-t-0 first:border-t-0"
            >
              <span className="eyebrow text-taupe">{r.category}</span>
              <span className="text-taupe/80 line-through decoration-ink/40 text-base md:text-lg">
                {r.ordinary}
              </span>
              <span className="font-serif text-2xl md:text-3xl text-ink">{r.alchemist}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
