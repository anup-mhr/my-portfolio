import { useEffect, useState } from "react";
import { Bio, NAV_LINKS } from "../data/constants";
import { CloseIcon, MenuIcon } from "./icons";

const LINKS = [{ href: "#home", label: "Home" }, ...NAV_LINKS];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-bg/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_var(--color-line)]" : ""
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-2xl font-light tracking-tight">
          Anup<span className="font-semibold text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`relative block px-4 py-6 text-sm transition-colors hover:text-primary ${
                  active === href ? "text-fg" : "text-muted"
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-3 bottom-0 h-[3px] rounded-full bg-fg transition-opacity ${
                    active === href ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href={Bio.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-surface px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-white"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="text-2xl md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line bg-bg px-6 py-4 md:hidden">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className={`block py-2 ${active === href ? "font-medium text-primary" : ""}`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href={Bio.resume} target="_blank" rel="noreferrer" className="block py-2 text-primary">
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
