"use client";

import Image from "next/image";
import styles from "./styles/Experience.module.css";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className={styles.experiencia}>
      <div className={styles.wrapper}>
        {/* =======================
           IMAGEN CON ANIMACIÓN
        ======================== */}
        <motion.div
          className={styles.imgBox}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/doc-alberto.jpeg"
            alt="Experto en recuperación de impagos"
            width={500}
            height={300}
            className={styles.img}
          />
        </motion.div>

        {/* =======================
           CONTENEDOR DE TEXTO
        ======================== */}
        <motion.div
          className={styles.texto}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h4
            className={styles.subtitulo}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            EXPERIENCIA CERTIFICADA
          </motion.h4>

          <motion.h2
            className={styles.titulo}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            ⚖️ Expertos en Recuperación de Impagos
          </motion.h2>

          <motion.p
            className={styles.descripcion}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            En Cobrando Online ayudamos a empresas y autónomos a recuperar
            facturas impagadas de forma legal, rápida y efectiva. Sabemos lo
            importante que es mantener la liquidez de tu negocio, por eso nos
            encargamos de gestionar el cobro de deudas de manera profesional,
            respetando siempre la normativa vigente y sin afectar la relación
            con tus clientes.
          </motion.p>

          {/* =======================
            LISTA CON *STAGGER*
          ======================== */}
          <motion.ul
            className={styles.lista}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[
              "Sin adelantos ni pagos iniciales — Solo cobramos cuando recuperamos tu dinero.",
              "Gestión 100% online — Envía tu caso desde cualquier lugar.",
              "Experiencia y legalidad — Estrategias conforme a la legislación española.",
              "Negociación efectiva — Acuerdos amistosos reduciendo tiempos y costes.",
              "Máxima transparencia — Sin letra pequeña ni sorpresas.",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
