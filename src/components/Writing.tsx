import { essays, type Essay } from '../data/writing';
import frame from './SectionFrame.module.css';
import styles from './Writing.module.css';

interface WritingProps {
  onSelectEssay: (essay: Essay) => void;
}

export const Writing = ({ onSelectEssay }: WritingProps) => {
  const displayedEssays = essays.filter((essay) => essay.featured);

  return (
    <section id="writing" className="section">
      <div className={`container ${frame.sectionGrid}`}>
        <div className={frame.intro}>
          <p className={frame.kicker}>Writing</p>
          <h2 className={frame.title}>Notes from building and operating systems.</h2>
          <p className={frame.lead}>
            Short essays on the choices that sit between an AI demo and a product someone can trust.
          </p>
        </div>

        <div className={`${frame.content} ${styles.essaysGrid}`}>
          {displayedEssays.map((essay) => (
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
                  <span className={styles.readTime}>{essay.readTime}</span>
                </div>

                <h3 className={styles.essayTitle}>{essay.title}</h3>
                <p className={styles.essayAbstract}>{essay.abstract}</p>

              </div>

              <div className={styles.cardFooter}>
                <span className={styles.publishDate}>{essay.date}</span>
                <span className={styles.readAction}>Read essay</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
