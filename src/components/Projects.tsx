import { useState } from "react";
import { projects } from "../data/constants";
import { PROJECT_CATEGORIES, type Project, type ProjectCategory } from "../types";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const INITIAL = 6;
type Filter = ProjectCategory | "All";

export default function Projects({ onSelect }: { onSelect: (p: Project) => void }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [expanded, setExpanded] = useState(false);

  const countFor = (cat: Filter) =>
    cat === "All" ? projects.length : projects.filter((p) => p.categories.includes(cat)).length;
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));
  const [featured, ...others] = filter === "All" ? filtered : [undefined, ...filtered];
  const visible = expanded ? others : others.slice(0, INITIAL);
  const hiddenCount = others.length - INITIAL;

  return (
    <section id="projects" className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow="Work" title="Projects">
          A mix of client work, side projects and experiments.
        </SectionHeading>

        <div
          role="group"
          aria-label="Filter projects"
          className="-mx-5 mb-10 overflow-x-auto px-5 md:mx-0 md:mb-12 md:px-0"
        >
          <div className="mx-auto flex w-fit gap-1 rounded-full bg-surface p-1">
            {(["All", ...PROJECT_CATEGORIES] as const)
              .filter((cat) => countFor(cat) > 0)
              .map((cat) => {
                const active = filter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(cat)}
                    className={`flex min-h-11 shrink-0 items-center gap-2 rounded-full px-4 text-xs font-medium transition-all ${
                      active ? "bg-bg text-heading shadow-sm" : "text-muted hover:text-heading"
                    }`}
                  >
                    {cat}
                    <span
                      className={`rounded-full px-1.5 text-[10px] tabular-nums ${active ? "bg-primary text-white" : "bg-line text-muted"}`}
                    >
                      {countFor(cat)}
                    </span>
                  </button>
                );
              })}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl bg-surface p-12 text-center text-muted">
            No projects in this category yet.
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {featured && <ProjectCard project={featured} onSelect={onSelect} featured />}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((project) =>
                project ? <ProjectCard key={project.id} project={project} onSelect={onSelect} /> : null,
              )}
            </div>
          </div>
        )}

        {hiddenCount > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              className="flex min-h-11 items-center gap-2 rounded-full border border-line px-6 text-sm font-medium text-heading transition-colors hover:border-primary hover:text-primary"
            >
              {expanded ? "Show less" : `Show ${hiddenCount} more`}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
