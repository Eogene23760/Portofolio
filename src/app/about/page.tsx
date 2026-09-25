import type { Metadata } from "next";
import Link from "next/link";
import { site, about } from "@/data/site";
import Gallery from "@/components/Gallery";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "About",
  description: about.paragraphs[0],
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">About</h1>

      <div className="mt-10 grid gap-10 sm:grid-cols-[200px_1fr] sm:items-start">
        <div className="mx-auto w-40 sm:mx-0 sm:w-full">
          <Placeholder
            label="Photo"
            color="#334155"
            ratio="portrait"
            className="rounded-2xl"
          />
        </div>

        <div className="space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-foreground/70">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Skills & tools */}
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        <div>
          <h2 className="text-xs uppercase tracking-wide text-foreground/40">
            Skills
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-foreground/70">
            {about.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-wide text-foreground/40">
            Tools
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-foreground/70">
            {about.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-wide text-foreground/40">
            Education
          </h2>
          <p className="mt-3 text-sm text-foreground/70">{about.education}</p>
        </div>
      </div>

      {/* Photo gallery section */}
      <div className="mt-16 border-t border-black/5 pt-12 dark:border-white/10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Photography</h2>
            <p className="mt-1 text-sm text-foreground/60">
              A creative outlet outside of design.
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-sm text-foreground/60 underline-offset-4 hover:text-foreground hover:underline"
          >
            Open gallery →
          </Link>
        </div>
        <Gallery limit={6} />
      </div>

      {/* Contact CTA */}
      <div className="mt-16 rounded-3xl border border-black/5 p-8 text-center dark:border-white/10">
        <p className="text-foreground/70">
          Interested in working together or just want to say hi?
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-4 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {site.email}
        </a>
      </div>
    </section>
  );
}
