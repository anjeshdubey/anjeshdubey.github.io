import type { Experience } from '../data/experience';
import styles from './Experience.module.css';

interface ExperienceItemProps {
  experience: Experience;
  isFirst?: boolean;
}

export const ExperienceItem = ({ experience: exp, isFirst = false }: ExperienceItemProps) => (
  <article className={styles.expCard}>
    <div className={`${styles.timelineBar} ${isFirst ? styles.timelineBarActive : ''}`} />

    <div className={styles.expHeader}>
      <h3 className={styles.expTitle}>{exp.title}</h3>
      <span className={styles.expMeta}>
        {exp.company} &nbsp;|&nbsp; <span className={styles.expPeriod}>{exp.period}</span>
      </span>
    </div>

    <p className={styles.expSummary}>{exp.summary}</p>

    {exp.bullets.length > 0 && (
      <ul className={styles.expBullets}>
        {exp.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}
  </article>
);
