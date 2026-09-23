import type { ReactNode } from "react";

interface TimelineItem {
  key: number | string;
  content: ReactNode;
}

export default function Timeline({
  items,
  dotSide = "left",
}: {
  items: TimelineItem[];
  dotSide?: "left" | "right";
}) {
  return (
    <ol className="mx-auto mt-2.5 flex w-full max-w-[700px] flex-col">
      {items.map((item, index) => (
        <li
          key={item.key}
          className={`flex gap-4 ${dotSide === "right" ? "flex-row-reverse" : ""}`}
        >
          <div className="flex flex-col items-center" aria-hidden="true">
            <span className="my-[11.5px] size-3 rounded-full border-2 border-[#9c27b0]" />
            {index < items.length - 1 && <span className="w-0.5 grow bg-primary" />}
          </div>
          <div className="min-w-0 flex-1 py-3">{item.content}</div>
        </li>
      ))}
    </ol>
  );
}
