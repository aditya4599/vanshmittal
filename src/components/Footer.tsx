import { contact, person } from "@/data/site";

export function Footer() {
  const hasLinkedin = Boolean(contact.linkedin);

  return (
    <footer id="contact" className="border-t border-line py-16 md:py-20">
      <div className="site-shell grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-end">
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            08 / Contact
          </p>
          <h2 className="font-serif mt-3 text-3xl text-ink md:text-4xl">Let’s talk.</h2>
          <p className="mt-3 text-muted">
            {person.name}
            <br />
            {person.location}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a href={`mailto:${contact.email}`} className="w-fit text-navy">
            <span className="link-underline">{contact.email}</span>
          </a>
          <a href={contact.phoneHref} className="w-fit text-navy">
            <span className="link-underline">{contact.phone}</span>
          </a>
          {hasLinkedin ? (
            <a
              href={contact.linkedin}
              className="inline-flex w-fit items-center gap-2 text-navy"
              rel="noreferrer"
              target="_blank"
            >
              <span className="link-underline">LinkedIn</span>
              <span aria-hidden="true" className="card-arrow">
                →
              </span>
            </a>
          ) : (
            <p className="text-muted">LinkedIn</p>
          )}
        </div>
      </div>
    </footer>
  );
}
