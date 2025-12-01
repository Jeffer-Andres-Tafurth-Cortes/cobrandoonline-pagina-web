"use client";

import BenefitsEsp from "@/components/BenefitsEsp";
import Calculator_esp from "../../components/calculators/Calculator_esp";
import styles from "./Espana.module.css";
import { ReactTyped } from "react-typed";
import Categories from "@/components/Categories";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/2SLJSZ5EUTDGP1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function Espana() {
  return (
    <>
      {/* =====================================================
        SECCIÓN PRINCIPAL (Hero + Calculadora)
      ====================================================== */}
      <section className={styles.hero} id="inicio">
        {/* Columna izquierda: texto + CTA */}
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

          <button onClick={handleClick} className={styles.button}>
            ¡Comienza ahora!
          </button>
        </div>

        {/* Columna derecha: calculadora */}
        <div className={styles.rightCal}>
          <Calculator_esp />
        </div>
      </section>

      <Categories />

      <BenefitsEsp />
    </>
  );
}
