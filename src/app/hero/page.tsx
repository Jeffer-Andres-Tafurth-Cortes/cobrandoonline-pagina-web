"use client";

import React from "react";
import styles from "./Hero.module.css";
import { ReactTyped } from "react-typed";
import Calculator_col from "../../components/calculators/Calculator_col";

const Hero: React.FC = () => {
  return (
    <>
      <section className={styles.hero} id="inicio">
        <div className={styles.leftCal}>
          <span className={styles.smallTitle}>RECUPERA TU CARTERA</span>

          <h1 className={styles.title}>
            Calcula el porcentaje <br />
            de{" "}
            <span className={styles.typedText}>
              <ReactTyped
                strings={["comisión", "recuperación"]}
                typeSpeed={90}
                backSpeed={50}
                loop
              />
            </span>
          </h1>

          <p className={styles.description}>
            Calcula al instante la comisión por la recuperación de cartera.{" "}
            <b>¡Optimiza tus finanzas ahora!</b>
          </p>

          <a href="#calculadora" className={styles.button}>
            ¡Comienza ahora!
          </a>
        </div>

        <div className={styles.rightCal}>
          <Calculator_col />
        </div>
      </section>

      <section className={styles.container}>
        {/* Imagen */}
        <div className={styles.leftDoc}>
          <img
            src="/hero-section.jpg.webp"
            alt="Persona revisando documentos"
            className={styles.image}
          />
        </div>

        {/* Texto */}
        <div className={styles.rightDoc}>
          <p className={styles.smallTitle}>SOLUCIONES A TU MEDIDA</p>

          <h2 className={styles.title}>Cómo Funciona</h2>

          <p className={styles.description}>
            En <strong>Cobrando Online</strong> nos encargamos de la
            recuperación de tu cartera de manera ágil y segura. Nuestro proceso
            combina la negociación directa con herramientas jurídicas para
            lograr la recuperación efectiva de tus deudas.
          </p>

          <ul className={styles.list}>
            <li>
              🔵 <strong>Análisis del caso:</strong> Evaluamos la información de
              la deuda y la viabilidad del cobro.
            </li>
            <li>
              🔵 <strong>Gestión amistosa:</strong> Contactamos al deudor para
              negociar acuerdos sin acciones legales.
            </li>
            <li>
              🔵 <strong>Proceso jurídico:</strong> Si no se logra acuerdo,
              iniciamos acciones legales eficientes.
            </li>
            <li>
              🔵 <strong>Seguimiento constante:</strong> Te mantenemos informado
              en cada etapa.
            </li>
            <li>
              🔵 <strong>Resultados efectivos:</strong> Priorizamos rapidez y
              efectividad para recuperar tu cartera.
            </li>
          </ul>

          <button className={styles.button}>Empieza Ahora</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
