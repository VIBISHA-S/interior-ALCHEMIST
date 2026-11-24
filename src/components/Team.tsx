import Image from "next/image";
import ArcSeam from "./ArcSeam";
import Reveal from "./Reveal";
import Shape from "./Shape";

export default function Team() {
  return (
    <section className="relative isolate overflow-hidden bg-sand py-20 md:py-36 px-6" id="team">
      <Shape kind="leaf" className="right-[6%] bottom-16 w-[clamp(8.125rem,14*var(--vw),13.75rem)] -scale-x-100" />
      <ArcSeam half="bottom" side="left" />
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="eyebrow text-taupe">Meet the founder</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline text-ink text-[clamp(2.8rem,6.5*var(--vw),6rem)] mt-8">
            The <em>mind</em> behind the concept
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-16 flex justify-center">
          <figure className="polaroid rotate-2 w-[17.5rem] sm:w-[20rem] group hover:rotate-0 transition-transform duration-500">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Deepak, founder of Interior Alchemist"
                fill
                sizes="320px"
                className="photo"
              />
            </div>
            <figcaption className="mt-4 font-serif text-3xl text-ink">Deepak</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="eyebrow text-taupe mt-10">Founder & principal director</p>
          <div className="mt-6 space-y-4 text-taupe leading-relaxed max-w-2xl mx-auto">
            <p>
              Deepak believes that a truly remarkable home isn&apos;t defined by how expensive it looks, but by how thoughtfully it is designed.
            </p>
            <p>
              With over 12 years of experience and 150+ homes behind him, his approach goes beyond creating beautiful spaces. He focuses on developing a unique concept for every home, bringing together individuality, functionality and design.
            </p>
            <p>
              He personally leads the creative vision behind every Interior Alchemist project, ensuring each home has a distinct identity and reflects the people who live in it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
