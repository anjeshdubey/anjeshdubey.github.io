import { referenceArchitectures } from '../data/architectures';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Architectures.module.css';

export const Architectures = () => {
  const ref = useScrollReveal();

  return (
    <section id="architectures" className="section container">
      <div ref={ref} className="scroll-reveal">
        <h2>
          Applied Agent Runtimes &amp; <span className="text-gradient">Reference Implementations</span>
        </h2>
        <p className={styles.introText}>
          Production-grade architectures exploring stateful execution, declarative YAML compilers, and deterministic compliance verification.
        </p>

        <div className={styles.architecturesGrid}>
          {referenceArchitectures.map((arch) => (
            <div key={arch.id} id={`arch-card-${arch.id}`} className={`glass-panel ${styles.architectureCard}`}>
              <div>
                <div className={styles.cardHeader}>
                  <span className={styles.badge}>{arch.badge}</span>
                  <h3 className={styles.architectureTitle}>{arch.title}</h3>
                  <div className={styles.architectureRole}>{arch.role}</div>
                </div>

                <p className={styles.architectureDescription}>{arch.description}</p>

                <ul className={styles.highlights}>
                  {arch.highlights.map((h, i) => (
                    <li key={i} className={styles.highlightItem}>
                      • {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className={styles.techTags}>
                  {arch.tech.map((t, i) => (
                    <span key={i} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.linksRow}>
                  {arch.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.archLink}
                    >
                      {link.label} <span aria-hidden="true">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
