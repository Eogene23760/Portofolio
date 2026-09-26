import Link from "next/link";
import { site, projects } from "@/data/site";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
        <p className="text-sm font-medium text-foreground/50">{site.location}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-4 text-xl text-foreground/70 sm:text-2xl">{site.role}</p>
        <p className="mt-6 max-w-2xl text-lg text-foreground/60">{site.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View Work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            Let&apos;s work together
          </Link>
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-1 text-sm text-foreground/60">
              A few product design projects I&apos;m proud of.
            </p>
          </div>
          <Link
            href="/work"
            className="hidden text-sm text-foreground/60 underline-offset-4 hover:text-foreground hover:underline sm:block"
          >
            All projects →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <Link
          href="/work"
          className="mt-8 block text-sm text-foreground/60 underline-offset-4 hover:text-foreground hover:underline sm:hidden"
        >
          All projects →
        </Link>
      </section>

    </>
  );
}
