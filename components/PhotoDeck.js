"use client";

import { useRef, useState } from "react";
import Picture from "./Picture";
import styles from "./PhotoDeck.module.css";

// A small stack of photos. "Next" flicks the front photo to the back of
// the stack; it also responds to a horizontal swipe.
export default function PhotoDeck({ photos }) {
  const [order, setOrder] = useState(photos.map((_, i) => i));
  const [leaving, setLeaving] = useState(null);
  const startX = useRef(null);

  const next = () => {
    if (leaving !== null) return;
    const front = order[0];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOrder((o) => [...o.slice(1), o[0]]);
      return;
    }
    setLeaving(front);
    setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]]);
      setLeaving(null);
    }, 320);
  };

  const onPointerDown = (e) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 40) next();
  };

  const current = order[0];

  return (
    <div className={styles.deck}>
      <div
        className={styles.stack}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (startX.current = null)}
      >
        {photos.map((photo, i) => {
          const pos = order.indexOf(i);
          return (
            <figure
              key={photo.src}
              className={styles.card}
              data-pos={pos}
              data-leaving={leaving === i || undefined}
              aria-hidden={pos !== 0}
            >
              <Picture
                image={photo}
                priority={i === 0}
                sizes="(min-width: 900px) 50vw, 100vw"
                className={styles.image}
              />
            </figure>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.next} onClick={next}>
          Meet another puppy
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        <div className={styles.dots} aria-hidden="true">
          {photos.map((photo, i) => (
            <span key={photo.src} data-active={current === i || undefined} />
          ))}
        </div>
        <span className="visually-hidden" aria-live="polite">
          Photo {current + 1} of {photos.length}: {photos[current].alt}
        </span>
      </div>
    </div>
  );
}
