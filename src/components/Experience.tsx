import { experiences } from "../data/constants";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading title="Experience">
          Where I&apos;ve been putting my skills to work.
        </SectionHeading>
        <ol className="relative border-l border-line">
          {experiences.map((exp) => (
            <li key={exp.id} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-surface bg-primary" />
              <p className="text-xs text-muted">{exp.date}</p>
              <div className="mt-2 flex items-center gap-3">
                <img
                  src={exp.img}
                  alt=""
                  className="size-10 rounded-md bg-bg object-contain p-1 ring-1 ring-line"
                />
                <div>
                  <h3 className="font-semibold leading-tight">{exp.role}</h3>
                  <p className="text-sm text-primary">{exp.company}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{exp.desc}</p>
              {exp.skills && (
                <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
                  {exp.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
