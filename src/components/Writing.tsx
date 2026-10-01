import { publishedEssays, readTime, type Essay } from '../data/writing';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Writing.module.css';

interface WritingProps {
  onSelectEssay: (essay: Essay) => void;
}

export const Writing = ({ onSelectEssay }: WritingProps) => {
  const ref = useScrollReveal();

  if (publishedEssays.length === 0) return null;

  return (
    <section id="writing" className={`section container ${styles.writingSection}`}>
      <div ref={ref} className="scroll-reveal">
        <h2>
          <span className="text-gradient">Writing</span>
        </h2>
        <p className={styles.introText}>
          Field notes on agent runtimes, multi-tenant scale, and deterministic systems.
        </p>

        <div className={styles.essaysGrid}>
          {publishedEssays.map((essay) => (
            <article
              key={essay.id}
              className={styles.essayCard}
              onClick={() => onSelectEssay(essay)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectEssay(essay);
                }
              }}
              aria-label={`Read essay: ${essay.title}`}
            >
              <div>
                <div className={styles.essayMeta}>
                  <span className={styles.categoryBadge}>{essay.category}</span>
                  <span className={styles.readTime}>{readTime(essay)}</span>
                </div>

                <h3 className={styles.essayTitle}>{essay.title}</h3>
                <p className={styles.essayAbstract}>{essay.abstract}</p>

                <ul className={styles.takeawaysPreview}>
                  {essay.takeaways.slice(0, 2).map((item, idx) => (
                    <li key={idx} className={styles.takeawayItem}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.publishDate}>{essay.date}</span>
                <span className={styles.readAction}>
                  Read essay <span aria-hidden="true">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
