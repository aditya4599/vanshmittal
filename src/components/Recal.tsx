import { recal } from "@/data/site";

export function Recal() {
  return (
    <section id="recal" className="border-t border-line bg-navy py-20 text-[color:#f4efe6] md:py-28">
      <div className="site-shell">
        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="font-mono text-[11px] tracking-[0.22em] text-white/55 uppercase">
            07 / Recal
          </p>
          <h2 className="font-serif mt-3 text-3xl leading-[1.15] sm:text-4xl md:text-[2.6rem]">
            Why Recal?
          </h2>
        </header>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <div className="space-y-6 text-[1.05rem] leading-8 text-white/80">
            {recal.why.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div>
            <h3 className="font-mono text-[11px] tracking-[0.2em] text-white/55 uppercase">
              What I would bring
            </h3>
            <ul className="mt-6 space-y-6">
              {recal.bring.map((item) => (
                <li key={item.title} className="border-t border-white/15 pt-5">
                  <p className="font-serif text-xl">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
