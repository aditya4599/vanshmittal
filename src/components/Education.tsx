import { certifications, clubs, education, skills, teaching } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="border-t border-line py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading number="06" eyebrow="Background" title="Education, teaching, and the tools I use">
          <p>{teaching.lede}</p>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2">
          {teaching.roles.map((item) => (
            <article key={item.org} className="border border-line bg-bg-raised p-6 md:p-8">
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

        <div className="mt-16 grid gap-10 border-t border-line pt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
              Indiana University
            </p>
            <h3 className="font-serif mt-3 text-3xl leading-snug text-ink">
              {education.degree}
            </h3>
            <p className="mt-3 text-muted">
              {education.colleges}
              <br />
              {education.city}
            </p>
            <p className="mt-5 font-mono text-sm text-navy">
              GPA {education.gpa} · {education.expected}
            </p>

            <p className="mt-10 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
              Coursework
            </p>
            <ul className="mt-4 space-y-3 text-ink">
              {education.coursework.map((course) => (
                <li key={course} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
              Honors
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              {education.honors.map((item) => (
                <li key={item} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            Clubs
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            How I have been learning markets in public, week after week — not
            internships, and not a track record.
          </p>
          <div className="mt-8 grid gap-px bg-line md:grid-cols-2">
            {clubs.map((club) => (
              <article key={club.name} className="bg-bg p-6">
                <h3 className="text-ink">{club.name}</h3>
                <p className="mt-1 font-mono text-[11px] text-muted">{club.role}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{club.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            Tools
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="font-mono text-[11px] tracking-[0.16em] text-navy uppercase">
                  {group.category}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 font-mono text-xs leading-6 tracking-wide text-muted">
          Also: {certifications.join(" · ")}
        </p>
      </div>
    </section>
  );
}
