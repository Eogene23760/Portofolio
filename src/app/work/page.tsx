import type { Metadata } from "next";
import { projects } from "@/data/site";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product design and UI/UX case studies.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Work</h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/60">
        A selection of product design and UI/UX projects — from research and
        wireframes to polished, testable interfaces.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}

        {/* Coming soon banner */}
        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-foreground/15 bg-foreground/[0.02] p-6 text-center">
          <span className="rounded-full border border-foreground/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground/50">
            Coming soon
          </span>
          <h3 className="mt-4 text-lg font-semibold tracking-tight">
            Next project in the works
          </h3>
          <p className="mt-2 max-w-xs text-sm text-foreground/50">
            New case studies are on the way. Check back soon or reach out to see
            what I&apos;m building.
          </p>
        </div>
      </div>
    </section>
  );
}
