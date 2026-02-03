import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <a
          href="https://www.facebook.com/praviceabogadosespecializados"
          aria-label="Facebook de Pravice Abogados Especializados"
          title="Síguenos en Facebook | Pravice Abogados"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a
          href="https://www.instagram.com/pravice_abogados/"
          aria-label="Instagram de Pravice Abogados Especializados"
          title="Síguenos en Instagram | Pravice Abogados"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://www.tiktok.com/@pravice_abogados"
          aria-label="TikTok de Pravice Abogados Especializados"
          title="Síguenos en TikTok | Pravice Abogados"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>

      <div className={styles.right}>
        <span className={styles.item}>
          <FontAwesomeIcon icon={faLocationDot} />
          Calle 98 # 22-64 Of 716
        </span>

        <span className={styles.item}>
          <FontAwesomeIcon icon={faEnvelope} />
          info.pravice@gmail.com
        </span>
      </div>
    </div>
  );
}
