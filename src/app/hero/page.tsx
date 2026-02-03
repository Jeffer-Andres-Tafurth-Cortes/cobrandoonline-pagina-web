"use client";

import styles from "./Hero.module.css";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Calculator_col from "../../components/calculators/Calculator_col";

function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      {/* ===========================
          COLUMNA IZQUIERDA
      ============================ */}
      <motion.div
        className={styles.leftCal}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className={styles.smallTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Recuperación de cartera en Colombia
        </motion.span>

        <motion.h1
          id="hero-title"
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Calcula el porcentaje <br />
          de{" "}
          <span className={styles.typedText} aria-hidden="true">
            <ReactTyped
              strings={["comisión", "recuperación"]}
              typeSpeed={90}
              backSpeed={50}
              loop
            />
          </span>
          <span className="sr-only">por cartera</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Calcula de forma rápida y transparente la{" "}
          <strong>comisión por recuperación de cartera</strong> según el monto
          adeudado. Nuestra herramienta te permite estimar costos, optimizar tus
          finanzas y tomar decisiones informadas sin complicaciones.
        </motion.p>

        <motion.a
          href="#calculadora"
          className={styles.button}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          title="Calcular comisión por recuperación de cartera"
          aria-label="Ir a la calculadora de recuperación de cartera"
        >
          ¡Comienza ahora!
        </motion.a>
      </motion.div>

      {/* ===========================
          COLUMNA DERECHA
      ============================ */}
      <motion.div
        className={styles.rightCal}
        id="calculadora"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        itemScope
        itemType="https://schema.org/FinancialProduct"
      >
        <meta
          itemProp="name"
          content="Calculadora de recuperación de cartera"
        />
        <meta
          itemProp="description"
          content="Herramienta para calcular la comisión por recuperación de cartera en Colombia"
        />

        <Calculator_col />
      </motion.div>
    </section>
  );
}

export default Hero;
