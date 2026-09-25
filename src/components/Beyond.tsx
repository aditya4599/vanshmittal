import { beyond } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Beyond() {
  return (
    <section id="beyond" className="border-t border-line py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading number="05" eyebrow="Beyond" title="Beyond finance">
          <p>
            Markets take a lot of my attention. They are not the whole picture.
            These are simply true.
          </p>
        </SectionHeading>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {beyond.map((item, index) => (
            <article
              key={item.name}
              className="beyond-card min-h-[200px] border border-line p-5"
            >
              <p className="font-mono text-[11px] text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif mt-8 text-2xl leading-tight text-ink">
                {item.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">{item.hint}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
