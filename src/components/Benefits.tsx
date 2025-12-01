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
    frontTitle: "Gestión profesional",
    frontText: "Tu cartera en manos expertas.",
    backTitle: "Gestión profesional",
    backText:
      "Contamos con especialistas en recuperación de cartera que siguen procesos legales y éticos. garantizando una gestión eficiente sin afectar las relación con tus clientes.",
  },

  {
    icon: <FontAwesomeIcon icon={faClock} />,
    frontTitle: "Ahorro de tiempo",
    frontText: "Nos encargamos, tú te enfocas en tu negocio.",
    backTitle: "Ahorro de tiempo",
    backText:
      "Delegar la cobranza te permite dedicar más tiempo a tu actividad principal, mientras nosotros nos encargamos de agilizar el proceso de recuperación.",
  },

  {
    icon: <FontAwesomeIcon icon={faCheckCircle} />,
    frontTitle: "Alta tasa de éxito",
    frontText: "Más pagos, menos preocupaciones.",
    backTitle: "Alta tasa de éxito",
    backText:
      "Aplicamos estrategias efectivas que aumentan la probabilidad de recuperar la cartera, adaptándonos a cada caso con soluciones personalizadas.",
  },

  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    frontTitle: "Plataforma online 24/7",
    frontText: "Todo el proceso al alcance de un clic.",
    backTitle: "Plataforma online 24/7",
    backText:
      "Nuestra plataforma digital te permite gestionar tus cobros, hacer seguimientos y recibir reportes actualizados, todo desde cualquier dispositivo.",
  },

  {
    icon: <FontAwesomeIcon icon={faHandHoldingUsd} />,
    frontTitle: "Sin pagos por adelantado",
    frontText: "Ganas solo si nosotros ganamos.",
    backTitle: "Sin pagos por adelantado",
    backText:
      "Solo cobramos si logramos recuperar tu dinero, lo que garantiza nuestro compromiso con resultados efectivos.",
  },

  {
    icon: <FontAwesomeIcon icon={faBalanceScale} />,
    frontTitle: "Proceso legal transparente",
    frontText: "Todo bajo la normativa vigente.",
    backTitle: "Proceso legal transparente",
    backText:
      "Nuestras gestiones cumplen con la legislacion vigente, evitando riesgos legales y protegiendo la reputación de tu empresa.",
  },

  {
    icon: <FontAwesomeIcon icon={faUserCog} />,
    frontTitle: "Asesoramiento personalizado",
    frontText: "Acompañamiento en cada etapa del proceso.",
    backTitle: "Asesoramiento personalizado",
    backText:
      "Brindamos asesoría legal y financiera adaptada a las necesidades de tu negocio, para ayudarte a tomar las mejores decisiones.",
  },

  {
    icon: <FontAwesomeIcon icon={faChartLine} />,
    frontTitle: "Mejora del flujo de caja",
    frontText: "Recupera tu dinero y estabiliza tu negocio.",
    backTitle: "Mejora del flujo de caja",
    backText:
      "La recuperación de cartea mejora la liquidez de tu empresa, permitiéndote mantener un flujo de caja saludable para el crecimiento de tu negocio.",
  },
];

export default function Benefits() {
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
