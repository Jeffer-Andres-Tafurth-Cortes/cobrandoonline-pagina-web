"use client";

import Image from "next/image";
import styles from "./styles/Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experiencia}>
      <div className={styles.wrapper}>
        <div className={styles.imgBox}>
          <Image
            src="/doc-alberto.jpeg"
            alt="Experto en recuperación de impagos"
            width={500}
            height={300}
            className={styles.img}
          />
        </div>

        <div className={styles.texto}>
          <h4 className={styles.subtitulo}>EXPERIENCIA CERTIFICADA</h4>

          <h2 className={styles.titulo}>
            ⚖️ Expertos en Recuperación de Impagos
          </h2>

          <p className={styles.descripcion}>
            En Cobrando Online ayudamos a empresas y autónomos a recuperar
            facturas impagadas de forma legal, rápida y efectiva. Sabemos lo
            importante que es mantener la liquidez de tu negocio, por eso nos
            encargamos de gestionar el cobro de deudas de manera profesional,
            respetando siempre la normativa vigente y sin afectar la relación
            con tus clientes.
          </p>

          <ul className={styles.lista}>
            <li>
              Sin adelantos ni pagos iniciales — Solo cobramos cuando
              recuperamos tu dinero.
            </li>
            <li>Gestión 100% online — Envía tu caso desde cualquier lugar.</li>
            <li>
              Experiencia y legalidad — Estrategias conforme a la legislación
              española.
            </li>
            <li>
              Negociación efectiva — Acuerdos amistosos reduciendo tiempos y
              costes.
            </li>
            <li>Máxima transparencia — Sin letra pequeña ni sorpresas.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
