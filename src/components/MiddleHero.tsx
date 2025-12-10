"use client";

import styles from "./styles/MiddleHero.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/2SLJSZ5EUTDGP1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function MiddleHero() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* =====================================================
            IMAGEN IZQUIERDA (Animación Slide-in)
        ====================================================== */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-section.jpg.webp"
            alt="Como Funciona"
            width={650}
            height={450}
            className={styles.image}
          />
        </motion.div>

        {/* =====================================================
            TEXTOS DERECHA
        ====================================================== */}
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className={styles.smallTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            SOLUCIONES A TU MEDIDA
          </motion.span>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Cómo Funciona
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            En <strong>Cobrando Online</strong> nos encargamos de la
            recuperación de tu cartera de manera ágil y segura. Nuestro proceso
            combina la negociación directa con herramientas jurídicas para
            lograr la recuperación efectiva de tus deudas:
          </motion.p>

          {/* =====================================================
              LISTA CON ANIMACIÓN ESCALONADA (stagger)
          ====================================================== */}
          <motion.ul
            className={styles.list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.18 }}
          >
            {[
              "Análisis del caso: Evaluamos la información y viabilidad del cobro.",
              "Gestión amistosa: Negociamos acuerdos de pago sin necesidad de acciones legales.",
              "Proceso jurídico: Si no hay acuerdo, iniciamos acciones legales.",
              "Seguimiento constante: Te mantenemos informado en cada etapa.",
              "Resultados efectivos: Priorizamos rapidez y efectividad.",
            ].map((item, index) => (
              <motion.li
                key={index}
                className={styles.listItem}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <FontAwesomeIcon icon={faCheckCircle} />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* =====================================================
              BOTÓN ANIMADO
          ====================================================== */}
          <motion.button
            className={styles.button}
            onClick={handleClick}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Empieza Ahora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
