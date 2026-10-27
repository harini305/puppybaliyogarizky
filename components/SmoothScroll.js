"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Smooth, eased page scrolling (GSAP ScrollSmoother). Created in a layout
// effect so it exists before any section creates its ScrollTriggers.
// In-page links (#section) glide to their section. Touch devices keep native
// scrolling, and reduced-motion users get plain jumps.
export default function SmoothScroll({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const smoother = reduce
      ? null
      : ScrollSmoother.create({
          wrapper: wrapperRef.current,
          content: contentRef.current,
          smooth: 1.1,
          effects: false,
          smoothTouch: false,
        });

    const goTo = (hash, animate) => {
      const target = hash === "#top" ? document.body : document.querySelector(hash);
      if (!target) return;
      if (smoother) smoother.scrollTo(hash === "#top" ? 0 : target, animate, "top top");
      else target.scrollIntoView();
      if (hash === "#main") target.focus?.({ preventScroll: true });
    };

    const onClick = (e) => {
      const link = e.target.closest?.('a[href^="#"]');
      if (!link || e.defaultPrevented) return;
      const hash = link.getAttribute("href");
      if (hash.length < 2) return;
      e.preventDefault();
      // Wait two frames so an open mobile menu has closed and the layout
      // has settled before measuring where the section is.
      requestAnimationFrame(() => requestAnimationFrame(() => goTo(hash, true)));
      history.replaceState(null, "", hash === "#top" ? location.pathname : hash);
    };
    document.addEventListener("click", onClick);

    // Opening the page with a #hash lands on that section once layout settles.
    if (location.hash.length > 1) {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        goTo(location.hash, false);
      });
    }

    return () => {
      document.removeEventListener("click", onClick);
      smoother?.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
