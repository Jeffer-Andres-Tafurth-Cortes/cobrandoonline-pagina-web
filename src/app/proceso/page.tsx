"use client";

import { useState } from "react";
import styles from "./Proceso.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faCircleInfo,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";

/* ================================
   UTILIDAD: FORMATO MILES
================================ */
const formatThousands = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, "");
  return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default function Proceso() {
  const [formData, setFormData] = useState({
    nombre: "",
    tipoPersona: "",
    documento: "",
    correo: "",
    telefono: "",
    valorCartera: "", // con puntos
    observaciones: "",
  });

  // Valor limpio (numérico) para cálculos / contrato
  const [valorCarteraNumber, setValorCarteraNumber] = useState<number>(0);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    // 🎯 Formateo especial para valor de cartera
    if (name === "valorCartera") {
      const formatted = formatThousands(value);

      setFormData({ ...formData, valorCartera: formatted });
      setValorCarteraNumber(Number(formatted.replace(/\./g, "")));
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/message/2SLJSZ5EUTDGP1?autoload=1&app_absent=0",
      "_blank",
    );
  };

  const handleDownloadContract = async () => {
    const response = await fetch("/api/contrato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        valorCartera: valorCarteraNumber, // 👈 valor limpio
      }),
    });

    if (!response.ok) {
      alert("Error generando el contrato");
      return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Contrato_Cobrando_Online.pdf"; // ✅ PDF
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =====================================================
            CONTACTO INICIAL
        ====================================================== */}
        <div className={styles.header}>
          <h1>Inicia tu proceso de recuperación de cartera</h1>

          <p>
            Puedes comunicarte con nosotros vía <strong>WhatsApp</strong> para
            resolver cualquier inquietud. Estamos disponibles para llamadas o
            mensajes.
          </p>

          <div className={styles.highlight}>
            <FontAwesomeIcon icon={faCircleInfo} />
            <span>
              Te ofrecemos una <strong>asesoría gratuita de 15 minutos</strong>{" "}
              para analizar tu caso y orientarte sobre la recuperación de tu
              cartera.
            </span>
          </div>

          <div className={styles.actions}>
            <button className={styles.whatsappBtn} onClick={handleWhatsApp}>
              <FontAwesomeIcon icon={faWhatsapp} />
              Hablar por WhatsApp
            </button>

            <button className={styles.callBtn} onClick={handleWhatsApp}>
              <FontAwesomeIcon icon={faPhone} />
              Llamar
            </button>
          </div>
        </div>

        {/* =====================================================
            FORMULARIO
        ====================================================== */}
        <div className={styles.formSection}>
          <h2>Datos para generar el contrato</h2>

          <form className={styles.form}>
            <div className={styles.field}>
              <label>Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label>Tipo de persona</label>
              <select
                name="tipoPersona"
                value={formData.tipoPersona}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar</option>
                <option value="Natural">Persona Natural</option>
                <option value="Juridica">Persona Jurídica</option>
                <option value="Salud">Entidad de salud</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Documento / NIT</label>
              <input
                type="text"
                name="documento"
                value={formData.documento}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label>Correo electrónico</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label>Valor aproximado de la cartera</label>
              <input
                type="text"
                name="valorCartera"
                placeholder="Ej: $25.000.000"
                value={`$${formData.valorCartera}`}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label>Observaciones (opcional)</label>
              <textarea
                name="observaciones"
                value={formData.observaciones}
                onChange={handleChange}
                rows={4}
              />
            </div>
          </form>

          <div className={styles.contractInfo}>
            <button
              className={styles.downloadBtn}
              onClick={handleDownloadContract}
            >
              <FontAwesomeIcon icon={faFileDownload} />
              Descargar contrato
            </button>

            <small>
              Descarga el contrato, fírmalo y envíalo al correo{" "}
              <strong>contacto@tudominio.com</strong> para iniciar el proceso.
            </small>
          </div>
        </div>

        {/* =====================================================
            CONTINUAR PROCESO
        ====================================================== */}
        <div className={styles.footerAction}>
          <p>
            Si deseas continuar con el proceso, comunícate con nosotros vía
            WhatsApp para realizar el pago correspondiente y dar inicio a la
            gestión de cobro.
          </p>

          <button className={styles.whatsappBtn} onClick={handleWhatsApp}>
            Continuar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
