import type { Project } from "../types";
import ProjectImage from "./ProjectImage";

export default function ProjectCard({
  project,
  onSelect,
  featured = false,
}: {
  project: Project;
  onSelect: (p: Project) => void;
  featured?: boolean;
}) {
  const tagCount = featured ? 6 : 4;
  return (
    <article
      data-reveal
      className={`group relative flex overflow-hidden rounded-2xl bg-bg ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:ring-primary/30 ${
        featured ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden ${featured ? "aspect-[16/10] md:aspect-auto md:w-[55%]" : "aspect-[16/10]"}`}
      >
        <ProjectImage project={project} className="group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-bg/90 px-2.5 py-1 text-[11px] font-medium text-heading backdrop-blur">
          {featured ? "Featured" : project.categories[0]}
        </span>
      </div>

      <div className={`flex flex-1 flex-col gap-3 ${featured ? "p-6 md:p-10" : "p-5"}`}>
        <p className="text-xs tabular-nums text-muted">{project.date}</p>
        <h3
          className={`font-semibold leading-snug tracking-tight text-heading ${featured ? "text-xl md:text-2xl" : ""}`}
        >
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-left after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </button>
        </h3>
        <p className={`text-sm leading-relaxed text-muted ${featured ? "line-clamp-4 md:text-base" : "line-clamp-2"}`}>
          {project.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label="Tech stack">
          {project.tags.slice(0, tagCount).map((t) => (
            <li key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] text-heading">
              {t}
            </li>
          ))}
          {project.tags.length > tagCount && (
            <li className="px-1 py-0.5 text-[11px] text-muted">+{project.tags.length - tagCount}</li>
          )}
        </ul>
        <div className="relative z-10 flex items-center gap-1 border-t border-line pt-2 text-xs font-medium">
          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center px-2 text-primary hover:underline"
            >
              Live demo <span aria-hidden="true">{"\u00a0\u2197"}</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center px-2 text-muted hover:text-heading"
          >
            Source <span aria-hidden="true">{"\u00a0\u2197"}</span>
          </a>
          <span aria-hidden="true" className="ml-auto px-2 text-muted transition-colors group-hover:text-primary">
            Details {"\u2192"}
          </span>
        </div>
      </div>
    </article>
  );
}
