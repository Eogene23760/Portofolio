import Link from "next/link";
import Image from "next/image";
import Placeholder from "./Placeholder";
import type { Project } from "@/data/site";

const colors = ["#312e81", "#134e4a", "#1e293b"];

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-black/5 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
    >
      <div className="flex aspect-video items-center justify-center overflow-hidden bg-foreground/[0.03]">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            width={440}
            height={956}
            className="h-full w-auto object-contain py-4 transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <Placeholder
            label={project.title}
            color={colors[index % colors.length]}
            ratio="video"
            className="h-full transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="p-5">
        <div className="mb-2 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-foreground/60">{project.summary}</p>
      </div>
    </Link>
  );
}
