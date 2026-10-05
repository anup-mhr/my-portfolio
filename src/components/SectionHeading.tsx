import type { ReactNode } from "react";

export default function SectionHeading({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col items-center gap-3 text-center">
      <h2 className="text-3xl font-bold text-heading md:text-4xl">{title}</h2>
      {children && (
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {children}
        </p>
      )}
    </div>
  );
}
