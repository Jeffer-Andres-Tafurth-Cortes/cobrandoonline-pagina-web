"use client";
import styles from "./styles/CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.hero}>
      {/* Capa de oscurecimiento */}
      <div className={styles.overlay}></div>

      {/* Contenido centrado */}
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

        <a href="#contacto" className={styles.button}>
          Contáctanos
        </a>
      </div>
    </section>
  );
}
