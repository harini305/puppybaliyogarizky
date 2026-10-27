import { booking, contact, site } from "@/data/site";
import { images } from "@/data/images";
import Picture from "./Picture";
import { ArrowIcon, WhatsAppIcon } from "./Icons";
import styles from "./Booking.module.css";

const options = [
  { name: "Ubud", product: "Puppy Yoga Bali Rizky Ubud", href: booking.ubud },
  { name: "Canggu / Pererenan", product: "Puppy Yoga Bali Rizky Canggu", href: booking.canggu },
];

export default function Booking() {
  return (
    <section id="book" className={`panel ${styles.book}`} aria-labelledby="book-title">
      <div className={styles.media} data-reveal-media>
        <Picture image={images.booking} sizes="(min-width: 900px) 46vw, 100vw" className={styles.image} />
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <div className="section-head">
            <h2 id="book-title" data-reveal>Book your session</h2>
            <p data-reveal>
              Choose your location to see available dates and reserve your spot.
              Booking ahead is recommended, especially if you have a specific
              date in mind.
            </p>
          </div>

          <p className={styles.price} data-reveal>
            <span>{site.price}</span>
            {site.priceNote} &middot; sessions of {site.duration.toLowerCase()}
          </p>

          <div className={styles.options}>
            {options.map((o) => (
              <a key={o.name} href={o.href} target="_blank" rel="noopener noreferrer" className={styles.option} data-reveal-item>
                <span>
                  <strong>{o.name}</strong>
                  <small>{o.product}</small>
                </span>
                <span className={styles.go} aria-hidden="true">
                  <ArrowIcon />
                </span>
                <span className="visually-hidden"> (opens HybridBooking in a new tab)</span>
              </a>
            ))}
          </div>

          <div className={styles.foot} data-reveal>
            <a className="text-link" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Ask a question on WhatsApp
            </a>
            <p className={styles.small}>
              Bookings open on HybridBooking. Prices can change, so check the
              booking page before you reserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
