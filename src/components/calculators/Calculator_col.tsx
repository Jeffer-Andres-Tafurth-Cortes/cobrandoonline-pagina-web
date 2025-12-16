"use client";

import { useState } from "react";
import styles from "./Calculator_col.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";

function Calculator_col() {
  const [amount, setAmount] = useState<number | "">("");
  const [days, setDays] = useState<number | "">("");
  const [totalToPay, setTotalToPay] = useState<number | null>(null);
  const [commission, setCommission] = useState<number | null>(null);

  const handleCalculate = () => {
    if (!amount || !days) return;

    // 🧮 Fórmulas personalizables
    const total = amount * 1.015; // +1.5%
    const comision = total * 0.2; // 20%

    setTotalToPay(total);
    setCommission(comision);
  };

  // Formatear con separador de miles
  const formatCurrency = (value: number) =>
    value.toLocaleString("es-CO", { minimumFractionDigits: 2 });

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

      {totalToPay !== null && (
        <div className={styles.resultBox}>
          <p className={styles.resultItem}>
            <span>
              <FontAwesomeIcon icon={faMoneyCheck} /> Total a pagar:&nbsp;
            </span>
            <b>${formatCurrency(totalToPay)}</b>
          </p>

          <p className={styles.resultItem}>
            <span>
              <FontAwesomeIcon icon={faBalanceScale} /> Comisión Cobrando
              Online:&nbsp;
            </span>
            <b>${formatCurrency(commission!)}</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default Calculator_col;
