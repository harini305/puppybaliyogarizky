"use client";

import { useState } from "react";
import { images } from "@/data/images";
import Picture from "./Picture";
import styles from "./About.module.css";

const highlights = [
  {
    title: "Adorable companions",
    text: "Every class is joined by friendly, healthy puppies who love to play and snuggle.",
    image: images.aboutPups,
  },
  {
    title: "Relax and recharge",
    text: "Practise gentle yoga surrounded by nature and joyful puppy energy. Perfect for all levels, beginners welcome.",
    image: images.aboutRelax,
  },
  {
    title: "An unforgettable Bali moment",
    text: "This isn't just yoga. It's an experience filled with smiles, laughter and love.",
    image: images.aboutPlay,
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className={`panel ${styles.about}`} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.frame} data-reveal>
          {highlights.map((item, i) => (
            <Picture
              key={item.title}
              image={item.image}
              sizes="(min-width: 960px) 46vw, 100vw"
              className={styles.image}
              alt={active === i ? item.image.alt : ""}
              data-active={active === i || undefined}
            />
          ))}
        </div>

        <div className={styles.copy}>
          <div className="section-head">
            <h2 id="about-title" data-reveal>About Puppy Yoga Bali Rizky</h2>
            <p className="lead" data-reveal>
              We combine the healing energy of yoga with the pure happiness of
              playful puppies. Our mission is simple: to help you reconnect with
              yourself, reduce stress and boost your mood.
            </p>
          </div>

          <ul className={styles.list} data-reveal>
            {highlights.map((item, i) => (
              <li key={item.title}>
                <button
                  type="button"
                  className={styles.item}
                  aria-expanded={active === i}
                  aria-controls={`about-text-${i}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                >
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.bar} aria-hidden="true" />
                </button>
                <div id={`about-text-${i}`} className={styles.text} data-open={active === i || undefined}>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
