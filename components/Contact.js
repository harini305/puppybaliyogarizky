"use client";

import { useState } from "react";
import { contact, locations, site } from "@/data/site";
import { ArrowIcon, InstagramIcon, MailIcon, PinIcon, WhatsAppIcon } from "./Icons";
import styles from "./Contact.module.css";

// Locations and contact details in one place: pick a studio to see it on the
// map, book or get directions, or reach us directly.
export default function Contact() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  // The map ignores the scroll wheel until clicked, so scrolling past it
  // never gets caught by the map (which made the page stall and jerk).
  const [mapActive, setMapActive] = useState(false);
  const loc = locations[active];
  const short = loc.id === "ubud" ? "Ubud" : "Canggu";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section id="contact" className={`panel ${styles.contact}`} aria-labelledby="contact-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <div className="section-head">
            <h2 id="contact-title" data-reveal>Find us &amp; say hello</h2>
            <p className="lead" data-reveal>
              Two studios in Bali, each with its own booking page. Pick one to
              see it on the map.
            </p>
          </div>

          <div className={styles.switch} role="group" aria-label="Choose a location" data-reveal>
            <span className={styles.thumb} style={{ transform: `translateX(${active * 100}%)` }} aria-hidden="true" />
            {locations.map((l, i) => (
              <button key={l.id} type="button" aria-pressed={active === i} onClick={() => setActive(i)}>
                {l.id === "ubud" ? "Ubud" : "Canggu"}
              </button>
            ))}
          </div>

          <div className={styles.details} key={loc.id} aria-live="polite">
            <h3>{loc.name}</h3>
            <p className={styles.area}>
              <PinIcon /> {loc.area}
            </p>
            <div className={styles.actions}>
              <a className="btn btn-light" href={loc.bookHref} target="_blank" rel="noopener noreferrer">
                Book {short} <ArrowIcon />
              </a>
              <a className="btn btn-ghost-light" href={loc.mapHref} target="_blank" rel="noopener noreferrer">
                Directions
              </a>
            </div>
          </div>
        </div>

        <div
          className={styles.map}
          data-active={mapActive || undefined}
          onMouseLeave={() => setMapActive(false)}
          data-reveal
        >
          {!mapActive && (
            <button type="button" className={styles.mapGuard} onClick={() => setMapActive(true)}>
              <span>Click to use the map</span>
            </button>
          )}
          <iframe
            key={loc.id}
            title={`Map showing ${site.name} ${loc.name}`}
            src={`https://maps.google.com/maps?q=${loc.coords}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <ul className={styles.channels} aria-label="Contact details" data-reveal>
          <li>
            <a className={styles.channel} href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              <span>
                <small>WhatsApp</small>
                {contact.whatsappDisplay}
              </span>
            </a>
          </li>
          <li className={styles.emailItem}>
            <a className={styles.channel} href={`mailto:${contact.email}`}>
              <MailIcon />
              <span>
                <small>Email</small>
                {contact.email}
              </span>
            </a>
            <button type="button" className={styles.copy} onClick={copyEmail}>
              {copied ? "Copied" : "Copy"}
              <span className="visually-hidden"> email address</span>
            </button>
            <span className="visually-hidden" aria-live="polite">
              {copied ? "Email address copied" : ""}
            </span>
          </li>
          <li>
            <a className={styles.channel} href={contact.instagramHref} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
              <span>
                <small>Instagram</small>
                {contact.instagramHandle}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
