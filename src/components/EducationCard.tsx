import type { Education } from "../types";

export default function EducationCard({ education }: { education: Education }) {
  return (
    <article className="group relative flex w-full flex-col gap-3 overflow-hidden rounded-[10px] border-[0.1px] border-primary px-4 py-3 shadow-glow transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] max-md:gap-2 max-md:p-2.5">
      <div className="flex w-full gap-3">
        <img
          src={education.img}
          alt={education.school}
          className="mt-1 h-[50px] rounded-[10px] bg-black max-md:h-10"
        />
        <div className="flex w-full flex-col">
          <h3 className="text-lg font-semibold text-fg/60 max-md:text-sm">{education.school}</h3>
          <p className="text-sm font-medium text-muted/60 max-md:text-xs">{education.degree}</p>
          <p className="text-xs text-muted/50 max-md:text-[10px]">{education.date}</p>
        </div>
      </div>
      <p className="text-sm font-medium text-muted/60 max-md:text-xs">
        <b>Grade: </b>
        {education.grade}
      </p>
      <p className="mb-2.5 line-clamp-4 w-full text-[15px] text-fg/60 group-hover:line-clamp-none max-md:text-xs">
        {education.desc}
      </p>
    </article>
  );
}
