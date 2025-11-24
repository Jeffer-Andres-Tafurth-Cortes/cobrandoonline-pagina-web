import styles from "./Contactanos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Contacto() {
  return (
    <section className={styles.section}>
      {/* Título grande */}
      <div className={styles.header}>
        <h1>Contacto</h1>
        <p>
          Si tienes dudas o necesitas ayuda con la recuperación de tus facturas,
          nuestro equipo está listo para asesorarte. Escríbenos y gestionaremos
          tus cobros de manera ágil y efectiva.
        </p>
      </div>

      {/* Contenido a 2 columnas */}
      <div className={styles.container}>
        {/* Columna izquierda */}
        <div className={styles.left}>
          <span className={styles.subTitle}>CONTÁCTANOS</span>
          <h2>¿Necesitas Recuperar Tu Cartera?</h2>

          <p className={styles.text}>
            Si tienes dudas o necesitas ayuda con la recuperación de tus
            facturas, nuestro equipo está listo para asesorarte. Escríbenos y te
            ayudaremos a gestionar tus cobros de manera rápida y efectiva.
          </p>

          {/* Datos de contacto */}
          <div className={styles.infoItem}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <div>
              <p className={styles.label}>Teléfono:</p>
              <p className={styles.data}>+57 - (323) 437 - 2766</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <div>
              <p className={styles.label}>Correo electronico:</p>
              <p className={styles.data}>info.pravice@gmail.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            <div>
              <p className={styles.label}>Ubicación:</p>
              <p className={styles.data}>Calle 98 # 22 – 64 Of 716 · Bogotá</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form className={styles.form}>
          <div>
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre completo" />
          </div>

          <div>
            <label>Correo electronico</label>
            <input type="email" placeholder="Tu correo electronico" />
          </div>

          <div>
            <label>Mensaje</label>
            <textarea placeholder="Escribe un mensaje aqui..." />
          </div>

          <button type="submit" className={styles.button}>
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
