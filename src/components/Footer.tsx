import { Bio } from "../data/constants";
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons";

const SOCIALS = [
  { href: Bio.github, label: "GitHub", Icon: GitHubIcon },
  { href: Bio.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: Bio.insta, label: "Instagram", Icon: InstagramIcon },
  { href: Bio.facebook, label: "Facebook", Icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#2b2b2b] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">
        <p className="text-sm">
          {"\u00A9"} {new Date().getFullYear()} {Bio.name}
        </p>
        <ul className="flex gap-4 text-lg">
          {SOCIALS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="opacity-70 hover:opacity-100">
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
