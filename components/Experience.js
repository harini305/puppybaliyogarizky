"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import Picture from "./Picture";
import styles from "./Experience.module.css";

const chapters = [
  {
    id: "session",
    label: "The session",
    image: images.expSession,
    body: (
      <>
        <p>
          An instructor guides you through gentle, beginner-friendly movement:
          breathing exercises, stretching, seated poses and simple standing
          positions. Move at your own comfort level and adjust any pose.
        </p>
        <p>
          The puppies are part of the space. Some are energetic and curious,
          others prefer to rest, so every class feels a little different.
        </p>
      </>
    ),
  },
  {
    id: "puppies",
    label: "Around the puppies",
    image: images.expPuppies,
    body: (
      <ul className={styles.list}>
        <li>Let the puppies approach you in their own time.</li>
        <li>Handle them gently and respect their space.</li>
        <li>If a puppy is sleeping, let it rest.</li>
        <li>Follow the team&rsquo;s guidance during the class.</li>
      </ul>
    ),
  },
  {
    id: "details",
    label: "Good to know",
    image: images.expDetails,
    body: (
      <>
        <dl className={styles.facts}>
          <div>
            <dt>Duration</dt>
            <dd>About one hour</dd>
          </div>
          <div>
            <dt>Price</dt>
            <dd>
              {site.price} {site.priceNote}
            </dd>
          </div>
          <div>
            <dt>Level</dt>
            <dd>All levels, beginners welcome</dd>
          </div>
        </dl>
        <p className={styles.note}>
          Prices and schedules can change. Check the booking page for current dates.
        </p>
      </>
    ),
  },
];

// Three photo panels. The open one widens to show its content over the photo;
// the others shrink to slim strips with vertical titles.
export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className={`panel ${styles.experience}`} aria-labelledby="experience-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <h2 id="experience-title" data-reveal>The puppy yoga experience</h2>
          <p className="lead" data-reveal>
            Less formal than a traditional class, and much more playful.
          </p>
        </div>

        <div className={styles.panels} data-reveal>
          {chapters.map((c, i) => {
            const open = active === i;
            return (
              <article key={c.id} className={styles.card} data-open={open || undefined}>
                <Picture image={c.image} sizes="(min-width: 900px) 70vw, 100vw" className={styles.bg} alt={open ? c.image.alt : ""} />
                <h3 className={styles.trigger}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`exp-${c.id}`}
                    onClick={() => setActive(i)}
                  >
                    <span className={styles.label}>{c.label}</span>
                    <span className={styles.plus} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`exp-${c.id}`} className={styles.content} aria-hidden={!open}>
                  <p className={styles.title} aria-hidden="true">{c.label}</p>
                  {c.body}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
