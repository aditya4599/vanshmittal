import { experiences } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" className="border-t border-line py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading
          number="05"
          eyebrow="Experience"
          title="Work, as it exists today"
        >
          <p>
            Valuation, private equity, investment banking, and independent
            research experience built across different parts of finance.
          </p>
        </SectionHeading>

        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.org}-${experience.role}`}
              className="group border border-line bg-bg-raised p-6 transition-colors hover:border-navy md:grid md:grid-cols-[120px_minmax(0,1fr)] md:gap-8 md:p-8"
            >
              <p className="font-mono text-sm text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>

              <div>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-ink md:text-3xl">
                      {experience.org}
                    </h3>

                    <p className="mt-2 text-navy">
                      {experience.role}
                    </p>
                  </div>

                  <p className="font-mono text-xs text-muted">
                    {experience.dates}
                  </p>
                </div>

                <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                      Location
                    </dt>
                    <dd className="mt-1 text-ink">
                      {experience.place}
                    </dd>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-muted">
                  {experience.summary}
                </p>

                <ul className="mt-5 space-y-3">
                  {experience.details.map((detail) => (
                    <li
                      key={detail}
                      className="border-l border-line pl-4 text-sm leading-7 text-muted"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}