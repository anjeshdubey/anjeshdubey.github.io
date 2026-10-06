import frame from './SectionFrame.module.css';
import styles from './Contact.module.css';

export const Contact = () => (
  <section id="connect" className="section">
    <div className={`container ${frame.sectionGrid}`}>
      <div className={frame.intro}>
        <p className={frame.kicker}>Connect</p>
        <h2 className={frame.title}>Let’s compare notes on hard systems problems.</h2>
        <p className={frame.lead}>
          I am always interested in thoughtful conversations about AI products, platform engineering, and leading teams through a technology shift.
        </p>
      </div>

        <div className={`${frame.content} ${styles.contactGrid}`}>
          <a
            href="mailto:anjeshdubey@gmail.com"
            className={styles.contactCard}
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
            className={styles.contactCard}
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
            className={styles.contactCard}
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
