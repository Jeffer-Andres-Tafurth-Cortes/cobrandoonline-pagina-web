import styles from "./styles/AboutMiddle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClock } from "@fortawesome/free-solid-svg-icons";

export default function AboutMiddle() {
  return (
    <section className={styles.hero}>
      {/* PANEL IZQUIERDO */}
      <div className={styles.left}>
        <span className={styles.badge}>
          <FontAwesomeIcon icon={faClock} /> SOLUCIONES A TU MEDIDA
        </span>

        <h1>¿Tus clientes no están cumpliendo con los pagos a tiempo?</h1>

        <p>
          En <strong>Cobrando Online</strong> gestionamos la recuperación de tus
          pagos pendientes para que tu empresa mantenga su flujo de caja sin
          afectar la relación con tus clientes.
        </p>

        <ul className={styles.list}>
          <li>
            <FontAwesomeIcon icon={faCheck} /> Gestión rápida y segura
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} /> Sin adelantos ni cuotas iniciales
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} /> Comunicación profesional con tus
            clientes
          </li>
        </ul>

        <strong className={styles.textBold}>
          ¡Confía en expertos para recuperar lo que es tuyo!
        </strong>

        <button className={styles.button}>Solicita tu cobro aquí</button>
      </div>

      {/* IMAGEN DERECHA */}
      <div className={styles.image}>
        <img src="/about-middle.webp" alt="Equipo de trabajo" />
      </div>
    </section>
  );
}
