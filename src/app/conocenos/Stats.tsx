"use client";
import { useEffect, useState } from "react";
import styles from "./styles/Stats.module.css";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 21000, label: "Carteras gestionadas" },
  { value: 670, label: "Empresas atendidas" },
  { value: 500, suffix: "B+", label: "Capital recuperado" },
];

export default function Stats() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 4500;
      const increment = Math.ceil(end / 80);

      const timer = setInterval(
        () => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }

          setCounts((prev) => {
            const newValues = [...prev];
            newValues[index] = start;
            return newValues;
          });
        },
        duration / (end / increment),
      );
    });
  }, []);

  return (
    <section
      className={styles.container}
      aria-labelledby="stats-title"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <span className={styles.smallTitle}>
        RESULTADOS QUE RESPALDAN NUESTRA EXPERIENCIA
      </span>

      <h2 id="stats-title" itemProp="name">
        Indicadores de recuperación de cartera
      </h2>

      <p itemProp="description">
        En <strong>Cobrando Online</strong> contamos con una amplia trayectoria
        en la <strong>recuperación de cartera</strong> y{" "}
        <strong>gestión de cobros empresariales</strong>. Estos indicadores
        reflejan el impacto de nuestro trabajo ayudando a empresas en Colombia y
        España a recuperar facturas vencidas, mejorar su flujo de caja y reducir
        la morosidad.
      </p>

      <div className={styles.stats} role="list">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={styles.stat}
            role="listitem"
            itemProp="makesOffer"
          >
            <span className={styles.number} aria-label={stat.label}>
              {formatNumber(counts[index])}
              {stat.suffix || ""}
            </span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function formatNumber(num: number) {
  return num.toLocaleString();
}
