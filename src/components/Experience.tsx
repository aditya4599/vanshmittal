import { experiences } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading number="02" eyebrow="Experience" title="Where the work actually happened">
          <p>
            Four seats. Research I publish, a week on an IB floor, a valuation
            intern desk, and private equity diligence. None of them are a claim
            that the work is finished.
          </p>
        </SectionHeading>

        <ol className="relative border-l border-line pl-8 md:pl-12">
          {experiences.map((item) => (
            <li key={item.org} className="relative pb-14 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[37px] h-2.5 w-2.5 rounded-full bg-navy md:-left-[53px]"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  {item.dates}
                </p>
                <p className="text-sm text-muted">{item.place}</p>
              </div>
              <h3 className="font-serif mt-2 text-2xl text-ink md:text-[1.85rem]">
                {item.org}
              </h3>
              <p className="mt-1 text-sm text-navy">{item.role}</p>
              <p className="mt-4 max-w-2xl leading-7 text-muted">{item.summary}</p>
              <details className="group mt-5 max-w-2xl">
                <summary className="cursor-pointer list-none text-sm text-navy">
                  <span className="link-underline">Read more</span>
                  <span className="ml-2 text-muted group-open:hidden">+</span>
                  <span className="ml-2 hidden text-muted group-open:inline">–</span>
                </summary>
                <div className="mt-4 space-y-4 text-[0.98rem] leading-7 text-ink">
                  {item.details.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
