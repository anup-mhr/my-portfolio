import { useState } from "react";
import { Bio, NAV_LINKS } from "../data/constants";
import { LogoIcon, MenuIcon } from "./icons";

const githubButton =
  "flex h-[70%] items-center justify-center rounded-[20px] border-[1.8px] border-primary px-5 font-medium text-primary transition-all duration-[600ms] hover:bg-primary hover:text-white max-md:text-sm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 flex h-20 items-center justify-center bg-card-light">
      <div className="z-[1] flex h-[60px] w-full max-w-[1200px] items-center justify-between px-6">
        <a
          href="#about"
          className="flex w-4/5 items-center px-1.5 text-white max-sm:px-0"
        >
          <LogoIcon size="3rem" />
          <span className="px-1 text-lg font-bold">Portfolio</span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="absolute top-0 right-0 hidden -translate-x-full translate-y-[60%] cursor-pointer text-2xl text-fg max-md:block"
        >
          <MenuIcon />
        </button>

        <ul className="flex w-full items-center justify-center gap-8 px-1.5 max-md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-medium text-fg transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex h-full w-4/5 items-center justify-end px-1.5 max-md:hidden">
          <a href={Bio.github} target="_blank" rel="noreferrer" className={githubButton}>
            Github Profile
          </a>
        </div>

        {isOpen && (
          <div className="absolute top-20 right-0 z-[1000] flex w-[calc(100vw-80px)] flex-col justify-center gap-4 rounded-b-[20px] bg-card-light/60 px-10 pt-3 pb-6 shadow-[0_0_10px_0_rgba(0,0,0,0.2)] backdrop-blur">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-medium text-fg transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={Bio.github}
              target="_blank"
              rel="noreferrer"
              className={`${githubButton} w-max bg-primary px-4 py-2.5 text-white`}
            >
              Github
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
