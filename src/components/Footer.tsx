import styles from "./styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* LOGO + TEXTO */}
        <div className={styles.left}>
          <img
            src="/logo-cobrando-online.png"
            className={styles.logo}
            alt="logo"
          />
          <p className={styles.text}>
            <strong>Cobrando Online</strong> es tu aliado en la recuperación de
            cartera. Ofrecemos un servicio ágil, transparente y seguro para
            gestionar deudas de personas naturales, jurídicas y entidades de
            salud, con acompañamiento jurídico especializado.
          </p>
        </div>

        {/* HORARIO */}
        <div className={styles.schedule}>
          <FontAwesomeIcon icon={faClock} className={styles.icon} />
          <div>
            <h4>Lunes - Viernes:</h4>
            <p>08:00 am - 06:00 pm</p>
          </div>
        </div>

        {/* SOCIAL */}
        <div className={styles.social}>
          <a
            href="https://www.facebook.com/praviceabogadosespecializados"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.tiktok.com/@pravice_abogados"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a
            href="https://www.instagram.com/pravice_abogados/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <div className={styles.copy}>© 2026 Pravice Abogados</div>
    </footer>
  );
}
