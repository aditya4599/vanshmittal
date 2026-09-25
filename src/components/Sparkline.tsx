export function Sparkline() {
  return (
    <figure className="border border-line bg-bg-raised p-5">
      <figcaption className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
        Research sketch · not a performance chart
      </figcaption>
      <svg
        viewBox="0 0 220 88"
        className="mt-4 h-24 w-full"
        role="img"
        aria-label="Decorative line drawing suggesting a research path, not market data."
      >
        <line
          x1="0"
          y1="70"
          x2="220"
          y2="70"
          stroke="currentColor"
          className="text-line"
          strokeWidth="1"
        />
        <path
          className="sparkline-path"
          d="M4 62 C 28 58, 36 44, 54 46 S 84 22, 104 28 S 140 48, 158 36 S 196 18, 216 24"
          fill="none"
          stroke="#1c2c4a"
          strokeWidth="1.4"
        />
        <circle cx="216" cy="24" r="2.4" fill="#1c2c4a" />
      </svg>
      <dl className="mt-2 grid grid-cols-3 gap-2 font-mono text-[11px] text-muted">
        <div>
          <dt className="text-[10px] tracking-widest uppercase">Lens</dt>
          <dd className="mt-1 text-ink">DCF</dd>
        </div>
        <div>
          <dt className="text-[10px] tracking-widest uppercase">Structure</dt>
          <dd className="mt-1 text-ink">3-stmt</dd>
        </div>
        <div>
          <dt className="text-[10px] tracking-widest uppercase">Check</dt>
          <dd className="mt-1 text-ink">Comps</dd>
        </div>
      </dl>
    </figure>
  );
}
