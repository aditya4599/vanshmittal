import { projects } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" className="border-t border-line py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading number="05" eyebrow="Work" title="Selected work, as it exists today">
          <p>
            Three case studies drawn only from work already on the résumé. Memos,
            PDFs, GitHub, and slides can be attached as they exist.
          </p>
        </SectionHeading>

        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.index}
              className="group border border-line bg-bg-raised p-6 transition-colors hover:border-navy md:grid md:grid-cols-[120px_minmax(0,1fr)] md:gap-8 md:p-8"
            >
              <p className="font-mono text-sm text-muted">{project.index}</p>
              <div>
                <h3 className="font-serif text-2xl text-ink md:text-3xl">
                  {project.title}
                </h3>
                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                      Company
                    </dt>
                    <dd className="mt-1 text-ink">{project.company}</dd>
                  </div>
                  {project.ticker ? (
                    <div>
                      <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                        Ticker
                      </dt>
                      <dd className="mt-1 font-mono text-ink">{project.ticker}</dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                      Method
                    </dt>
                    <dd className="mt-1 text-ink">{project.method}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                      Result
                    </dt>
                    <dd className="mt-1 text-ink">{project.result}</dd>
                  </div>
                </dl>
                <p className="mt-5 max-w-3xl leading-7 text-muted">
                  {project.description}
                </p>
                {project.links.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-4 text-sm">
                    {project.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="inline-flex items-center gap-2 text-navy"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="link-underline">{link.label}</span>
                          <span aria-hidden="true" className="card-arrow">
                            →
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 font-mono text-[11px] tracking-wide text-muted">
                    Artifact slot open — PDF, GitHub, memo, or slides.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
