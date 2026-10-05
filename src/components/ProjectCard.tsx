import type { Project } from "../types";

export default function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-bg ring-1 ring-line transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-bg/90 px-2.5 py-1 text-[11px] font-medium text-heading backdrop-blur">
          {project.categories[0]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs text-muted">{project.date}</p>
        <h3 className="font-semibold leading-snug text-heading">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-left after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.title}
          </button>
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label="Tech stack">
          {project.tags.slice(0, 4).map((t) => (
            <li key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] text-heading">
              {t}
            </li>
          ))}
          {project.tags.length > 4 && (
            <li className="px-1 py-0.5 text-[11px] text-muted">+{project.tags.length - 4}</li>
          )}
        </ul>
        <div className="relative z-10 flex items-center gap-4 border-t border-line pt-3 text-xs font-medium">
          {project.webapp && (
            <a href={project.webapp} target="_blank" rel="noreferrer" className="text-primary hover:underline">
              Live demo <span aria-hidden="true">{"\u2197"}</span>
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-heading">
            Source <span aria-hidden="true">{"\u2197"}</span>
          </a>
          <span className="ml-auto text-muted transition-colors group-hover:text-primary">
            Details <span aria-hidden="true">{"\u2192"}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
