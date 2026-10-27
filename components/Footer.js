import { contact, nav, site } from "@/data/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import styles from "./Footer.module.css";

// One compact bar: the contact section above already carries the details.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand}>
          <img src="/images/logo-96.webp" width="96" height="99" alt="" loading="lazy" className={styles.logo} />
          <span>&copy; {year} {site.name}</span>
          <span className="visually-hidden">, back to top</span>
        </a>

        <nav aria-label="Footer" className={styles.nav}>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.social}>
          <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WhatsAppIcon />
          </a>
          <a href={contact.instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
