"use client";

import { useEffect, useState } from "react";
import { contact, nav, person } from "@/data/site";

const sectionIds = [
  "about",
  "experience",
  "research",
  "learning",
  "beyond",
  "recal",
  "contact",
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const [scrolled, setScrolled] = useState(false);
  const hasLinkedin = Boolean(contact.linkedin);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-line bg-[color-mix(in_srgb,var(--bg)_92%,white)]"
          : "border-transparent bg-bg/80"
      }`}
    >
      <div className="site-shell flex h-16 items-center justify-between gap-6">
        <a href="#top" className="font-serif shrink-0 text-[1.15rem] tracking-tight text-ink">
          {person.name}
        </a>

        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13px] tracking-wide transition-colors ${
                active === item.href ? "text-navy" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {hasLinkedin ? (
          <a
            href={contact.linkedin}
            className="link-underline hidden text-[13px] text-navy lg:inline"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        ) : (
          <span className="hidden w-4 lg:block" aria-hidden="true" />
        )}

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="font-mono text-sm">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-bg lg:hidden">
          <nav className="site-shell flex flex-col gap-1 py-6" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-lg text-ink"
              >
                {item.label}
              </a>
            ))}
            {hasLinkedin ? (
              <a
                href={contact.linkedin}
                className="pt-4 text-navy"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
