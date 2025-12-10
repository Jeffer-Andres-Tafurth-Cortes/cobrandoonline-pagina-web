"use client";

import React from "react";
import styles from "./Hero.module.css";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Calculator_col from "../../components/calculators/Calculator_col";

const Hero: React.FC = () => {
  return (
    <>
      <section className={styles.hero} id="inicio">
        {/* =====================================================
            COLUMNA IZQUIERDA (Texto + CTA)
        ====================================================== */}
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
            RECUPERA TU CARTERA
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
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
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Calcula al instante la comisión por la recuperación de cartera.{" "}
            <b>¡Optimiza tus finanzas ahora!</b>
          </motion.p>

          <motion.a
            href="#calculadora"
            className={styles.button}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            ¡Comienza ahora!
          </motion.a>
        </motion.div>

        {/* =====================================================
            COLUMNA DERECHA (Calculadora)
        ====================================================== */}
        <motion.div
          className={styles.rightCal}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        >
          <Calculator_col />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
