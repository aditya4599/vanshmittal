type Props = {
  number: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  id?: string;
};

export function SectionHeading({ number, eyebrow, title, children }: Props) {
  return (
    <header className="mb-12 max-w-3xl md:mb-16">
      <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
        {number} / {eyebrow}
      </p>
      <h2 className="font-serif mt-3 text-3xl leading-[1.15] text-ink sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 max-w-2xl text-[1.05rem] leading-7 text-muted">
          {children}
        </div>
      ) : null}
    </header>
  );
}
