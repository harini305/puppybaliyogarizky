"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gallery } from "@/data/images";
import Picture from "./Picture";
import styles from "./Gallery.module.css";

const Chevron = ({ dir }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={dir === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
  </svg>
);

// The first photo is the large centre tile; the next seven fill the mosaic.
// The lightbox browses every photo in the gallery.
const [feature, ...others] = gallery;
const tiles = others.slice(0, 7);

// Mosaic photo wall. On tablet/desktop the section pins: it opens on the centre
// photo filling the screen, which shrinks into its place as the other photos
// and the heading tile gather around it. Phones get a simple reveal.
export default function Gallery() {
  const sectionRef = useRef(null);
  const centerRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const [index, setIndex] = useState(null);
  const [dir, setDir] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const center = centerRef.current;
    const around = gsap.utils.toArray(`.${styles.tile}`, section);
    const intro = section.querySelector(`.${styles.intro}`);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      // Positions relative to the section, which fills the screen while pinned
      const offset = (el) => {
        const w = section.clientWidth;
        const h = section.clientHeight;
        return {
          x: w / 2 - (el.offsetLeft + el.offsetWidth / 2),
          y: h / 2 - (el.offsetTop + el.offsetHeight / 2),
          scale: Math.max(w / el.offsetWidth, h / el.offsetHeight) * 1.02,
        };
      };
      const away = (el, f) => {
        const o = offset(el);
        return { x: -o.x * f, y: -o.y * f };
      };

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        center,
        { x: () => offset(center).x, y: () => offset(center).y, scale: () => offset(center).scale, borderRadius: 0 },
        { x: 0, y: 0, scale: 1, borderRadius: 12, duration: 1 },
        0
      )
        .fromTo(
          around,
          {
            x: (i, el) => away(el, 0.35).x,
            y: (i, el) => away(el, 0.35).y,
            scale: 0.82,
            opacity: 0,
          },
          { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.7, stagger: 0.04 },
          0.3
        )
        .fromTo(intro, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5 }, 0.55)
        // Hold the finished wall on screen briefly before the page moves on
        .to({}, { duration: 0.35 });

      return () => gsap.set([center, intro, ...around], { clearProps: "all" });
    });

    mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
      const items = [intro, center, ...around];
      gsap.set(items, { opacity: 0, y: 40 });
      ScrollTrigger.batch(items, {
        start: "top 92%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08 }),
      });
      return () => gsap.set(items, { clearProps: "all" });
    });

    return () => mm.revert();
  }, []);

  // Lightbox
  const open = (i, e) => {
    triggerRef.current = e.currentTarget;
    setDir(0);
    setIndex(i);
  };

  const close = useCallback(() => dialogRef.current?.close(), []);
  const step = useCallback((d) => {
    setDir(d);
    setIndex((i) => (i + d + gallery.length) % gallery.length);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (index !== null && dialog && !dialog.open) dialog.showModal();
  }, [index]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setIndex(null);
      triggerRef.current?.focus({ preventScroll: true });
    };
    const onKey = (e) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClick = (e) => e.target === dialog && dialog.close();
    dialog.addEventListener("close", onClose);
    dialog.addEventListener("keydown", onKey);
    dialog.addEventListener("click", onClick);
    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("keydown", onKey);
      dialog.removeEventListener("click", onClick);
    };
  }, [step]);

  const current = index !== null ? gallery[index] : null;

  return (
    <section ref={sectionRef} id="gallery" className={styles.gallery} aria-labelledby="gallery-title">
      <div className={styles.mosaic}>
        <div className={styles.intro}>
          <h2 id="gallery-title">Moments from the mat</h2>
          <p>Favourite moments from our classes in Bali. Select any photo to see it larger.</p>
          <button type="button" className={styles.all} onClick={(e) => open(0, e)}>
            View all {gallery.length} photos
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>

        <button
          ref={centerRef}
          type="button"
          className={`${styles.cell} ${styles.center}`}
          onClick={(e) => open(0, e)}
          aria-label={`View larger: ${feature.alt}`}
        >
          <Picture image={feature} sizes="(min-width: 768px) 50vw, 100vw" />
        </button>

        {tiles.map((image, i) => (
          <button
            key={image.src}
            type="button"
            className={`${styles.cell} ${styles.tile}`}
            data-slot={i + 1}
            onClick={(e) => open(i + 1, e)}
            aria-label={`View larger: ${image.alt}`}
          >
            <Picture image={image} sizes="(min-width: 768px) 25vw, 50vw" />
          </button>
        ))}
      </div>

      <dialog ref={dialogRef} className={styles.dialog} aria-label="Photo viewer">
        {current && (
          <div className={styles.viewer}>
            <figure className={styles.figure}>
              <img
                key={current.src}
                src={current.src}
                width={current.width}
                height={current.height}
                alt={current.alt}
                data-dir={dir > 0 ? "next" : dir < 0 ? "prev" : "open"}
              />
              <figcaption>
                {current.alt}
                <span className={styles.count}>
                  {index + 1} / {gallery.length}
                </span>
              </figcaption>
            </figure>
            <div className={styles.dialogControls}>
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo">
                <Chevron dir="left" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next photo">
                <Chevron dir="right" />
              </button>
              <button type="button" onClick={close} aria-label="Close photo viewer" className={styles.close}>
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
