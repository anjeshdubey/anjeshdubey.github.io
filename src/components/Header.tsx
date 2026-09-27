import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <a href="#about" className={styles.logo}>
          Anjesh<span className="text-gradient">.ai</span>
        </a>
        <nav className={styles.nav} aria-label="Main Navigation">
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#patents" className={styles.navLink}>Patents</a>
        </nav>
      </div>
    </header>
  );
};
