"use client";

import styles from "./styles/AboutMiddle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/2SLJSZ5EUTDGP1?autoload=1&app_absent=0",
    "_blank",
  );
};

export default function AboutMiddle() {
  return (
    <section className={styles.hero}>
      {/* ==============================
          PANEL IZQUIERDO ANIMADO
      =============================== */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <FontAwesomeIcon icon={faClock} /> SOLUCIONES DE COBRANZA EMPRESARIAL
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.45 }}
        >
          ¿Tienes pagos vencidos que afectan el flujo de caja de tu empresa?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.45 }}
        >
          En <strong>Cobrando Online</strong> somos especialistas en
          recuperación de cartera y gestión de cobros para empresas. Nos
          encargamos del seguimiento y la negociación de pagos pendientes
          mediante procesos éticos, legales y estratégicos, ayudándote a
          recuperar tu dinero sin deteriorar la relación con tus clientes.
        </motion.p>

        {/* LISTA CON ANIMACIÓN EN CASCADA */}
        <motion.ul
          className={styles.list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            "Recuperación de cartera rápida, segura y profesional",
            "Modelo de cobro sin pagos anticipados ni costos ocultos",
            "Gestión de cobranza respetuosa y alineada a la normativa legal",
          ].map((text, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <FontAwesomeIcon icon={faCheckCircle} /> {text}
            </motion.li>
          ))}
        </motion.ul>

        <motion.strong
          className={styles.textBold}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.4 }}
        >
          Recupera tu cartera vencida con el respaldo de expertos en cobranza.
        </motion.strong>

        <motion.button
          className={styles.button}
          onClick={handleClick}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.92 }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85, duration: 0.45 }}
        >
          Solicita tu recuperación de cartera
        </motion.button>
      </motion.div>

      {/* ==============================
          IMAGEN DERECHA ANIMADA
      =============================== */}
      <motion.div
        className={styles.image}
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/about-middle.webp"
          alt="Equipo especializado en recuperación de cartera y gestión de cobros empresariales"
        />
      </motion.div>
    </section>
  );
}
