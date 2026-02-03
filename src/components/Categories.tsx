"use client";

import { motion } from "framer-motion";
import styles from "./styles/Categories.module.css";

export default function Categories() {
  const items = [
    {
      number: "01",
      title: "Personas Naturales",
      text: "Brindamos soluciones efectivas para la recuperación de cartera de personas naturales, combinando gestión de cobro amistosa, seguimiento personalizado y acciones legales cuando el caso lo requiere.",
    },
    {
      number: "02",
      title: "Personas Jurídicas",
      text: "Apoyamos a empresas en la recuperación de deudas comerciales mediante negociación estratégica, control de cartera vencida y procesos legales eficientes orientados a resultados.",
    },
    {
      number: "03",
      title: "Entidades de Salud",
      text: "Ofrecemos gestión especializada de cobros a entidades del sector salud, cumpliendo la normativa vigente y aplicando estrategias jurídicas adaptadas a la complejidad del sector.",
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="categories-title">
      <h2 id="categories-title" className={styles.srOnly}>
        Tipos de clientes para recuperación de cartera
      </h2>
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
