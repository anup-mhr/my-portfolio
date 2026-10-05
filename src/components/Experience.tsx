import { useState } from "react";
import { experiences } from "../data/constants";
import SectionHeading from "./SectionHeading";

const VISIBLE = 2;

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed">
      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
      {text}
    </li>
  );
}

function Highlights({ id, items }: { id: number; items: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const extra = items.slice(VISIBLE);
  const panelId = `exp-more-${id}`;

  return (
    <div className="mt-4">
      <ul className="flex flex-col gap-2.5">
        {items.slice(0, VISIBLE).map((h) => (
          <Bullet key={h} text={h} />
        ))}
      </ul>
      {extra.length > 0 && (
        <>
          <div
            id={panelId}
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
              expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-2.5 overflow-hidden pt-2.5" inert={!expanded}>
              {extra.map((h) => (
                <Bullet key={h} text={h} />
              ))}
            </ul>
          </div>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            {expanded ? "Show less" : `See ${extra.length} more`}
            <svg
              viewBox="0 0 24 24"
              className={`size-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function Experience() {
  return (
    <section id="experience" className="section-y bg-surface">
      <div className="container-x max-w-4xl">
        <SectionHeading eyebrow="Career" title="Experience">
          Where I&apos;ve been putting my skills to work.
        </SectionHeading>

        <div className="relative">
          <span aria-hidden="true" className="absolute left-[23px] top-0 hidden h-full w-px bg-line md:block" />
          <span
            aria-hidden="true"
            data-timeline-line
            className="absolute left-[23px] top-0 hidden h-full w-px bg-primary md:block"
          />

          <ol className="flex flex-col gap-8">
            {experiences.map((exp) => {
              const current = /present/i.test(exp.date);
              return (
                <li key={exp.id} data-reveal className="relative md:pl-16">
                  <div className="absolute left-0 top-6 hidden size-12 items-center justify-center rounded-full bg-bg ring-4 ring-surface md:flex">
                    {exp.img ? (
                      <img src={exp.img} alt="" className="size-8 object-contain" />
                    ) : (
                      <span className="text-sm font-bold text-primary">{initials(exp.company)}</span>
                    )}
                  </div>

                  <article className="rounded-2xl bg-bg p-6 ring-1 ring-line transition-shadow hover:shadow-lg hover:shadow-black/5 md:p-8">
                    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold leading-tight text-heading">{exp.role}</h3>
                        <p className="mt-1 text-sm text-primary">
                          {exp.company}
                          {exp.location && <span className="text-muted"> {"\u00B7"} {exp.location}</span>}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        {current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                            Current
                          </span>
                        )}
                        <p className="text-xs font-medium tabular-nums text-muted">{exp.date}</p>
                      </div>
                    </header>

                    <p className="mt-4 text-sm leading-relaxed text-muted">{exp.desc}</p>

                    {exp.highlights && <Highlights id={exp.id} items={exp.highlights} />}

                    {exp.skills && (
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Skills used">
                        {exp.skills.map((s) => (
                          <li key={s} className="rounded-md bg-surface px-2.5 py-1 text-xs text-heading">
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
