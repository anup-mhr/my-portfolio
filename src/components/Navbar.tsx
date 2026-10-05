import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Bio, NAV_LINKS } from "../data/constants";

const LINKS = [{ href: "#home", label: "Home" }, ...NAV_LINKS];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

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
      { rootMargin: "-45% 0px -50% 0px" },
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

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true, defaults: { ease: "power3.out" } })
        .set(panelRef.current, { display: "block" })
        .fromTo(panelRef.current, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.45 })
        .fromTo("[data-menu-item]", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.35 }, "-=0.25");
    },
    { scope: panelRef },
  );

  useEffect(() => {
    if (!tl.current) return;
    if (open) {
      tl.current.timeScale(1).play();
    } else {
      tl.current.timeScale(1.8).reverse();
    }
    document.body.style.overflow = open ? "hidden" : "";

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg/90 backdrop-blur transition-shadow ${
        scrolled || open ? "shadow-[0_1px_0_var(--color-line)]" : ""
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6" aria-label="Main">
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
          className="relative flex size-10 items-center justify-center rounded-full transition-colors hover:bg-surface md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-fg transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-fg transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-fg transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        className="absolute inset-x-0 top-full hidden h-[calc(100svh-72px)] overflow-y-auto bg-bg pb-10 md:hidden"
        aria-hidden={!open}
        inert={!open}
      >
        <ul className="flex flex-col px-6 pt-6">
          {LINKS.map(({ href, label }, i) => (
            <li key={href} data-menu-item className="border-b border-line">
              <a
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-baseline gap-4 py-4 text-2xl font-medium transition-colors hover:text-primary ${
                  active === href ? "text-primary" : "text-heading"
                }`}
              >
                <span className="text-xs font-normal text-muted">{String(i + 1).padStart(2, "0")}</span>
                {label}
              </a>
            </li>
          ))}
          <li data-menu-item className="pt-8">
            <a
              href={Bio.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
