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
import { contratoHTML } from "@/utils/contratoTemplate";

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
    valorCartera: "",
    observaciones: "",
  });

  const [valorCarteraNumber, setValorCarteraNumber] = useState<number>(0);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

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

  /* ================================
     DESCARGAR CONTRATO (PDF CLIENTE)
  ================================ */
  const handleDownloadContract = async () => {
    const html2pdf = (await import("html2pdf.js")).default;

    const html = contratoHTML({
      nombre: formData.nombre,
      tipoPersona: formData.tipoPersona,
      documento: formData.documento,
      correo: formData.correo,
      telefono: formData.telefono,
      valorCartera: valorCarteraNumber,
    });

    const element = document.createElement("div");
    element.innerHTML = html;

    html2pdf()
      .set({
        margin: 1,
        filename: "Contrato_Cobrando_Online.pdf",
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        html2canvas: {
          scale: 2,
          useCORS: true,
        },
        jsPDF: {
          unit: "cm",
          format: "a4",
          orientation: "portrait",
        },
      })
      .from(element)
      .save();
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =====================================
            HEADER
        ===================================== */}
        <div className={styles.header}>
          <h1>Inicia tu proceso de recuperación de cartera</h1>

          <p>
            Puedes comunicarte con nosotros vía <strong>WhatsApp</strong> para
            resolver cualquier inquietud.
          </p>

          <div className={styles.highlight}>
            <FontAwesomeIcon icon={faCircleInfo} />
            <span>
              Te ofrecemos una <strong>asesoría gratuita de 15 minutos</strong>.
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

        {/* =====================================
            FORMULARIO
        ===================================== */}
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
              Descarga el contrato, fírmalo y envíalo a{" "}
              <strong>contacto@tudominio.com</strong>.
            </small>
          </div>
        </div>

        {/* =====================================
            FOOTER
        ===================================== */}
        <div className={styles.footerAction}>
          <p>
            Para continuar con el proceso, comunícate con nosotros vía WhatsApp.
          </p>

          <button className={styles.whatsappBtn} onClick={handleWhatsApp}>
            Continuar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
