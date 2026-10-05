import { skills } from "../data/constants";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading title="Who am I?" />
      <div className="mx-auto -mt-6 max-w-3xl text-center leading-relaxed">
        <p>
          Hi, I&apos;m Anup Maharjan, a developer who loves understanding how the
          web works under the hood. I&apos;ve spent the last few years building
          backends, realtime systems and polished interfaces, from internship
          projects to production work at Palm Mind Technologies.
        </p>
        <p className="mt-3 font-semibold">
          {"\u201C"} Always learning, always shipping. {"\u201D"}
        </p>
      </div>

      <p id="skills" className="mt-12 text-center text-sm text-primary">
        Here are some of the tools I work with
      </p>

      <div className="mt-8 grid gap-10 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 border-b border-line pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full bg-surface py-1.5 pl-1.5 pr-3 text-sm"
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
