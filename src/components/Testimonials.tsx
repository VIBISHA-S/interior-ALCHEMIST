import Image from "next/image";
import Shape from "./Shape";
import Reveal from "./Reveal";

const testimonials = [
  {
    title: "The entire process felt surprisingly stress-free",
    text: "We were worried about delays and coordination before starting. But everything felt organised and transparent from the beginning. The final result exceeded our expectations.",
    name: "Sarah Jenkins",
    role: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    title: "They understood exactly what we wanted",
    text: "The designs felt personal, functional and premium. The execution quality and communication gave us complete confidence throughout the project.",
    name: "Michael Chen",
    role: "Tech CEO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    title: "We didn’t have to chase anyone",
    text: "The structured execution and regular updates made the entire experience surprisingly stress-free.",
    name: "Emily Rodriguez",
    role: "Boutique owner",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-oxblood text-cream py-20 md:py-36 px-6 md:px-10" id="testimonials">
      <Shape kind="quarters" className="bg-cream/10 right-[5%] top-4 w-[clamp(4.375rem,7*var(--vw),6.875rem)]" />
      <Shape kind="hatching" className="bg-cream/10 left-[4%] bottom-8 w-[clamp(11.25rem,20*var(--vw),18.75rem)]" />
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-6 eyebrow text-cream/70">
            <span>Kind words</span>
            <span className="flex-1 h-px bg-cream/40" />
            <span>From homeowners</span>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <figure className="bg-blush text-ink p-8 md:p-10 h-full flex flex-col">
                <blockquote className="flex-1">
                  <p className="font-display font-bold tracking-tight text-xl md:text-2xl leading-snug text-ink">“{t.title}”</p>
                  <p className="mt-6 text-taupe leading-relaxed">{t.text}</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4">
                  <span className="relative w-11 h-11 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                  <span className="eyebrow">
                    {t.name}
                    <span className="block text-taupe mt-1">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
