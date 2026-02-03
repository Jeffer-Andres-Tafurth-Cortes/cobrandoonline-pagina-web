"use client";

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
import styles from "./styles/Benefits.module.css";

const items = [
  {
    icon: faUserTie,
    title: "Gestión profesional",
    subtitle: "Cobranza experta y estructurada",
    highlights: [
      "Cobranza ética y controlada",
      "Gestión prejurídica y jurídica",
    ],
    description:
      "Nuestro equipo especializado administra tu cartera con procesos profesionales de cobranza ética, negociación estratégica y acciones legales controladas, maximizando la recuperación sin afectar la relación con tus clientes.",
  },
  {
    icon: faClock,
    title: "Ahorro de tiempo",
    subtitle: "Nosotros cobramos por ti",
    highlights: ["Menos carga operativa", "Recuperación más rápida"],
    description:
      "Al delegar la cobranza, liberas tiempo y recursos internos. Nos encargamos del seguimiento completo mientras tú te enfocas en hacer crecer tu negocio.",
  },
  {
    icon: faCheckCircle,
    title: "Alta tasa de éxito",
    subtitle: "Estrategias que funcionan",
    highlights: ["Casos personalizados", "Mayor probabilidad de pago"],
    description:
      "Aplicamos estrategias ajustadas a cada tipo de deudor, aumentando significativamente la probabilidad de recuperación de cartera.",
  },
  {
    icon: faGlobe,
    title: "Plataforma online 24/7",
    subtitle: "Control total en tiempo real",
    highlights: ["Acceso desde cualquier lugar", "Reportes actualizados"],
    description:
      "Consulta el estado de tus casos, pagos y reportes desde cualquier dispositivo a través de nuestra plataforma digital disponible las 24 horas.",
  },
  {
    icon: faHandHoldingUsd,
    title: "Sin pagos por adelantado",
    subtitle: "Resultados primero",
    highlights: ["Sin costos iniciales", "Modelo basado en éxito"],
    description:
      "Solo cobramos honorarios cuando logramos recuperar tu dinero, alineando nuestro trabajo directamente con tus resultados.",
  },
  {
    icon: faBalanceScale,
    title: "Proceso legal transparente",
    subtitle: "Cumplimiento normativo",
    highlights: ["Marco legal vigente", "Gestión documentada"],
    description:
      "Todos nuestros procesos cumplen estrictamente con la legislación vigente, reduciendo riesgos legales y protegiendo tu empresa.",
  },
  {
    icon: faUserCog,
    title: "Asesoramiento personalizado",
    subtitle: "Acompañamiento experto",
    highlights: ["Análisis de tu cartera", "Decisiones informadas"],
    description:
      "Brindamos asesoría legal y financiera adaptada a la realidad de tu negocio para optimizar decisiones y resultados.",
  },
  {
    icon: faChartLine,
    title: "Mejora del flujo de caja",
    subtitle: "Liquidez para crecer",
    highlights: ["Ingresos recuperados", "Mayor estabilidad financiera"],
    description:
      "La recuperación efectiva de cartera impacta directamente en tu liquidez, fortaleciendo la estabilidad y proyección financiera de tu empresa.",
  },
];

export default function Benefits() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.inner}>
              {/* Front */}
              <div className={styles.front}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p className={styles.subtitle}>{item.subtitle}</p>
                <ul>
                  {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Back */}
              <div className={styles.back}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
