import { researchIntro } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

const curiosity = [
  {
    question: "How does a business actually create value?",
    body: "I keep coming back to the relationship between operating performance, capital allocation, and what the market ultimately assigns to a business.",
  },
  {
    question: "Which assumptions actually survive the financial statements?",
    body: "A valuation is only as useful as the assumptions underneath it. I am interested in the work between a company's filings, its operating drivers, and the model built from them.",
  },
  {
    question: "How should technology change financial analysis?",
    body: "Python, SQL, data modeling, and automation are tools I use to make financial analysis more systematic rather than technology for its own sake.",
  },
  {
    question: "What happens when someone disagrees with the thesis?",
    body: "Research becomes more useful when another person can challenge the assumptions, the model, and the conclusion. That is one reason I write and teach.",
  },
];

export function Curiosity() {
  return (
    <section id="thinking" className="border-t border-line py-20 md:py-28">
      <div className="site-shell">
        <SectionHeading
          number="02"
          eyebrow="Curiosity"
          title="What I’m trying to figure out"
        >
          <p>{researchIntro.lede}</p>
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

                <p className="mt-4 max-w-2xl leading-7 text-muted">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}