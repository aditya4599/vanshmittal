import { financeCards, verisignPitch } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Finance() {
  return (
    <section id="markets" className="border-t border-line bg-[#efe8dc] py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading number="04" eyebrow="Markets" title="Learning markets by doing">
          <p>
            A progression, not a performance record. Simulated work stays labeled
            as simulated.
          </p>
        </SectionHeading>

        <article className="border border-navy bg-bg-raised p-6 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-green uppercase">
                Case study
              </p>
              <h3 className="font-serif mt-2 text-3xl text-ink md:text-4xl">
                {verisignPitch.title}
              </h3>
            </div>
            <p className="font-serif text-2xl text-navy">{verisignPitch.place}</p>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                Field
              </dt>
              <dd className="mt-2 text-ink">{verisignPitch.field}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                Company
              </dt>
              <dd className="mt-2 text-ink">{verisignPitch.company}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                View
              </dt>
              <dd className="mt-2 font-mono text-green">{verisignPitch.view}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                Year
              </dt>
              <dd className="mt-2 text-ink">Spring 2025</dd>
            </div>
          </dl>

          <p className="mt-8 max-w-3xl leading-8 text-muted">{verisignPitch.body}</p>
        </article>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {financeCards.map((card) => (
            <article key={card.title} className="border border-line bg-bg p-6">
              <h3 className="font-serif text-2xl text-ink">{card.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-6 text-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
