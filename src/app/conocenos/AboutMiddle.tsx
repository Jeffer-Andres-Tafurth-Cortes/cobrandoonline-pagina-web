import styles from "./styles/AboutMiddle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/2SLJSZ5EUTDGP1?autoload=1&app_absent=0",
    "_blank"
  );
};

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
            <FontAwesomeIcon icon={faCheckCircle} /> Gestión rápida y segura
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> Sin adelantos ni cuotas
            iniciales
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> Comunicación profesional
            con tus clientes
          </li>
        </ul>

        <strong className={styles.textBold}>
          ¡Confía en expertos para recuperar lo que es tuyo!
        </strong>

        <button className={styles.button} onClick={handleClick}>
          Solicita tu cobro aquí
        </button>
      </div>

      {/* IMAGEN DERECHA */}
      <div className={styles.image}>
        <img src="/about-middle.webp" alt="Equipo de trabajo" />
      </div>
    </section>
  );
}
