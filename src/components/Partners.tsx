import Image from "next/image";
import Reveal from "./Reveal";
import Shape from "./Shape";

// Placeholder tiles until the client sends the partner list: give each entry a real name and a logo
// in /public/partners (e.g. { name: "Hettich", logo: "/partners/hettich.svg" }).
const partners: { name: string; logo?: string }[] = Array.from({ length: 6 }, (_, i) => ({
  name: `Partner ${String(i + 1).padStart(2, "0")}`,
}));

export default function Partners() {
  return (
    <section className="relative isolate overflow-hidden bg-sand py-20 md:py-32 px-6 md:px-10" id="partners">
      <Shape kind="pinwheel" className="right-[4%] top-10 w-[clamp(5rem,8*var(--vw),7.5rem)]" />
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="headline text-ink text-[clamp(2.8rem,6.5*var(--vw),6rem)]">
            Our <em>trusted</em> partners
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-ink/20">
            {partners.map((p) => (
              <li
                key={p.name}
                className="relative flex items-center justify-center aspect-[3/2] border-r border-b border-ink/20 px-6"
              >
                {p.logo ? (
                  <Image src={p.logo} alt={p.name} fill sizes="200px" className="object-contain p-8" />
                ) : (
                  <span className="eyebrow text-taupe">{p.name}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
