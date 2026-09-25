import { teaching } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Teaching() {
  return (
    <section id="teaching" className="border-t border-line bg-bg-raised py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading number="05" eyebrow="Teaching" title={teaching.lede} />

        <div className="grid gap-4 md:grid-cols-2">
          {teaching.roles.map((item) => (
            <article key={item.org} className="border border-line bg-bg p-6 md:p-8">
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                {item.dates}
              </p>
              <h3 className="font-serif mt-3 text-2xl leading-snug text-ink">
                {item.org}
              </h3>
              <p className="mt-2 text-sm text-navy">{item.role}</p>
              <p className="mt-5 leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
