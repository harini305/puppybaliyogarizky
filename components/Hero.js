import { booking, contact, site } from "@/data/site";
import { images } from "@/data/images";
import PhotoDeck from "./PhotoDeck";
import { ArrowIcon, WhatsAppIcon } from "./Icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={`panel ${styles.hero}`} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" data-hero-item>
            Yoga heals the body. Puppies heal the&nbsp;heart.
          </h1>
          <p className={`lead ${styles.intro}`} data-hero-item>
            Stretch, smile and snuggle with playful puppies at {site.name}.
            Gentle yoga in Ubud and Canggu, perfect for all levels, beginners
            welcome.
          </p>

          <ul className={styles.facts} data-hero-item>
            <li>Ubud &amp; Canggu</li>
            <li>{site.duration}</li>
            <li>{site.price}</li>
          </ul>

          <div className={styles.ctas} data-hero-item>
            <a className="btn btn-primary" href={booking.ubud} target="_blank" rel="noopener noreferrer">
              Book Ubud <ArrowIcon />
            </a>
            <a className="btn btn-primary" href={booking.canggu} target="_blank" rel="noopener noreferrer">
              Book Canggu <ArrowIcon />
            </a>
          </div>
          <a className={`text-link ${styles.chat}`} href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" data-hero-item>
            <WhatsAppIcon /> Questions first? Chat on WhatsApp
          </a>
        </div>

        <div className={styles.media} data-hero-media>
          <PhotoDeck photos={[images.hero, images.heroTwoPups, images.heroTongue]} />
        </div>
      </div>
    </section>
  );
}
