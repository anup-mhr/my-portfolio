import { education } from "../data/constants";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-y bg-surface">
      <div className="container-x max-w-5xl">
        <SectionHeading eyebrow="Learning" title="Education">
          The foundations behind the work.
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <article
              data-reveal
              key={edu.id}
              className="group flex flex-col gap-5 rounded-2xl bg-bg p-7 ring-1 ring-line transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="flex items-start justify-between gap-4">
                <img
                  src={edu.img}
                  alt={`${edu.school} logo`}
                  className="size-14 rounded-xl bg-bg object-contain p-1 ring-1 ring-line"
                />
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">
                  {edu.date}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold leading-snug text-heading">{edu.degree}</h3>
                <p className="text-sm text-muted">{edu.school}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted">{edu.desc}</p>
              <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                <span className="text-xs uppercase tracking-wider text-muted">Grade</span>
                <span className="text-sm font-semibold text-primary">{edu.grade}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
