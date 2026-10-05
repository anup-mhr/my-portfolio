import { useState } from "react";
import { projects } from "../data/constants";
import { PROJECT_CATEGORIES, type Project, type ProjectCategory } from "../types";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const INITIAL = 4;

export default function Projects({ onSelect }: { onSelect: (p: Project) => void }) {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const [expanded, setExpanded] = useState(false);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));
  const visible = expanded ? filtered : filtered.slice(0, INITIAL);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title="Projects">
        A mix of client work, side projects and experiments.
      </SectionHeading>

      <div role="tablist" className="mb-10 flex flex-wrap justify-center gap-2">
        {(["All", ...PROJECT_CATEGORIES] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => {
              setFilter(cat);
              setExpanded(false);
            }}
            className={`rounded-full px-4 py-1.5 text-xs transition-colors ${
              filter === cat ? "bg-fg text-white" : "bg-surface text-muted hover:text-fg"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={onSelect} />
        ))}
      </div>

      {filtered.length > INITIAL && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="group flex items-center gap-3 text-sm"
          >
            <span
              aria-hidden="true"
              className={`flex size-7 items-center justify-center rounded-full bg-surface transition-transform group-hover:bg-line ${
                expanded ? "rotate-180" : ""
              }`}
            >
              <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
