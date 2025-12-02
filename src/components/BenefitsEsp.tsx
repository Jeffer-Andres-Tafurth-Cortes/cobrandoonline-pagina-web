"use client";

import styles from "./styles/Benefits.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faTools,
  faHandHoldingUsd,
  faCheck,
  faClock,
  faMoneyCheck,
  faFile,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    icon: <FontAwesomeIcon icon={faMoneyCheck} />,
    frontTitle: "Evita la morosidad crónica",
    frontText:
      "Actuamos rápidamente para que las deudas no se prolonguen en el tiempo y afecten tu liquidez.",
    backTitle: "Evita la morosidad crónica",
    backText:
      "No dejes que los impagos se acumulen. Cuanto mas tiempo pase, mas dificil será recuperar tu dinero. Actuamos de inmediato para evitar que las deudas se conviertan en un problema recurrente.",
  },
  {
    icon: <FontAwesomeIcon icon={faTools} />,
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
    icon: <FontAwesomeIcon icon={faComputer} />,
    frontTitle: "Plataforma sencilla e intuitiva",
    frontText:
      "Sube tus facturas impagadas en minutos y deja el proceso en nuestras manos.",
    backTitle: "Plataforma sencilla e intuitiva",
    backText:
      "Olvídate de papeleos y procesos complicados. Nuestra plataforma te permite cargar tus facturas impagadas en minutos y seguir el estado de cada reclamación de forma sencilla y transparente.",
  },
  {
    icon: <FontAwesomeIcon icon={faFile} />,
    frontTitle: "Acceso a informes y seguimiento",
    frontText:
      "Consulta en todo momento el estado de tu reclamación y recibe actualizaciones en tiempo real.",
    backTitle: "Sewer Line Repair",
    backText:
      "En todo momento sabrá el estado de tu reclamación. Te proporcionamos actualizaciones constantes para que tengas el control total del proceso y tomes decisiones informadas.",
  },
  {
    icon: <FontAwesomeIcon icon={faCheck} />,
    frontTitle: "Compatible con cualquier sector",
    frontText:
      "Trabajamos con autónomos, pymes y grandes empresas en todo tipo de industrias.",
    backTitle: "Compatible con cualquier sector",
    backText:
      "No importa si eres autonómo, pyme o gran empresa. Trabajamos con clientes de todos los sectores, desde comercio hasta servicios profesionales, adaptándonos a las particularidades de cada negocio.",
  },
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    frontTitle: "Maximiza tu tiempo y recursos",
    frontText:
      "Deja la gestión de cobrons en manos de expertos y céntrate en hacer crecer tu negocio.",
    backTitle: "Maximiza tu tiempo y recursos",
    backText:
      "En lugar de gastar tu energía persiguiendo a los deudores, déjalo en nuestras manos. Así puedes centrarte en hacer crecer tu empresa sin distracciones ni pérdidas de tiempo.",
  },
  {
    icon: <FontAwesomeIcon icon={faHandHoldingUsd} />,
    frontTitle: "Reducción de costes legales",
    frontText:
      "Te ayudamos a evitar gastos innecesarios en abogados y procedimientos largos cuando no son necesarios.",
    backTitle: "Reducción de costes legales",
    backText:
      "Antes de meterte en juicios largos y costosos, analizamos si la vía extrajudicial puede ser suficiente. Así ahorras en abogados y tasas judiciales innecesarias.",
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
