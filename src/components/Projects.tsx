import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import Shape from "./Shape";

// Real projects from the studio's 3D presentations; homeowners' names are left out.
const projects = [
  {
    title: "K2 Residence",
    description: "A double-height living room under ring chandeliers, a teal island kitchen, a bunk-bed kids' room and a lilac guest suite, tied together by white marble floors.",
    scope: "Full home",
    year: "3D design",
    image: "/work/living-k2-staircase.webp",
    alt: "K2 Residence living room with a floating staircase and indoor garden",
  },
  {
    title: "Heritage modern apartment",
    description: "Arched doorways, brass-framed mirrors and patterned marble inlays run from the living room through a play area, a rose-red kitchen and a carved-wood pooja room.",
    scope: "Full home",
    year: "2026",
    image: "/work/kitchen-heritage-rose.webp",
    alt: "Rose-red kitchen with glass-front cabinets",
  },
  {
    title: "Sage & blue family home",
    description: "Sage-green arched feature walls frame the living and dining areas, with a soft-blue modular kitchen and a jali-inspired pooja unit.",
    scope: "Full home",
    year: "2025",
    image: "/work/dining-sage-arch.webp",
    alt: "Dining area with a sage-green arched wall and terracotta chairs",
  },
];

export default function Projects() {
  return (
    <section className="relative isolate overflow-hidden bg-sand py-20 md:py-36 px-6 md:px-10" id="portfolio">
      <Shape kind="pinwheel" className="left-[3%] bottom-10 w-[clamp(5.625rem,9*var(--vw),8.75rem)]" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-taupe">Our portfolio</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="headline text-ink text-[clamp(2.8rem,6.5*var(--vw),6rem)] mt-8">
              Homes that <em>feel</em> as good as they <em>look</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-taupe leading-relaxed">
              Every project is designed around the homeowner’s lifestyle, taste and daily routine, then built by the same team that drew it.
            </p>
          </Reveal>

          <ul className="mt-14 border-t border-ink/30">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={0.2 + i * 0.08}>
                <li className="group py-7 border-b border-ink/30 grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-baseline">
                  <h3 className="font-serif text-3xl md:text-4xl text-ink group-hover:translate-x-2 transition-transform duration-500">
                    {p.title}
                  </h3>
                  <span className="eyebrow text-taupe">
                    {p.scope} · {p.year}
                  </span>
                  <p className="sm:col-span-2 text-taupe leading-relaxed max-w-xl">{p.description}</p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3}>
            <Link href="/book" className="btn btn-ink mt-12">
              Start your project →
            </Link>
          </Reveal>
        </div>

        {/* Film-strip frame, as on the reference's portfolio block */}
        <Reveal className="lg:col-span-5 flex lg:justify-end" delay={0.15}>
          <div className="w-[16.25rem] md:w-[18.75rem] border border-ink/60 bg-cream p-2.5 space-y-2.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
            {projects.map((p) => (
              <div key={p.image} className="group relative aspect-[4/5] overflow-hidden">
                <Image src={p.image} alt={p.alt} fill sizes="300px" className="photo" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
