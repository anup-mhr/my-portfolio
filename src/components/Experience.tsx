import { experiences } from "../data/constants";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-surface py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Career" title="Experience">
          Where I&apos;ve been putting my skills to work.
        </SectionHeading>

        <ol className="flex flex-col gap-6">
          {experiences.map((exp, i) => {
            const current = /present/i.test(exp.date);
            return (
              <li
                key={exp.id}
                className="group relative grid gap-6 rounded-2xl bg-bg p-6 ring-1 ring-line transition-shadow hover:shadow-lg hover:shadow-black/5 md:grid-cols-[180px_1fr] md:p-8"
              >
                <div className="flex items-start gap-4 md:flex-col md:gap-3">
                  <span className="text-4xl font-bold leading-none text-line transition-colors group-hover:text-primary/20">
                    {String(experiences.length - i).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-medium text-muted">{exp.date}</p>
                    {current && (
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                        <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={exp.img}
                      alt={`${exp.company} logo`}
                      className="size-12 shrink-0 rounded-xl bg-bg object-contain p-1.5 ring-1 ring-line"
                    />
                    <div>
                      <h3 className="text-lg font-semibold leading-tight text-heading">{exp.role}</h3>
                      <p className="text-sm text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{exp.desc}</p>
                  {exp.skills && (
                    <ul className="flex flex-wrap gap-2" aria-label="Skills used">
                      {exp.skills.map((s) => (
                        <li
                          key={s}
                          className="rounded-md bg-surface px-2.5 py-1 text-xs text-heading"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
