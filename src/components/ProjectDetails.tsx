import { useEffect, useRef } from "react";
import type { Project } from "../types";
import { CloseIcon, GitHubIcon, LinkedInIcon } from "./icons";

const button =
  "w-full rounded-lg px-4 py-3 text-center font-semibold transition-all duration-500 max-[600px]:text-xs";

export default function ProjectDetails({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label={project.title}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      className="m-0 h-full max-h-none w-full max-w-none overflow-y-auto bg-transparent p-0 backdrop:bg-black/65"
    >
      <div className="relative mx-auto my-[50px] flex w-[calc(100%-24px)] max-w-[800px] flex-col rounded-2xl bg-card p-5 text-fg">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-2.5 right-5 cursor-pointer text-2xl"
        >
          <CloseIcon />
        </button>
        <img
          src={project.image}
          alt=""
          className="mt-[30px] w-full rounded-xl object-cover shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
        />
        <h2 className="mx-1.5 mt-2 text-[28px] font-semibold max-[600px]:text-2xl">
          {project.title}
        </h2>
        <p className="mx-1.5 my-0.5 text-muted max-md:text-xs">{project.date}</p>
        <div className="my-2 flex flex-wrap max-[600px]:my-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="m-1 rounded-lg bg-primary/[.125] px-2 py-1 text-sm text-primary max-[600px]:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mx-1.5 my-2 max-[600px]:text-sm">{project.description}</p>

        {project.member && (
          <>
            <h3 className="mx-1.5 my-2 text-xl font-semibold max-[600px]:text-base">Members</h3>
            <ul className="mx-1.5 my-3 flex flex-col flex-wrap gap-1.5 max-[600px]:my-1">
              {project.member.map((member) => (
                <li key={member.name} className="flex items-center gap-3">
                  <img
                    src={member.img}
                    alt=""
                    className="mb-1 size-[50px] rounded-full object-cover shadow-[0_0_10px_0_rgba(0,0,0,0.3)] max-[600px]:size-8"
                  />
                  <span className="w-[200px] font-medium max-[600px]:text-sm">{member.name}</span>
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noreferrer" aria-label={`${member.name} on GitHub`} className="text-2xl">
                      <GitHubIcon />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} className="text-2xl">
                      <LinkedInIcon />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="my-3 flex justify-end gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`${button} bg-bg-light text-muted hover:bg-bg-light/60`}
          >
            View Code
          </a>
          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noreferrer"
              className={`${button} bg-primary text-fg hover:bg-primary/60`}
            >
              View Live App
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}
