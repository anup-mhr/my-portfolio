import { Bio, NAV_LINKS } from "../data/constants";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./icons";

const SOCIALS = [
  { href: Bio.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: Bio.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: Bio.insta, label: "Instagram", Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <div className="flex w-full justify-center py-8">
      <footer className="flex w-full max-w-[1200px] flex-col items-center gap-3.5 p-4 text-fg">
        <p className="text-xl font-semibold text-primary">{Bio.name}</p>
        <nav className="mt-2 flex w-full max-w-[800px] justify-center gap-8 max-md:flex-wrap max-md:gap-4 max-md:text-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[1.2rem] transition-colors hover:text-primary max-md:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-4 flex">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="mx-4 inline-block text-2xl transition-colors hover:text-primary"
            >
              <Icon />
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-[0.9rem]">
          &copy; {new Date().getFullYear()} {Bio.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
