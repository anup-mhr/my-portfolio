import type { Project } from "../types";

export default function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  const link = project.webapp ?? project.github;

  return (
    <article className="group flex flex-col">
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="aspect-[4/3] overflow-hidden rounded-lg bg-surface"
        aria-label={`View details for ${project.title}`}
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
      <p className="mt-4 text-xs text-muted">{project.date}</p>
      <h3 className="mt-1 font-semibold leading-snug">
        <button type="button" onClick={() => onSelect(project)} className="text-left hover:text-primary">
          {project.title}
        </button>
      </h3>
      <p className="mt-1 flex flex-wrap gap-x-2 text-xs text-muted">
        {project.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-2 text-xs text-primary hover:underline"
      >
        {project.webapp ? "Demo" : "Code"} <span aria-hidden="true">{"\u2192"}</span>
      </a>
    </article>
  );
}
