"use client";

import React, { useState } from "react";
import styles from "./Calculator_col.module.css";

const Calculator_col: React.FC = () => {
  const [amount, setAmount] = useState<number | "">("");
  const [days, setDays] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (!amount || !days) return;

    // Ejemplo de fórmula (puedes cambiarla después)
    const percentage = amount * 0.02 + days * 0.1;
    setResult(percentage);
  };

  return (
    <div className={styles.card} id="calculadora">
      <h2 className={styles.title}>Calculadora de Costos</h2>

      <label>Monto adeudado ($):</label>
      <input
        className={styles.input}
        type="number"
        placeholder="Ingrese el monto"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <label className={styles.label}>Días de mora:</label>
      <input
        className={styles.input}
        type="number"
        placeholder="Ingrese los días de mora"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
      />

      <button className={styles.button} onClick={handleCalculate}>
        Calcular
      </button>

      {result !== null && (
        <p className={styles.result}>
          Resultado: <b>${result.toFixed(2)}</b>
        </p>
      )}
    </div>
  );
};

export default Calculator_col;
