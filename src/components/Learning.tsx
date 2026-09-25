import { learning } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Learning() {
  return (
    <section id="learning" className="border-t border-line py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading number="04" eyebrow="Learning" title="What I’m learning">
          <p>
            I am building, not claiming mastery. This is the stack I am currently
            inside.
          </p>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-3">
          {learning.map((group) => (
            <article key={group.category} className="border border-line p-6 md:p-7">
              <p className="font-mono text-[11px] tracking-[0.2em] text-navy uppercase">
                {group.category}
              </p>
              <p className="mt-2 text-sm text-muted">{group.tone}</p>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-line pt-3 text-ink first:border-t-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
