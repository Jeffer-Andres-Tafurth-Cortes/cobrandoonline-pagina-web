"use client";

import { useState } from "react";
import styles from "./Calculator_col.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";

function Calculator_col() {
  const [amountFormatted, setAmountFormatted] = useState("");
  const [amount, setAmount] = useState<number | null>(null);
  const [days, setDays] = useState<number | "">("");
  const [commission, setCommission] = useState<number | null>(null);

  /* ================================
     UTILIDADES
  ================================ */

  const formatCurrency = (value: number) =>
    value.toLocaleString("es-CO", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const parseCurrency = (value: string) => Number(value.replace(/\./g, ""));

  /* ================================
     HANDLERS
  ================================ */

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    if (!raw) {
      setAmountFormatted("");
      setAmount(null);
      setCommission(null);
      return;
    }

    const numeric = parseCurrency(raw);
    setAmount(numeric);
    setAmountFormatted(formatCurrency(numeric));
  };

  const handleCalculate = () => {
    if (!amount || !days) return;

    // 📌 Comisión aproximada (25%)
    const estimatedCommission = amount * 0.25;
    setCommission(estimatedCommission);
  };

  /* ================================
     RENDER
  ================================ */

  return (
    <div className={styles.card} id="calculadora">
      <h2 className={styles.title}>Calculadora de Comisión</h2>

      <label>Monto adeudado ($):</label>
      <input
        className={styles.input}
        type="text"
        inputMode="numeric"
        placeholder="Ej: 2.500.000"
        value={amountFormatted}
        onChange={handleAmountChange}
      />

      <label className={styles.label}>Días de mora:</label>
      <input
        className={styles.input}
        type="number"
        placeholder="Ej: 90"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
      />

      <button className={styles.button} onClick={handleCalculate}>
        Calcular aproximado
      </button>

      {amount && commission !== null && (
        <div className={styles.resultBox}>
          <p className={styles.resultItem}>
            <span>
              <FontAwesomeIcon icon={faMoneyCheck} /> Total de la deuda:&nbsp;
            </span>
            <b>${formatCurrency(amount)}</b>
          </p>

          <p className={styles.resultItem}>
            <span>
              <FontAwesomeIcon icon={faBalanceScale} /> Comisión
              aproximada:&nbsp;
            </span>
            <b>${formatCurrency(commission)}</b>
          </p>

          <p className={styles.note}>
            * Este valor es un cálculo estimado y puede variar.
          </p>
        </div>
      )}
    </div>
  );
}

export default Calculator_col;
