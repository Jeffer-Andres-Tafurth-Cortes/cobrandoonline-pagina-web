"use client";
import { useEffect, useState } from "react";
import styles from "./styles/Stats.module.css";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 21000, label: "Carteras recibidas" },
  { value: 670, label: "Clientes" },
  { value: 500, suffix: "B+", label: "Capital recuperado" },
];

export default function Stats() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 5000;
      const increment = Math.ceil(end / 80);

      const timer = setInterval(() => {
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
      }, duration / (end / increment));
    });
  }, []);

  return (
    <section className={styles.container}>
      <span className={styles.smallTitle}>HISTORIA DE LA COMPAÑÍA</span>
      <h2>Datos curiosos de la empresa</h2>
      <p>
        Cobrando Online es una plataforma especializada en la gestión de cobros
        en Colombia y España, diseñada para ayudar a empresas a recuperar sus
        facturas pendientes de manera rápida y efectiva.
      </p>

      <div className={styles.stats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.stat}>
            <span className={styles.number}>
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
