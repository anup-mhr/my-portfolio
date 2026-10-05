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
      data-reveal
      className={`mb-12 flex flex-col gap-4 md:mb-16 ${centered ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          <span aria-hidden="true" className="h-px w-6 bg-primary" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-h2 font-bold tracking-[-0.02em] text-heading">{title}</h2>
      {children && <p className="max-w-[60ch] text-lead text-muted">{children}</p>}
    </div>
  );
}
