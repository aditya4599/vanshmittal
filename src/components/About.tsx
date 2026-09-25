import { about, education } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="border-t border-line py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading number="01" eyebrow="Introduction" title={about.title} />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)] lg:gap-16">
          <div className="space-y-6 text-[1.05rem] leading-8 text-ink">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <aside className="space-y-8 lg:pt-1">
            <blockquote className="font-serif border-l-2 border-navy pl-5 text-2xl leading-snug text-navy">
              {about.pullQuote}
            </blockquote>

            <div className="border border-line bg-bg-raised p-6">
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                At a glance
              </p>
              <p className="mt-3 font-medium text-ink">{education.school}</p>
              <p className="mt-1 text-sm leading-6 text-muted">
                {education.colleges}
                <br />
                {education.degree}
              </p>
              <p className="mt-4 font-mono text-xs text-muted">
                GPA {education.gpa} · {education.expected}
              </p>
            </div>

            <ul className="space-y-3 text-sm leading-6 text-muted">
              {education.honors.map((item) => (
                <li key={item} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
