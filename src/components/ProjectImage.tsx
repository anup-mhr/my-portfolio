import { useState } from "react";
import type { Project } from "../types";

export default function ProjectImage({ project, className = "" }: { project: Project; className?: string }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const initials = project.title
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <div className="relative size-full bg-gradient-to-br from-primary/15 via-surface to-primary/5">
      {status !== "loaded" && (
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center font-script text-5xl text-primary/40 ${
            status === "loading" ? "animate-pulse" : ""
          }`}
        >
          {initials}
        </span>
      )}
      {status !== "error" && (
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`size-full object-cover transition-[opacity,transform] duration-500 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      )}
    </div>
  );
}
