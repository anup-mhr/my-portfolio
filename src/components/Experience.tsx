import { experiences } from "../data/constants";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-[1] flex flex-col items-center justify-center pt-10 pb-20 max-tab:p-0"
    >
      <div className="relative flex w-full max-w-[1350px] flex-col items-center justify-between gap-3 px-4 py-20">
        <SectionHeading title="Experience">
          My work experience as a software engineer and working on different companies and
          projects.
        </SectionHeading>
        <Timeline
          items={experiences.map((experience) => ({
            key: experience.id,
            content: <ExperienceCard experience={experience} />,
          }))}
        />
      </div>
    </section>
  );
}
