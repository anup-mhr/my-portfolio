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
  const visible = expanded ? filtered : filtered.slice(0, INITIAL);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Work" title="Projects">
        A mix of client work, side projects and experiments.
      </SectionHeading>

      <div
        role="tablist"
        aria-label="Filter projects"
        className="mx-auto mb-12 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-surface p-1"
      >
        {(["All", ...PROJECT_CATEGORIES] as const)
          .filter((cat) => countFor(cat) > 0)
          .map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setFilter(cat);
                  setExpanded(false);
                }}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  active ? "bg-bg text-heading shadow-sm" : "text-muted hover:text-heading"
                }`}
              >
                {cat}
                <span
                  className={`rounded-full px-1.5 text-[10px] ${active ? "bg-primary text-white" : "bg-line text-muted"}`}
                >
                  {countFor(cat)}
                </span>
              </button>
            );
          })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={onSelect} />
        ))}
      </div>

      {filtered.length > INITIAL && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="flex items-center gap-2 rounded-full border border-line px-6 py-2.5 text-sm font-medium text-heading transition-colors hover:border-primary hover:text-primary"
          >
            {expanded ? "Show less" : `Show all ${filtered.length} projects`}
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
    </section>
  );
}
