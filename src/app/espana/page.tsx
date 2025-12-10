"use client";

import BenefitsEsp from "@/components/BenefitsEsp";
import Calculator_esp from "../../components/calculators/Calculator_esp";
import styles from "./styles/Espana.module.css";
import { ReactTyped } from "react-typed";
import Categories from "@/components/Categories";
import CallToAction from "./CallToAction";
import Experience from "./Experience";
import { motion } from "framer-motion";

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
        {/* ==============================
            COLUMNA IZQUIERDA ANIMADA
        =============================== */}
        <motion.div
          className={styles.leftCal}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className={styles.smallTitle}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            RECUPERA TU CARTERA
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.45 }}
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.45 }}
          >
            Calcula al instante la comisión por la recuperación de cartera.{" "}
            <b>¡Optimiza tus finanzas ahora!</b>
          </motion.p>

          <motion.button
            className={styles.button}
            onClick={handleClick}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.45 }}
          >
            ¡Comienza ahora!
          </motion.button>
        </motion.div>

        {/* ==============================
            COLUMNA DERECHA (CALCULADORA)
        =============================== */}
        <motion.div
          className={styles.rightCal}
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Calculator_esp />
        </motion.div>
      </section>

      <Categories />

      <Experience />

      <BenefitsEsp />

      <CallToAction />
    </>
  );
}
