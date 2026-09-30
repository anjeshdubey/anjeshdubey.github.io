import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Contact.module.css';

export const Contact = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section container">
      <div ref={ref} className="scroll-reveal">
        <h2>
          Executive <span className="text-gradient">Connect</span>
        </h2>
        <p className={styles.introText}>
          Advisory inquiries, peer exchange, and technical partnership.
        </p>

        <div className={styles.contactGrid}>
          <a
            href="mailto:anjeshdubey@gmail.com"
            className={`glass-panel ${styles.contactCard}`}
            aria-label="Send direct email"
          >
            <svg className={styles.contactIcon} aria-hidden="true">
              <use href="/icons.svg#email-icon" />
            </svg>
            <div>
              <h3 className={styles.contactLabel}>Email</h3>
              <span className={styles.contactValue}>anjeshdubey@gmail.com</span>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/anjeshdubey"
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-panel ${styles.contactCard}`}
            aria-label="LinkedIn profile"
          >
            <svg className={styles.contactIcon} aria-hidden="true">
              <use href="/icons.svg#linkedin-icon" />
            </svg>
            <div>
              <h3 className={styles.contactLabel}>LinkedIn</h3>
              <span className={styles.contactValue}>in/anjeshdubey</span>
            </div>
          </a>

          <a
            href="https://github.com/anjeshdubey"
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-panel ${styles.contactCard}`}
            aria-label="GitHub profile"
          >
            <svg className={styles.contactIcon} aria-hidden="true">
              <use href="/icons.svg#github-icon" />
            </svg>
            <div>
              <h3 className={styles.contactLabel}>GitHub</h3>
              <span className={styles.contactValue}>anjeshdubey</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
