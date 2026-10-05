import { useEffect } from "react";
import type { Project } from "../types";
import { CloseIcon } from "./icons";

export default function ProjectDetails({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-fg/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-bg p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-surface text-lg hover:bg-line"
        >
          <CloseIcon />
        </button>
        <img src={project.image} alt="" className="aspect-video w-full rounded-lg object-cover" />
        <p className="mt-5 text-xs text-muted">{project.date}</p>
        <h2 id="project-title" className="mt-1 text-2xl font-semibold">
          {project.title}
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full bg-surface px-3 py-1 text-xs">
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

        {project.member && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold">Team</h3>
            <ul className="mt-3 flex flex-wrap gap-4">
              {project.member.map((m) => (
                <li key={m.name} className="flex items-center gap-2 text-sm">
                  <img src={m.img} alt="" className="size-9 rounded-full object-cover" />
                  {m.linkedin ? (
                    <a href={m.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">
                      {m.name}
                    </a>
                  ) : (
                    m.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-md py-2.5 text-center text-sm font-medium ring-1 ring-line hover:ring-primary"
          >
            View Code
          </a>
          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-md bg-primary py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
