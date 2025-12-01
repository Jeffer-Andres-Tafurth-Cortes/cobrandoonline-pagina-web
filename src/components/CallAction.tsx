"use client";

import styles from "./styles/CallAction.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/2SLJSZ5EUTDGP1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function CallAction() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.topText}>
          RECUPERA TU CARTERA, SIN COMPLICACIONES
        </span>

        <h2 className={styles.title}>
          ¡Permítenos ayudarte a<br /> recuperar lo que es tuyo!
        </h2>

        <p className={styles.description}>
          En Cobrando Online gestionamos tus deudas para que puedas enfocarte en
          hacer crecer tu negocio. Nuestro equipo especializado se encarga de
          todo el proceso, desde la negociación hasta la acción jurídica, con
          transparencia y resultados eficientes.
        </p>

        <button onClick={handleClick} className={styles.button}>
          Solicitar cobro
        </button>
      </div>
    </section>
  );
}
