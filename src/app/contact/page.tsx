import type { Metadata } from "next";
import { site } from "@/data/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Get in touch
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/60">
        Have a project, role, or collaboration in mind? Send a message or reach
        out directly.
      </p>

      <div className="mt-12 grid gap-12 sm:grid-cols-[1fr_240px]">
        <ContactForm />

        <aside className="space-y-6">
          <div>
            <h2 className="text-xs uppercase tracking-wide text-foreground/40">
              Email
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-sm underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-wide text-foreground/40">
              Social
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm">
              <li>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  Instagram ({site.instagramHandle})
                </a>
              </li>
              <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-wide text-foreground/40">
              Based in
            </h2>
            <p className="mt-2 text-sm text-foreground/70">{site.location}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
