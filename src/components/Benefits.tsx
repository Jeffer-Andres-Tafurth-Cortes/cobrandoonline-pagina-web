"use client";

import { motion } from "framer-motion";
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
      "Contamos con especialistas en recuperación de cartera que siguen procesos legales y éticos, garantizando eficiencia sin afectar la relación con tus clientes.",
  },
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    frontTitle: "Ahorro de tiempo",
    frontText: "Nos encargamos, tú te enfocas en tu negocio.",
    backTitle: "Ahorro de tiempo",
    backText:
      "Delegar la cobranza te permite dedicar más tiempo a tu actividad principal, mientras nosotros aceleramos la recuperación.",
  },
  {
    icon: <FontAwesomeIcon icon={faCheckCircle} />,
    frontTitle: "Alta tasa de éxito",
    frontText: "Más pagos, menos preocupaciones.",
    backTitle: "Alta tasa de éxito",
    backText:
      "Aplicamos estrategias efectivas que aumentan la probabilidad de recuperar cartera, con soluciones personalizadas.",
  },
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    frontTitle: "Plataforma online 24/7",
    frontText: "Todo el proceso al alcance de un clic.",
    backTitle: "Plataforma online 24/7",
    backText:
      "Gestiona tus cobros y consulta reportes actualizados desde cualquier dispositivo gracias a nuestra plataforma en línea.",
  },
  {
    icon: <FontAwesomeIcon icon={faHandHoldingUsd} />,
    frontTitle: "Sin pagos por adelantado",
    frontText: "Ganas solo si nosotros ganamos.",
    backTitle: "Sin pagos por adelantado",
    backText:
      "Solo cobramos si recuperamos tu dinero, garantizando nuestro compromiso con resultados reales.",
  },
  {
    icon: <FontAwesomeIcon icon={faBalanceScale} />,
    frontTitle: "Proceso legal transparente",
    frontText: "Todo bajo normativa vigente.",
    backTitle: "Proceso legal transparente",
    backText:
      "Cumplimos con toda la legislación vigente, protegiendo tu empresa de riesgos legales.",
  },
  {
    icon: <FontAwesomeIcon icon={faUserCog} />,
    frontTitle: "Asesoramiento personalizado",
    frontText: "Acompañamiento en cada etapa.",
    backTitle: "Asesoramiento personalizado",
    backText:
      "Brindamos asesoría legal y financiera adaptada a tu negocio para mejores decisiones.",
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} />,
    frontTitle: "Mejora del flujo de caja",
    frontText: "Recupera tu dinero y fortalece tu empresa.",
    backTitle: "Mejora del flujo de caja",
    backText:
      "La recuperación de cartera mejora tu liquidez y la estabilidad financiera de tu negocio.",
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
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: i * 0.12,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
