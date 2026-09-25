import { contact, hero, person } from "@/data/site";
import { Sparkline } from "./Sparkline";

export function Hero() {
  const hasLinkedin = Boolean(contact.linkedin);

  return (
    <section
      id="top"
      className="site-shell grid items-end gap-12 pb-20 pt-14 md:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.85fr)] md:gap-16 md:pb-28 md:pt-20"
    >
      <div>
        <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
          {person.location}
        </p>
        <h1 className="font-serif mt-5 text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-[4rem]">
          {person.name}
        </h1>
        <p className="mt-4 font-mono text-[12px] tracking-[0.14em] text-navy uppercase">
          {person.field}
        </p>
        <div className="hero-rule mt-7 h-px w-24 bg-navy" />
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted">{hero.lede}</p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a href="#research" className="inline-flex items-center gap-2 text-navy">
            <span className="link-underline">Research</span>
            <span aria-hidden="true" className="card-arrow">
              →
            </span>
          </a>
          {hasLinkedin ? (
            <a
              href={contact.linkedin}
              className="inline-flex items-center gap-2 text-navy"
              rel="noreferrer"
              target="_blank"
            >
              <span className="link-underline">LinkedIn</span>
              <span aria-hidden="true" className="card-arrow">
                →
              </span>
            </a>
          ) : null}
        </div>
      </div>
      <div className="reveal">
        <Sparkline />
      </div>
    </section>
  );
}
