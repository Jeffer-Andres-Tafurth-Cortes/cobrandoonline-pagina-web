"use client";

import { useState } from "react";
import styles from "./Contactanos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "573234372766";

    const text = `Nuevo mensaje desde el formulario:
Nombre: ${nombre}
Correo: ${correo}
Mensaje: ${mensaje}`;

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className={styles.section}>
      {/* Título grande */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Contacto</h1>
        <p>
          Si tienes dudas o necesitas ayuda con la recuperación de tus facturas,
          nuestro equipo está listo para asesorarte. Escríbenos y gestionaremos
          tus cobros de manera ágil y efectiva.
        </p>
      </motion.div>

      {/* Contenido de 2 columnas */}
      <div className={styles.container}>
        {/* Columna izquierda */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subTitle}>CONTÁCTANOS</span>
          <h2>¿Necesitas Recuperar Tu Cartera?</h2>

          <p className={styles.text}>
            Si tienes dudas o necesitas ayuda con la recuperación de tus
            facturas, nuestro equipo está listo para asesorarte. Escríbenos y te
            ayudaremos a gestionar tus cobros de manera rápida y efectiva.
          </p>

          {/* Info items con animación */}
          <motion.div
            className={styles.infoItem}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <div>
              <p className={styles.label}>Teléfono:</p>
              <p className={styles.data}>+57 - (323) 437 - 2766</p>
            </div>
          </motion.div>

          <motion.div
            className={styles.infoItem}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <div>
              <p className={styles.label}>Correo electronico:</p>
              <p className={styles.data}>info.pravice@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            className={styles.infoItem}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            <div>
              <p className={styles.label}>Ubicación:</p>
              <p className={styles.data}>Calle 98 # 22 - 64 Of 716 · Bogotá</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Formulario */}
        <motion.form
          className={styles.form}
          onSubmit={enviarWhatsApp}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Correo electronico</label>
            <input
              type="email"
              placeholder="Tu correo electronico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Mensaje</label>
            <textarea
              placeholder="Escribe un mensaje aqui..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </div>

          <motion.button
            type="submit"
            className={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Enviar Mensaje
          </motion.button>
        </motion.form>
      </div>

      <motion.div
        className={styles.mapWrapper}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className={styles.mapTitle}>Nuestra oficina</h3>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}
