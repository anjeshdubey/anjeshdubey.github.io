import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div className="animate-fade-in delay-200">
        <h2>Get in <span className="text-gradient">Touch</span></h2>
        <p className={styles.introText}>
          Interested in AI agent platforms, engineering leadership, or collaboration opportunities? Let's connect.
        </p>

        <div className={styles.contactGrid}>
          <a
            href="mailto:anjesh.dubey@gmail.com"
            className={`glass-panel ${styles.contactCard}`}
          >
            <svg className={styles.contactIcon} aria-hidden="true">
              <use href="/icons.svg#email-icon" />
            </svg>
            <div>
              <h3 className={styles.contactLabel}>Email</h3>
              <span className={styles.contactValue}>anjesh.dubey@gmail.com</span>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/anjeshdubey"
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-panel ${styles.contactCard}`}
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
