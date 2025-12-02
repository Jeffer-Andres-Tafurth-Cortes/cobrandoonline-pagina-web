"use client";
import styles from "./styles/CallToAction.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/2SLJSZ5EUTDGP1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function CallToAction() {
  return (
    <section className={styles.hero}>
      {/* Video de fondo */}
      <video className={styles.videoBg} autoPlay muted loop playsInline>
        <source src="/counting-money.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5
      </video>

      {/* Capa oscura encima del video */}
      <div className={styles.overlay}></div>

      {/* Contenido */}
      <div className={styles.content}>
        <p className={styles.topText}>
          NO DEJES QUE LOS IMPAGOS FRENE EL CRECIMIENTO DE TU NEGOCIO
        </p>

        <h1 className={styles.title}>
          Recupera el Control de Tus <br /> Finanzas
        </h1>

        <p className={styles.description}>
          Las facturas impagadas no solo afectan tu flujo de caja, sino que
          también generan incertidumbre y pérdida de tiempo persiguiendo a los
          deudores. En <b>Cobrando Online</b>, nos encargamos de todo el proceso
          para que puedas concentrarte en lo más importante: hacer crecer tu
          negocio.
        </p>

        <button className={styles.button} onClick={handleClick}>
          Contáctanos
        </button>
      </div>
    </section>
  );
}
