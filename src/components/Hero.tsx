import { Bio } from "../data/constants";
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons";

const SOCIALS = [
  { href: Bio.insta, label: "Instagram", Icon: InstagramIcon, pos: "left-[12%] top-[2%]" },
  { href: Bio.linkedin, label: "LinkedIn", Icon: LinkedInIcon, pos: "-left-[4%] top-[30%]" },
  { href: Bio.github, label: "GitHub", Icon: GitHubIcon, pos: "-left-[4%] top-[58%]" },
  { href: Bio.facebook, label: "Facebook", Icon: FacebookIcon, pos: "left-[12%] top-[86%]" },
];

export default function Hero() {
  const [first, ...rest] = Bio.name.split(" ");

  return (
    <section id="home" className="mx-auto flex min-h-[calc(100svh-72px)] max-w-6xl items-center px-6 py-16">
      <div className="flex w-full flex-col items-center gap-14 md:flex-row md:gap-20">
        <div className="flex flex-col items-center gap-6">
          <div className="relative size-64 md:size-80">
            <img
              src="/assets/Anup.jpg"
              alt={`Portrait of ${Bio.name}`}
              className="size-full rounded-full border-4 border-primary object-cover p-1.5"
            />
            {SOCIALS.map(({ href, label, Icon, pos }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`absolute ${pos} flex size-11 items-center justify-center rounded-full bg-bg text-xl text-fg shadow-md ring-1 ring-line transition hover:-translate-y-0.5 hover:bg-primary hover:text-white`}
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="flex items-center gap-3 text-sm text-muted">
            <span className="h-px w-12 bg-muted/60" />
            Full Stack Developer
            <span className="h-px w-12 bg-muted/60" />
          </p>
        </div>

        <div className="flex max-w-lg flex-col items-center text-center md:items-start md:text-left">
          <p className="text-2xl">
            <span className="text-primary">नमस्ते !</span> I&apos;m
          </p>
          <h1 className="mt-2 font-script text-6xl leading-tight md:text-7xl">
            {first} <span className="text-primary">{rest.join(" ")}</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            A backend-leaning full stack developer from Kathmandu, Nepal. I build
            fast APIs, realtime apps and AI-powered tools with Node.js, React and
            TypeScript.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
            >
              My Projects <span aria-hidden="true">{"->"}</span>
            </a>
            <a
              href="#contact"
              className="rounded-md px-5 py-2.5 text-sm font-medium ring-1 ring-line transition-colors hover:ring-primary"
            >
              Say hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
