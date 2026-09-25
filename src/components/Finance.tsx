import { learning, education } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Finance() {
  return (
    <section
      id="markets"
      className="border-t border-line bg-[#efe8dc] py-20 md:py-28"
    >
      <div className="site-shell">
        <SectionHeading
          number="04"
          eyebrow="Markets"
          title="Learning markets by doing"
        >
          <p>
            A progression of finance, markets, and technology built through
            coursework, research, clubs, competitions, and applied work.
          </p>
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {learning.map((card) => (
            <article
              key={card.category}
              className="border border-line bg-bg-raised p-6 md:p-8"
            >
              <p className="font-mono text-[11px] tracking-[0.2em] text-green uppercase">
                {card.category}
              </p>

              <p className="mt-4 leading-7 text-muted">{card.tone}</p>

              <ul className="mt-6">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-3 text-ink last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="mt-6 border border-navy bg-bg-raised p-6 md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-green uppercase">
                Academic foundation
              </p>

              <h3 className="font-serif mt-2 text-3xl text-ink md:text-4xl">
                Finance × Accounting × Informatics
              </h3>
            </div>

            <p className="font-serif text-xl text-navy">
              {education.school}
            </p>
          </div>

          <p className="mt-6 max-w-3xl leading-8 text-muted">
            {education.degree}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                GPA
              </p>
              <p className="mt-2 text-ink">{education.gpa}</p>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                Expected
              </p>
              <p className="mt-2 text-ink">{education.expected}</p>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                School
              </p>
              <p className="mt-2 text-ink">Kelley School of Business</p>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                Informatics
              </p>
              <p className="mt-2 text-ink">Luddy School of Informatics</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}