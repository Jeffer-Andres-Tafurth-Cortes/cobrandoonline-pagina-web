"use client";

import styles from "./styles/Benefits.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faClock,
  faCheckCircle,
  faGlobe,
  faHandHoldingUsd,
  faBalanceScale,
  faUserCog,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    icon: <FontAwesomeIcon icon={faUserTie} />,
    frontTitle: "Evita la morosidad crónica",
    frontText:
      "Actuamos rápidamente para que las deudas no se prolonguen en el tiempo y afecten tu liquidez.",
    backTitle: "Evita la morosidad crónica",
    backText:
      "No dejes que los impagos se acumulen. Cuanto mas tiempo pase, mas dificil será recuperar tu dinero. Actuamos de inmediato para evitar que las deudas se conviertan en un problema recurrente.",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} />,
    frontTitle: "Especialistas en cobros dificiles",
    frontText:
      "Contamos con estrategias efectivas para tratar con deudores reincidentes o que eviten el pago.",
    backTitle: "Especialistas en cobros dificiles",
    backText:
      "No todos los deudores responden igual. Contamos con estrategias específicas para tratar con empresas y particulares que intentan esquivar sus obligaciones de pago, maximizando las probabilidades de recuperación.",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} />,
    frontTitle: "Sin afectar la relación con tus clientes",
    frontText:
      "Gestionamos el cobro de manera profesional, preservando la imagen de tu negocio",
    backTitle: "Sin afectar la relación con tus clientes",
    backText:
      "Sabemos la importancia que es mantener buenas relaciones comerciales. Gestionamos el cobro de manera profesional y respetuosa para que puedas seguir haciendo negocios con tus clientes sin tensiones innecesarias.",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} />,
    frontTitle: "Plataforma sencilla e intuitiva",
    frontText: "",
    backTitle: "Plataforma sencilla e intuitiva",
    backText: "",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} />,
    frontTitle: "",
    frontText: "",
    backTitle: "",
    backText: "",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} />,
    frontTitle: "",
    frontText: "",
    backTitle: "",
    backText: "",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} />,
    frontTitle: "",
    frontText: "",
    backTitle: "",
    backText: "",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} />,
    frontTitle: "",
    frontText: "",
    backTitle: "",
    backText: "",
  },
];

export default function BenefitsEsp() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Confianza que se refleja en resultados</h2>
      <p className={styles.subtitle}>
        Conoce las experiencias de quienes han recuperado su cartera con nuestro
        acompañamiento.
      </p>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.inner}>
              {/* FRONT */}
              <div className={styles.front}>
                <span className={styles.icon}>{item.icon}</span>
                <h3>{item.frontTitle}</h3>
                <p>{item.frontText}</p>
              </div>

              {/* BACK */}
              <div className={styles.back}>
                <h3>{item.backTitle}</h3>
                <p>{item.backText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
