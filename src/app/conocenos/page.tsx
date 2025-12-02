"use client";

import Image from "next/image";
import styles from "./styles/About.module.css";
import AboutMiddle from "./AboutMiddle";
import Stats from "./Stats";
import FAQ from "./FAQ";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/2SLJSZ5EUTDGP1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.image}>
          <img src="/doc-leidy.jpeg" alt="Abogada" />
        </div>

        <div className={styles.content}>
          <small>CONÓCENOS</small>

          <h2>
            En Cobrando Online, nos apasiona la excelencia en la gestión de
            cobros.
          </h2>

          <p>
            Con más de 23 años de experiencia, somos una plataforma digital
            respaldada por la trayectoria de Pravice Abogados, especializada en
            la recuperación de cartera para empresas. Nuestra labor se basa en
            la transparencia, la honestidad y la eficiencia, ofreciendo
            soluciones personalizadas que garantizan resultados efectivos.
          </p>

          <div className={styles.timeline}>
            <div className={styles.item}>
              <span className={styles.dot}></span>
              <strong>1998</strong>
              <h4>Fundación</h4>
              <p>
                Fundación de Pravice Abogados, especializándose en servicios
                legales y recuperación de cartera.
              </p>
            </div>

            <div className={styles.item}>
              <span className={styles.dot}></span>
              <strong>2005</strong>
              <h4>Expansión</h4>
              <p>
                Expansión de servicios para ofrecer asesoría en múltiples áreas
                del derecho.
              </p>
            </div>

            <div className={styles.item}>
              <span className={styles.dot}></span>
              <strong>2015</strong>
              <h4>Digitalización</h4>
              <p>
                Creación de Cobrando Online, plataforma digital para la gestión
                eficiente de cobros.
              </p>
            </div>
          </div>

          <button className={styles.button} onClick={handleClick}>
            Contáctanos
          </button>
        </div>
      </section>
      <AboutMiddle />
      <Stats />
      <FAQ />
    </>
  );
}
