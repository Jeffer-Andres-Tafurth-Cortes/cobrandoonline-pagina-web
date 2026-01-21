import Link from "next/link";
import styles from "./styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/logo-cobrando-online.png" alt="logo" />
        </div>

        <ul className={styles.menu}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/conocenos">Conocenos</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contactanos">Contactanos</Link>
          </li>
        </ul>

        <Link href="/conocenos" className={styles.btn}>
          Conócenos
        </Link>
      </nav>
    </header>
  );
}
