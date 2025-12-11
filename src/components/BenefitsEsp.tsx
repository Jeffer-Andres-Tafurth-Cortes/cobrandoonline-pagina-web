"use client";

import { motion } from "framer-motion";
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
      "No todos los deudores responden igual. Contamos con estrategias específicas para tratar con empresas y particulares que intentan esquivar sus obligaciones de pago.",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} />,
    frontTitle: "Sin afectar la relación con tus clientes",
    frontText:
      "Gestionamos el cobro de manera profesional, preservando la imagen de tu negocio",
    backTitle: "Sin afectar la relación con tus clientes",
    backText:
      "Sabemos lo importante que es mantener buenas relaciones comerciales. Gestionamos el cobro de manera profesional y respetuosa.",
  },
  {
    icon: <FontAwesomeIcon icon={faComputer} />,
    frontTitle: "Plataforma sencilla e intuitiva",
    frontText:
      "Sube tus facturas impagadas en minutos y deja el proceso en nuestras manos.",
    backTitle: "Plataforma sencilla e intuitiva",
    backText:
      "Nuestra plataforma te permite cargar facturas en minutos y seguir el estado de cada reclamación de forma sencilla.",
  },
  {
    icon: <FontAwesomeIcon icon={faFile} />,
    frontTitle: "Acceso a informes y seguimiento",
    frontText:
      "Consulta en todo momento el estado de tu reclamación y recibe actualizaciones en tiempo real.",
    backTitle: "Acceso a informes y seguimiento",
    backText:
      "Te proporcionamos actualizaciones constantes para que tengas el control total del proceso.",
  },
  {
    icon: <FontAwesomeIcon icon={faCheck} />,
    frontTitle: "Compatible con cualquier sector",
    frontText:
      "Trabajamos con autónomos, pymes y grandes empresas en todo tipo de industrias.",
    backTitle: "Compatible con cualquier sector",
    backText:
      "No importa tu sector. Podemos ayudarte adaptándonos a las particularidades de tu negocio.",
  },
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    frontTitle: "Maximiza tu tiempo y recursos",
    frontText:
      "Deja la gestión de cobros en manos de expertos y céntrate en hacer crecer tu negocio.",
    backTitle: "Maximiza tu tiempo y recursos",
    backText:
      "En lugar de perseguir deudores, déjalo en nuestras manos para que puedas avanzar.",
  },
  {
    icon: <FontAwesomeIcon icon={faHandHoldingUsd} />,
    frontTitle: "Reducción de costes legales",
    frontText:
      "Te ayudamos a evitar gastos innecesarios en abogados y procedimientos largos cuando no son necesarios.",
    backTitle: "Reducción de costes legales",
    backText:
      "Analizamos si la vía extrajudicial puede resolver tu caso para evitar gastos legales.",
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
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
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
