"use client";

import { motion } from "framer-motion";
import styles from "./styles/Categories.module.css";

export default function Categories() {
  const items = [
    {
      number: "01",
      title: "Personas Naturales",
      text: "Gestión rápida de cobros con comunicación amistosa y acciones legales si es necesario.",
    },
    {
      number: "02",
      title: "Personas Jurídicas",
      text: "Recuperamos deudas de empresas con negociación directa y acciones legales eficientes.",
    },
    {
      number: "03",
      title: "Entidades de Salud",
      text: "Cobro especializado a entidades de salud, con gestión jurídica acorde a la normativa del sector.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            // Hover effect
            whileHover={{ scale: 1.03 }}
          >
            <span className={styles.number}>{item.number}</span>

            <div className={styles.textBlock}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
