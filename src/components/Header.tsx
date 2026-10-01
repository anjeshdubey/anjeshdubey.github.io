import { useState } from 'react';
import { publishedEssays } from '../data/writing';
import { ThemeToggle } from './ThemeToggle';
import styles from './Header.module.css';

const navItems = [
  ...(publishedEssays.length > 0 ? [{ href: '#writing', label: 'Writing' }] : []),
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <a href="#about" className={styles.logo} onClick={closeMenu}>
          Anjesh<span className="text-gradient">.ai</span>
        </a>

        <div className={styles.headerActions}>
          <ThemeToggle />

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" aria-hidden="true">
              <use href={`/icons.svg#${menuOpen ? 'close-icon' : 'menu-icon'}`} />
            </svg>
          </button>
        </div>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
