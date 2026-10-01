import type { Experience } from '../data/experience';
import { anchorProps } from '../data/links';
import styles from './Experience.module.css';

interface ExperienceItemProps {
  experience: Experience;
  isFirst?: boolean;
}

export const ExperienceItem = ({ experience: exp, isFirst = false }: ExperienceItemProps) => (
  <div className={`glass-panel ${styles.expCard}`}>
    <div className={`${styles.timelineBar} ${isFirst ? styles.timelineBarActive : ''}`} />

    <div className={styles.expHeader}>
      <h3 className={styles.expTitle}>{exp.title}</h3>
      <span className={styles.expMeta}>
        {exp.company} &nbsp;|&nbsp; <span className={styles.expPeriod}>{exp.period}</span>
      </span>
    </div>

    <p className={styles.expSummary}>{exp.summary}</p>

    <ul className={styles.expBullets}>
      {exp.bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>

    {exp.links && (
      <div className={styles.expLinks}>
        {exp.links.map((link) => (
          <a key={link.href} {...anchorProps(link.href)} className={styles.expLink}>
            {link.label}
          </a>
        ))}
      </div>
    )}
  </div>
);
