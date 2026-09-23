import { skills } from "../data/constants";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative z-[1] flex flex-col items-center justify-center">
      <div className="relative flex w-full max-w-[1100px] flex-col items-center justify-between gap-3">
        <SectionHeading title="Skills">
          Here are some of my skills on which I have been working on.
        </SectionHeading>
        <div className="mt-[30px] flex w-full flex-wrap justify-center gap-[30px]">
          {skills.map((group) => (
            <div
              key={group.title}
              className="w-full max-w-[500px] rounded-2xl border-[0.1px] border-primary bg-card px-9 py-[18px] shadow-glow max-md:max-w-[400px] max-md:py-2.5 max-[500px]:max-w-[330px]"
            >
              <h3 className="mb-5 text-center text-[28px] font-semibold text-muted">
                {group.title}
              </h3>
              <ul className="mb-5 flex flex-wrap justify-center gap-3">
                {group.skills.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-center gap-2 rounded-xl border border-fg/50 px-4 py-3 text-fg/50 max-md:px-3 max-md:py-2 max-md:text-sm max-[500px]:py-1.5"
                  >
                    <img src={item.image} alt="" loading="lazy" className="size-6" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
