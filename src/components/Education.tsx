import { education } from "../data/constants";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading title="Education" />
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <article key={edu.id} className="rounded-xl bg-bg p-6 ring-1 ring-line">
              <div className="flex items-center gap-4">
                <img src={edu.img} alt="" className="size-12 rounded-md object-contain" />
                <div>
                  <h3 className="font-semibold leading-tight">{edu.school}</h3>
                  <p className="text-xs text-muted">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium">{edu.degree}</p>
              <p className="mt-1 text-sm text-primary">{edu.grade}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{edu.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
