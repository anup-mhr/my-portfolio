import { useEffect, useRef } from "react";
import type { Project } from "../types";
import { CloseIcon } from "./icons";
import ProjectImage from "./ProjectImage";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectDetails({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-fg/50 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        className="relative max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-bg p-5 shadow-2xl sm:rounded-2xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-bg/90 text-lg shadow ring-1 ring-line backdrop-blur hover:bg-surface"
        >
          <CloseIcon />
        </button>
        <div className="aspect-video overflow-hidden rounded-xl">
          <ProjectImage project={project} />
        </div>
        <p className="mt-6 text-xs tabular-nums text-muted">{project.date}</p>
        <h2 id="project-title" className="mt-1 text-2xl font-semibold tracking-tight text-heading">
          {project.title}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full bg-surface px-3 py-1 text-xs text-heading">
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-[65ch] leading-relaxed text-muted">{project.description}</p>

        {project.member && (
          <div className="mt-7">
            <h3 className="text-sm font-semibold text-heading">Team</h3>
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

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 flex-1 items-center justify-center rounded-lg text-sm font-medium ring-1 ring-line hover:ring-primary"
          >
            View Code
          </a>
          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 flex-1 items-center justify-center rounded-lg bg-primary text-sm font-medium text-white hover:bg-primary-dark"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
