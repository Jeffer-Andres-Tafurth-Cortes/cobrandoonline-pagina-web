"use client";

import styles from "./styles/MiddleHero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const handleClick = () => {
  window.open("/proceso", "_blank");
};

export default function MiddleHero() {
  return (
    <section className={styles.section} aria-labelledby="como-funciona-title">
      <div className={styles.wrapper}>
        {/* =====================================================
            VIDEO IZQUIERDO (Placeholder)
        ====================================================== */}
        <motion.div
          className={styles.videoContainer}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 
            Aquí luego solo reemplazas este div por:
            <video src="..." controls autoPlay muted loop />
          */}
          <div className={styles.videoPlaceholder}>
            <video
              src="/"
              controls
              muted
              preload="metadata"
              aria-label="Video explicativo del proceso de recuperación de cartera"
            />
          </div>
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
            id="como-funciona-title"
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
            En <strong>Cobrando Online</strong> gestionamos la
            <strong> recuperación de cartera vencida</strong> de forma ágil,
            segura y transparente. Nuestro proceso combina negociación directa,
            gestión prejurídica y herramientas legales para lograr el
            <strong> cobro efectivo de deudas</strong> en personas naturales,
            empresas y entidades del sector salud.
          </motion.p>

          {/* LISTA */}
          <motion.ul
            className={styles.list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.18 }}
          >
            {[
              "Análisis del caso: evaluamos la información y la viabilidad real del cobro.",
              "Gestión amistosa: negociación directa para acuerdos de pago sin procesos judiciales.",
              "Proceso jurídico: activación de acciones legales cuando el caso lo requiere.",
              "Seguimiento constante: información clara y acompañamiento en cada etapa.",
              "Resultados efectivos: rapidez, control y enfoque en la recuperación.",
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

          {/* BOTÓN */}
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
            Iniciar recuperación de cartera
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
