import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";
import Placeholder from "@/components/Placeholder";

const colors = ["#312e81", "#134e4a", "#1e293b"];

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) notFound();

  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-24">
      <Link
        href="/work"
        className="text-sm text-foreground/60 underline-offset-4 hover:text-foreground hover:underline"
      >
        ← Back to Work
      </Link>

      {/* Header */}
      <header className="mt-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-foreground/60">{project.summary}</p>
      </header>

      {/* Cover */}
      {project.cover ? (
        <div className="mt-8 flex items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-foreground/[0.03] p-6 sm:p-10 dark:border-white/10">
          <Image
            src={project.cover}
            alt={project.title}
            width={440}
            height={956}
            priority
            className="max-h-[70vh] w-auto rounded-xl object-contain shadow-sm"
          />
        </div>
      ) : (
        <Placeholder
          label={project.title}
          color={colors[index % colors.length]}
          ratio="wide"
          className="mt-8 rounded-2xl"
        />
      )}

      {/* Overview */}
      <dl className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-black/5 p-6 sm:grid-cols-4 dark:border-white/10">
        <div>
          <dt className="text-xs uppercase tracking-wide text-foreground/40">Role</dt>
          <dd className="mt-1 text-sm">{project.role}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-foreground/40">Duration</dt>
          <dd className="mt-1 text-sm">{project.duration}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-foreground/40">Client</dt>
          <dd className="mt-1 text-sm">{project.client}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-foreground/40">Tools</dt>
          <dd className="mt-1 text-sm">{project.tools.join(", ")}</dd>
        </div>
      </dl>

      {/* Problem & Goals */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">The Problem</h2>
        <p className="mt-3 text-foreground/70">{project.problem}</p>

        <h3 className="mt-8 text-lg font-semibold tracking-tight">Goals</h3>
        <ul className="mt-3 space-y-2">
          {project.goals.map((goal) => (
            <li key={goal} className="flex gap-3 text-foreground/70">
              <span aria-hidden className="mt-1 text-foreground/30">›</span>
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Process</h2>
        <ol className="mt-4 space-y-4">
          {project.process.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-black/5 p-5 dark:border-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/5 text-xs font-medium text-foreground/60">
                  {i + 1}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm text-foreground/60">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Outcome */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Outcome</h2>
        <p className="mt-3 text-foreground/70">{project.outcome}</p>
        {project.prototypeUrl && (
          <a
            href={project.prototypeUrl}
            className="mt-4 inline-block rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            View prototype →
          </a>
        )}
      </section>

      {/* Design screenshots */}
      {project.images && project.images.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Design</h2>
          {(() => {
            // Kelompokkan gambar berdasarkan caption (mis. Customer/Vendor app).
            const groups = new Map<string, typeof project.images>();
            for (const img of project.images!) {
              const key = img.caption ?? "";
              if (!groups.has(key)) groups.set(key, []);
              groups.get(key)!.push(img);
            }
            return [...groups.entries()].map(([caption, imgs]) => (
              <div key={caption || "default"} className="mt-6">
                {caption && (
                  <h3 className="mb-3 text-sm font-medium text-foreground/60">
                    {caption}
                  </h3>
                )}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {imgs!.map((img, i) => (
                    <figure
                      key={img.src}
                      className="overflow-hidden rounded-2xl border border-black/5 bg-foreground/[0.02] dark:border-white/10"
                    >
                      <Image
                        src={img.src}
                        alt={img.caption ?? `${project.title} design ${i + 1}`}
                        width={440}
                        height={956}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            ));
          })()}
        </section>
      )}

      {/* Next project */}
      <nav className="mt-16 border-t border-black/5 pt-8 dark:border-white/10">
        <p className="text-xs uppercase tracking-wide text-foreground/40">
          Next project
        </p>
        <Link
          href={`/work/${next.slug}`}
          className="mt-2 inline-block text-2xl font-semibold tracking-tight underline-offset-4 hover:underline"
        >
          {next.title} →
        </Link>
      </nav>
    </article>
  );
}
