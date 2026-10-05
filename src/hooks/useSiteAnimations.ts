import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useSiteAnimations(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from("[data-hero-photo]", { scale: 0.85, autoAlpha: 0, duration: 0.9 })
          .from("[data-hero-social]", { scale: 0, autoAlpha: 0, stagger: 0.08, duration: 0.45, ease: "back.out(2)" }, "-=0.4")
          .from("[data-hero-line]", { y: 28, autoAlpha: 0, stagger: 0.12, duration: 0.7 }, "-=0.6");

        gsap.to("[data-hero-photo]", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true },
        });

        ScrollTrigger.batch("[data-reveal]", {
          start: "top 88%",
          once: true,
          onEnter: (els) =>
            gsap.fromTo(
              els,
              { y: 40, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", overwrite: true },
            ),
        });
        gsap.set("[data-reveal]", { autoAlpha: 0 });

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = Number(el.dataset.count);
          const counter = { v: 0 };
          gsap.to(counter, {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = String(Math.round(counter.v));
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-timeline-line]").forEach((line) => {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              transformOrigin: "top",
              scrollTrigger: { trigger: line.parentElement, start: "top 70%", end: "bottom 60%", scrub: true },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope },
  );
}
