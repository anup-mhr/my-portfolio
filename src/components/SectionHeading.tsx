import type { ReactNode } from "react";

export default function SectionHeading({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <h2 className="mt-5 text-center text-[42px] font-semibold text-fg max-md:mt-3 max-md:text-[32px]">
        {title}
      </h2>
      <p className="max-w-[600px] text-center text-lg text-muted max-md:mt-3 max-md:text-base">
        {children}
      </p>
    </>
  );
}
