"use client";

import { useState } from "react";
import { contact, faqs } from "@/data/site";
import { images } from "@/data/images";
import Picture from "./Picture";
import { WhatsAppIcon } from "./Icons";
import styles from "./Faq.module.css";

// A tall class photo carries the "ask us" prompt; questions open in place
// beside it, one at a time.
export default function Faq() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className={`panel ${styles.faq}`} aria-labelledby="faq-title">
      <div className={`container ${styles.grid}`}>
        <figure className={styles.photo} data-reveal>
          <Picture image={images.faq} sizes="(min-width: 900px) 34vw, 100vw" className={styles.img} />
          <figcaption className={styles.ask}>
            <span className={styles.askTitle}>Still wondering about something?</span>
            <span className={styles.askText}>Send us a message and we&rsquo;ll help you plan your class.</span>
            <a className="btn btn-primary" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Ask on WhatsApp
            </a>
          </figcaption>
        </figure>

        <div className={styles.side}>
          <h2 id="faq-title" data-reveal>Frequently asked questions</h2>

          <ul className={styles.list} data-reveal>
            {faqs.map((item, i) => {
              const open = active === i;
              return (
                <li key={item.q} className={styles.item} data-open={open || undefined}>
                  <h3 className={styles.q}>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setActive(open ? null : i)}
                    >
                      <span>{item.q}</span>
                      <span className={styles.icon} aria-hidden="true" />
                    </button>
                  </h3>
                  <div id={`faq-a-${i}`} className={styles.a} aria-hidden={!open}>
                    <p>{item.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
