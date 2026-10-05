import { Bio, skills, stats } from "../data/constants";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="About" title="Who am I?" />
      <div data-reveal className="mx-auto -mt-6 max-w-3xl text-center leading-relaxed">
        <p>{Bio.description}</p>
        <p className="mt-3 font-semibold">
          {"\u201C"} Always learning, always shipping. {"\u201D"}
        </p>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} data-reveal className="flex flex-col-reverse rounded-2xl bg-surface p-5 text-center">
            <dt className="mt-1 text-xs text-muted">{s.label}</dt>
            <dd className="text-3xl font-bold text-primary md:text-4xl">
              <span data-count={s.value}>{s.value}</span>
              {s.suffix}
            </dd>
          </div>
        ))}
      </dl>

      <p id="skills" className="mt-16 text-center text-sm text-primary">
        Here are the tools I work with
      </p>

      <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} data-reveal>
            <h3 className="mb-4 border-b border-line pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full bg-surface py-1.5 pl-1.5 pr-3 text-sm transition-colors hover:bg-primary/10"
                >
                  <img
                    src={skill.image}
                    alt=""
                    loading="lazy"
                    className="size-6 rounded-full bg-bg object-contain p-0.5"
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
