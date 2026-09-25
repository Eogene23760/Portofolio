import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-black/5 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-foreground/60">{site.role}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-black/5 px-6 py-4 dark:border-white/10">
        <p className="mx-auto max-w-6xl text-xs text-foreground/40">
          © {year} {site.name}. Built with Next.js &amp; Tailwind CSS.{" "}
          <Link href="/contact" className="underline-offset-2 hover:underline">
            Get in touch
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
