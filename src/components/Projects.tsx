import { useState } from "react";
import { projects } from "../data/constants";
import { PROJECT_CATEGORIES, type Project, type ProjectCategory } from "../types";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

type Filter = "all" | ProjectCategory;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  ...PROJECT_CATEGORIES.map((category) => ({ value: category, label: category })),
];

export default function Projects({ onSelect }: { onSelect: (project: Project) => void }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible =
    filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section
      id="projects"
      className="relative z-[1] flex flex-col items-center justify-center bg-[linear-gradient(343.07deg,rgba(132,59,206,0.06)_5.71%,rgba(132,59,206,0)_64.83%)]"
    >
      <div className="relative flex w-full max-w-[1350px] flex-col items-center justify-between gap-3 px-4 pt-2.5 pb-[100px]">
        <SectionHeading title="Projects">
          I have worked on a wide range of projects. From web apps to android apps. Here are
          some of my projects.
        </SectionHeading>

        <div
          role="group"
          aria-label="Filter projects"
          className="my-[22px] flex divide-x-[1.5px] divide-primary rounded-xl border-[1.5px] border-primary font-medium text-primary max-md:text-xs"
        >
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
              className={`cursor-pointer px-[18px] py-2 transition-colors first:rounded-l-[10px] last:rounded-r-[10px] hover:bg-primary/10 max-md:px-2 max-md:py-1.5 ${
                filter === value ? "bg-primary/[.125]" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-7">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
