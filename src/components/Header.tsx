import Link from "next/link";
import styles from "./styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* NAVBAR */}
      <nav
        className={styles.navbar}
        aria-label="Navegación principal"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <div className={styles.logo}>
          <img
            src="/logo-cobrando-online.png"
            alt="Cobrando Online - Recuperación de cartera en Colombia"
          />
        </div>

        <ul className={styles.menu}>
          <li itemProp="name">
            <Link href="/" title="Inicio - Cobrando Online" itemProp="url">
              Inicio
            </Link>
          </li>
          <li itemProp="name">
            <Link
              href="/conocenos"
              title="Conoce a Cobrando Online y nuestro equipo"
              itemProp="url"
            >
              Conocenos
            </Link>
          </li>
          <li itemProp="name">
            <Link
              href="/blog"
              title="Blog sobre recuperación de cartera y finanzas"
              itemProp="url"
            >
              Blog
            </Link>
          </li>
          <li itemProp="name">
            <Link
              href="/contactanos"
              title="Contacta a Cobrando Online"
              itemProp="url"
            >
              Contactanos
            </Link>
          </li>
        </ul>

        <Link
          href="/conocenos"
          className={styles.btn}
          title="Conoce más sobre nuestros servicios de recuperación de cartera"
        >
          Conócenos
        </Link>
      </nav>
    </header>
  );
}
