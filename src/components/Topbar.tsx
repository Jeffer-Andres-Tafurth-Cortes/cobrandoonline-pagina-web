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
        <a href="/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="/">
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
