import type { Project } from "../types";

export default function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="flex h-[400px] w-[330px] cursor-pointer flex-col gap-3.5 overflow-hidden rounded-[10px] bg-card px-5 py-[26px] text-left shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-110"
    >
      <img
        src={project.image}
        alt=""
        loading="lazy"
        className="h-[180px] w-full shrink-0 rounded-[10px] bg-white object-cover shadow-[0_0_16px_2px_rgba(0,0,0,0.3)]"
      />
      <div className="mt-1 flex w-full flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[10px] bg-primary/[.08] px-2 py-0.5 text-xs text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex w-full flex-col px-0.5">
        <h3 className="line-clamp-2 text-xl font-semibold text-muted">{project.title}</h3>
        <p className="ml-0.5 text-xs text-muted/50 max-md:text-[10px]">{project.date}</p>
        <p className="mt-2 line-clamp-3 text-muted/60">{project.description}</p>
      </div>
      {project.member && (
        <div className="flex items-center pl-2.5">
          {project.member.map((member) => (
            <img
              key={member.name}
              src={member.img}
              alt={member.name}
              className="-ml-2.5 size-[38px] rounded-full border-[3px] border-card bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]"
            />
          ))}
        </div>
      )}
    </button>
  );
}
