import type { Experience } from "../types";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="group relative flex w-full flex-col gap-3 overflow-hidden rounded-[10px] border-[0.1px] border-[#306ee8] px-4 py-3 shadow-glow transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] max-md:gap-2 max-md:p-2.5">
      <div className="flex w-full gap-3">
        <img
          src={experience.img}
          alt={experience.company}
          className="mt-1 h-[50px] max-w-[150px] rounded-[10px] bg-[#f5e8fd] object-contain p-1 max-md:h-10"
        />
        <div className="flex w-full flex-col">
          <h3 className="text-lg font-semibold text-fg/60 max-md:text-sm">{experience.role}</h3>
          <p className="text-sm font-medium text-muted/60 max-md:text-xs">{experience.company}</p>
          <p className="text-xs text-muted/50 max-md:text-[10px]">{experience.date}</p>
        </div>
      </div>
      <div className="mb-2.5 w-full text-[15px] text-fg/60 max-md:text-xs">
        <p className="line-clamp-4 group-hover:line-clamp-none">{experience.desc}</p>
        {experience.skills && (
          <div className="mt-3 flex w-full gap-3">
            <b>Skills:</b>
            <ul className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
