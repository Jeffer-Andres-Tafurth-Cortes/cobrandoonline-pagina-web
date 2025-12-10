"use client";

import styles from "./styles/About.module.css";
import AboutMiddle from "./AboutMiddle";
import Stats from "./Stats";
import FAQ from "./FAQ";
import { motion } from "framer-motion";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/2SLJSZ5EUTDGP1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function About() {
  return (
    <>
      <section className={styles.about}>
        {/* ============================
          IMAGEN IZQUIERDA ANIMADA
      ============================= */}
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/doc-leidy.jpeg" alt="Abogada" />
        </motion.div>

        {/* ============================
          TEXTO + TIMELINE DERECHA
      ============================= */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.small
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            CONÓCENOS
          </motion.small>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            En Cobrando Online, nos apasiona la excelencia en la gestión de
            cobros.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Con más de 23 años de experiencia, somos una plataforma digital
            respaldada por la trayectoria de Pravice Abogados, especializada en
            la recuperación de cartera para empresas. Nuestra labor se basa en
            la transparencia, la honestidad y la eficiencia, ofreciendo
            soluciones personalizadas que garantizan resultados efectivos.
          </motion.p>

          {/* ============================
            TIMELINE CON STAGGER EFFECT
        ============================= */}
          <motion.div
            className={styles.timeline}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                year: "1998",
                title: "Fundación",
                text: "Fundación de Pravice Abogados, especializándose en servicios legales y recuperación de cartera.",
              },
              {
                year: "2005",
                title: "Expansión",
                text: "Expansión de servicios para ofrecer asesoría en múltiples áreas del derecho.",
              },
              {
                year: "2015",
                title: "Digitalización",
                text: "Creación de Cobrando Online, plataforma digital para la gestión eficiente de cobros.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className={styles.dot}></span>
                <strong>{item.year}</strong>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ============================
            BOTÓN ANIMADO
        ============================= */}
          <motion.button
            className={styles.button}
            onClick={handleClick}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Contáctanos
          </motion.button>
        </motion.div>
      </section>
      <AboutMiddle />
      <Stats />
      <FAQ />
    </>
  );
}
