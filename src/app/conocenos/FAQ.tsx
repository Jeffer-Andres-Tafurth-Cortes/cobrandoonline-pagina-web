"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/FAQ.module.css";

interface Question {
  question: string;
  answer: string;
}

const leftColumn: Question[] = [
  {
    question: "¿Qué es Cobrando Online?",
    answer:
      "Cobrando Online es una plataforma especializada en la gestión de cobros en España, ayudando a empresas a recuperar facturas impagadas de forma rápida, segura y 100% digital.",
  },
  {
    question: "¿Cómo funciona el proceso de cobro?",
    answer:
      "El proceso es simple: registras tu deuda en nuestra plataforma, evaluamos el caso y ponemos en marcha la recuperación mediante negociaciones estratégicas o acciones legales, si es necesario.",
  },
  {
    question: "¿Cuánto tiempo tarda en recuperarse una deuda?",
    answer:
      "El tiempo varía según el caso, pero nuestro objetivo es obtener resultados lo antes posible. En muchos casos, las gestiones extrajudiciales logran acuerdos en pocas semanas.",
  },
  {
    question: "¿Cuáles son los costos del servicio?",
    answer:
      "Trabajamos con un modelo flexible y transparente. Solo cobramos una comisión sobre el monto recuperado, sin costos iniciales ni pagos adelantados.",
  },
];

const rightColumn: Question[] = [
  {
    question: "¿Qué tipo de deudas puedo gestionar en Cobrando Online?",
    answer:
      "Gestionamos deudas comerciales entre empresas (B2B) y profesionales, incluyendo facturas impagadas y otros créditos pendientes.",
  },
  {
    question: "¿Qué pasa si el deudor no paga voluntariamente?",
    answer:
      "Si la vía amistosa no da resultados, evaluamos acciones legales viables y acompañamos a nuestros clientes en el proceso judicial si así lo requieren.",
  },
  {
    question: "¿Puedo hacer seguimiento de mi caso?",
    answer:
      "Sí, en nuestra plataforma puedes consultar el estado de tu gestión en cualquier momento y recibir actualizaciones sobre el proceso.",
  },
  {
    question: "¿Qué garantías tengo de éxito en la recuperación de mi deuda?",
    answer:
      "Si bien cada caso es diferente, nuestro equipo tiene experiencia y estrategias efectivas para maximizar la probabilidad de cobro. Además, al trabajar por comisión de éxito, nos enfocamos en obtener resultados.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <p className={styles.subtitle}>FAQ</p>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Preguntas Frecuentes
      </motion.h2>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        En <b>Cobrando Online</b> sabemos que recuperar facturas impagadas puede
        generar dudas. Por eso, hemos recopilado las preguntas más frecuentes
        sobre nuestro servicio, proceso de cobro y condiciones.
      </motion.p>

      <div className={styles.grid}>
        {/* COLUMNA IZQUIERDA */}
        <div className={styles.column}>
          {leftColumn.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              onClick={() => toggleAnswer(index)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className={styles.answer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* COLUMNA DERECHA */}
        <div className={styles.column}>
          {rightColumn.map((item, index) => {
            const adjustedIndex = index + leftColumn.length;

            return (
              <motion.div
                key={adjustedIndex}
                className={styles.card}
                onClick={() => toggleAnswer(adjustedIndex)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: (index + 4) * 0.1,
                }}
              >
                <div className={styles.cardHeader}>
                  <span>{item.question}</span>
                  <span className={styles.icon}>
                    {openIndex === adjustedIndex ? "▲" : "▼"}
                  </span>
                </div>

                <AnimatePresence>
                  {openIndex === adjustedIndex && (
                    <motion.div
                      className={styles.answer}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
