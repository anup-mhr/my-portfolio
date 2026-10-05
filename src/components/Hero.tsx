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
    <section id="home" className="container-x flex min-h-[calc(100svh-72px)] items-center py-12 md:py-16">
      <div className="flex w-full flex-col items-center gap-12 md:flex-row md:justify-center md:gap-16 lg:gap-24">
        <div className="flex flex-col items-center gap-6">
          <div data-hero-photo className="relative size-60 sm:size-72 lg:size-80">
            <img
              src="/assets/Anup.jpg"
              alt={`Portrait of ${Bio.name}`}
              className="size-full rounded-full border-4 border-primary object-cover p-1.5"
            />
            {SOCIALS.map(({ href, label, Icon, pos }) => (
              <span key={label} data-hero-social className={`absolute z-10 ${pos}`}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full bg-bg text-xl text-fg shadow-md ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 hover:ring-primary"
                >
                  <Icon />
                </a>
              </span>
            ))}
          </div>
          <p data-hero-line className="flex items-center gap-3 text-sm text-muted">
            <span className="h-px w-12 bg-muted/60" />
            {Bio.tagline}
            <span className="h-px w-12 bg-muted/60" />
          </p>
        </div>

        <div className="flex max-w-lg flex-col items-center text-center md:items-start md:text-left">
          <p data-hero-line className="text-2xl">
            <span className="text-primary">नमस्ते !</span> I&apos;m
          </p>
          <h1 data-hero-line className="mt-2 font-script text-display">
            {first} <span className="text-primary">{rest.join(" ")}</span>
            <span className="sr-only"> — Software Engineer specializing in AWS and serverless</span>
          </h1>
          <p data-hero-line className="mt-5 max-w-[52ch] text-lead text-muted">
            A software engineer from {Bio.location} building production-grade
            serverless, microservice and multi-tenant SaaS platforms with
            TypeScript, Node.js, React and AWS.
          </p>
          <div data-hero-line className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-white shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Let&apos;s talk <span aria-hidden="true">{"\u2192"}</span>
            </a>
            <a
              href={Bio.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg px-6 text-sm font-medium text-heading ring-1 ring-line transition-colors hover:text-primary hover:ring-primary"
            >
              Download CV
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 4v12m0 0-5-5m5 5 5-5M5 20h14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
