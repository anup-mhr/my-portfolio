import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div
      className={`mb-14 flex flex-col gap-3 ${centered ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <span aria-hidden="true" className="h-px w-6 bg-primary" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-heading md:text-4xl">{title}</h2>
      {children && (
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">{children}</p>
      )}
    </div>
  );
}
