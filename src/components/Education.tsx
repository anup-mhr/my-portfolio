import { education } from "../data/constants";
import EducationCard from "./EducationCard";
import SectionHeading from "./SectionHeading";
import Timeline from "./Timeline";

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-[1] flex flex-col items-center justify-center pb-[60px] max-tab:p-0"
    >
      <div className="relative flex w-full max-w-[1350px] flex-col items-center justify-between gap-3 px-4 pt-10">
        <SectionHeading title="Education">
          My education has been a journey of self-discovery and growth. My educational details
          are as follows.
        </SectionHeading>
        <Timeline
          dotSide="right"
          items={education.map((item) => ({
            key: item.id,
            content: <EducationCard education={item} />,
          }))}
        />
      </div>
    </section>
  );
}
