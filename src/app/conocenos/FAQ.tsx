"use client";
import { useState } from "react";
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
      <h2 className={styles.title}>Preguntas Frecuentes</h2>

      <p className={styles.description}>
        En <b>Cobrando Online</b> sabemos que recuperar facturas impagadas puede
        generar dudas. Por eso, hemos recopilado las preguntas más frecuentes
        sobre nuestro servicio, proceso de cobro y condiciones. Aquí encontrarás
        toda la información que necesitas para gestionar tus deudas de manera
        rápida y efectiva.
      </p>

      <div className={styles.grid}>
        {/* Columna izquierda */}
        <div className={styles.column}>
          {leftColumn.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => toggleAnswer(index)}
            >
              <div className={styles.cardHeader}>
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {openIndex === index && (
                <div className={styles.answer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Columna derecha */}
        <div className={styles.column}>
          {rightColumn.map((item, index) => {
            const adjustedIndex = index + leftColumn.length;
            return (
              <div
                key={adjustedIndex}
                className={styles.card}
                onClick={() => toggleAnswer(adjustedIndex)}
              >
                <div className={styles.cardHeader}>
                  <span>{item.question}</span>
                  <span className={styles.icon}>
                    {openIndex === adjustedIndex ? "▲" : "▼"}
                  </span>
                </div>

                {openIndex === adjustedIndex && (
                  <div className={styles.answer}>{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
