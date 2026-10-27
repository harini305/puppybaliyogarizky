"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Page-level entrance motion. Elements opt in with data attributes:
//   data-hero-item / data-hero-media  -> load sequence in the hero
//   data-reveal                       -> fade up once when scrolled into view
//   data-reveal-item                  -> same, staggered in batches
//   data-reveal-media                 -> image wipes in from the left
// Nothing is hidden by CSS, so content stays visible without JS or with
// reduced motion.
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-media]", { autoAlpha: 0, y: 24, rotation: 1.5, duration: 1.1 }, 0)
        .from("[data-hero-item]", { autoAlpha: 0, y: 24, duration: 0.8, stagger: 0.08 }, 0.1);

      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 28,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray("[data-reveal-media]").forEach((el) => {
        gsap.from(el, {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        });
      });

      gsap.set("[data-reveal-item]", { autoAlpha: 0, y: 24 });
      ScrollTrigger.batch("[data-reveal-item]", {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.08,
            overwrite: true,
          }),
      });

      // Positions can shift after fonts and images settle.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      return () => window.removeEventListener("load", refresh);
    });

    return () => mm.revert();
  }, []);

  return null;
}
