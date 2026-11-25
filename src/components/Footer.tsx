import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Stripe from "./Stripe";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "FAQ", href: "/#faq" },
  { name: "Book", href: "/book" },
];

const strip = [
  { src: "/work/exterior-circle-window.webp", alt: "Residence exterior with a circular jali window" },
  { src: "/work/kitchen-blue-island.webp", alt: "Blue modular kitchen with copper-lit shelving" },
  { src: "/work/bedroom-heritage-guest.webp", alt: "Guest bedroom with a black four-poster bed" },
  { src: "/work/living-k2-marble-tv-wall.webp", alt: "Living room with a marble TV wall" },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-sand text-ink">

      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-1 py-6 px-6 eyebrow">
        {links.map((l) => (
          <Link key={l.name} href={l.href} className="py-3 hover:underline underline-offset-4">
            {l.name}
          </Link>
        ))}
      </nav>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2">
        {strip.map((img) => (
          <div key={img.src} className="group relative aspect-[4/3] overflow-hidden">
            <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="photo" />
          </div>
        ))}
      </div>

      <div className="px-6 md:px-10 pt-10 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <h2 className="lg:col-span-8 display uppercase text-[clamp(2.4rem,11*var(--vw),9rem)] md:text-[clamp(3rem,9*var(--vw),9rem)]">
          Interior
          <br />
          Alchemist
        </h2>
        <div className="lg:col-span-4 flex flex-col lg:items-end gap-5">
          <Logo variant="full" className="w-28 md:w-36" />
          <p className="eyebrow leading-loose max-w-xs lg:text-right">
            India’s first conceptual interior design studio. Design and execution under one roof.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-10 pb-5 eyebrow text-taupe">
        <span>© {new Date().getFullYear()} Interior Alchemist</span>
      </div>
      <Stripe className="h-1.5" />
    </footer>
  );
}
