import Image from "next/image";
import Reveal from "./Reveal";
import Shape from "./Shape";
import Stripe from "./Stripe";

const images = [
  { src: "/work/pooja-heritage-carved.webp", alt: "Carved wooden pooja room with an inlaid marble floor" },
  { src: "/work/niche-buddha.webp", alt: "Lit niche with a Buddha sculpture beside a checkerboard floor" },
  { src: "/work/kitchen-k2-teal-island.webp", alt: "Kitchen with a teal island and wood cabinetry" },
  { src: "/work/foyer-cane.webp", alt: "Foyer with cane-panelled shoe storage" },
  { src: "/work/balcony-heritage-checker.webp", alt: "Balcony lounge with a checkerboard floor at sunset" },
  { src: "/work/exterior-curved-facade.webp", alt: "Residence with a sweeping curved white facade" },
];

// "THE LIFESTYLE" marquee with the photo strip hung beneath it.
export default function ShowcaseGrid() {
  const word = Array(4).fill("The lifestyle").join("    ");
  return (
    <section className="relative isolate overflow-hidden bg-sand pt-6 pb-14 md:pb-20">
      <Shape kind="asterisk" className="right-[3%] bottom-4 w-[clamp(5rem,8*var(--vw),7.5rem)]" />

      <div aria-hidden className="flex whitespace-nowrap display uppercase text-[clamp(3.6rem,10*var(--vw),9rem)] text-ink select-none">
        <span className="animate-marquee-left pr-8">{word}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="animate-marquee-left pr-8">{word}&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
      <Stripe className="mt-1 h-[2px]" />

      <div className="relative mt-3 flex gap-3 md:gap-4 px-6 overflow-x-auto md:overflow-visible md:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((img, i) => (
          <Reveal key={img.src} delay={i * 0.08} className={`shrink-0 ${i % 2 ? "md:-mt-5" : "md:mt-5"}`}>
            <div className="group relative w-[10.625rem] md:w-[9.375rem] lg:w-[11.875rem] aspect-[3/4] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill sizes="220px" className="photo" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
