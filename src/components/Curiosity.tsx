import { curiosity } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Curiosity() {
  return (
    <section id="thinking" className="border-t border-line py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading
          number="02"
          eyebrow="Curiosity"
          title="What I’m trying to figure out"
        >
          <p>
            Credentials are easy to list. These are the questions I keep returning
            to when I am actually working.
          </p>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2">
          {curiosity.map((item, index) => (
            <article
              key={item.question}
              className="border border-line bg-bg-raised p-6 md:p-8"
            >
              <p className="font-mono text-[11px] text-muted">
                0{index + 1}
              </p>
              <div>
                <h3 className="font-serif mt-3 text-2xl leading-snug text-ink">
                  {item.question}
                </h3>
                <p className="mt-4 max-w-2xl leading-7 text-muted">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
