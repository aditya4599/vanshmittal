import { researchIntro, researchItems } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Research() {
  const [featured, ...rest] = researchItems;

  return (
    <section id="research" className="border-t border-line bg-[#efe8dc] py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading number="03" eyebrow="Research" title={researchIntro.title}>
          <p>{researchIntro.lede}</p>
        </SectionHeading>

        <article className="border border-navy bg-bg-raised p-6 md:p-10">
          <p className="font-mono text-[11px] tracking-[0.2em] text-green uppercase">
            {featured.category}
          </p>
          <h3 className="font-serif mt-3 text-3xl text-ink md:text-4xl">
            {featured.title}
          </h3>
          <p className="mt-3 text-sm text-muted">
            {featured.author}
            {featured.credit ? ` · ${featured.credit}` : ""}
            {featured.date ? ` · ${featured.date}` : ""}
          </p>
          <p className="mt-6 max-w-3xl leading-8 text-muted">{featured.description}</p>
          {featured.href ? (
            <a
              href={featured.href}
              className="mt-6 inline-flex items-center gap-2 text-sm text-navy"
              rel="noreferrer"
              target="_blank"
            >
              <span className="link-underline">Read research</span>
              <span aria-hidden="true" className="card-arrow">
                →
              </span>
            </a>
          ) : (
            <p className="mt-6 font-mono text-[11px] tracking-wide text-muted">
              Link to the published note can be added when the URL is ready.
            </p>
          )}
        </article>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {rest.map((item) => (
            <article
              key={item.title}
              className="border border-line bg-bg p-6 transition-colors hover:border-navy md:p-7"
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                {item.category}
              </p>
              <h3 className="font-serif mt-3 text-2xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {item.author}
                {item.date ? ` · ${item.date}` : ""}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-navy"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="link-underline">Read research</span>
                  <span aria-hidden="true" className="card-arrow">
                    →
                  </span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
