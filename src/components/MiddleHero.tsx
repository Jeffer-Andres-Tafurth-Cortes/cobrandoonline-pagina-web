"use client";

import styles from "./styles/MiddleHero.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function MiddleHero() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* IMAGEN IZQUIERDA */}
        <div className={styles.imageContainer}>
          <Image
            src="/hero-section.jpg.webp"
            alt="Como Funciona"
            width={650}
            height={450}
            className={styles.image}
          />
        </div>

        {/* TEXTOS DERECHA */}
        <div className={styles.textContainer}>
          <span className={styles.smallTitle}>SOLUCIONES A TU MEDIDA</span>

          <h2 className={styles.title}>Cómo Funciona</h2>

          <p className={styles.description}>
            En <strong>Cobrando Online</strong> nos encargamos de la
            recuperación de tu cartera de manera ágil y segura. Nuestro proceso
            combina la negociación directa con herramientas jurídicas para
            lograr la recuperación efectiva de tus deudas:
          </p>

          <ul className={styles.list}>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              Análisis del caso: Evaluamos la información y viabilidad del
              cobro.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              Gestión amistosa: Negociamos acuerdos de pago sin necesidad de
              acciones legales.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              Proceso jurídico: Si no hay acuerdo, iniciamos acciones legales.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              Seguimiento constante: Te mantenemos informado en cada etapa.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              Resultados efectivos: Priorizamos rapidez y efectividad.
            </li>
          </ul>

          <button className={styles.button}>Empieza Ahora</button>
        </div>
      </div>
    </section>
  );
}
