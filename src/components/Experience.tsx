import { experiences } from '../data/experience';
import styles from './Experience.module.css';

export const Experience = () => {
  return (
    <section id="experience" className="section container">
      <div className="animate-fade-in delay-200">
        <h2>Professional <span className="text-gradient">Experience</span></h2>
        <p className={styles.introText}>15+ years of engineering leadership scaling enterprise infrastructure from foundational code to AI agent platforms.</p>
        
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={`glass-panel ${styles.expCard}`} id={`exp-card-${idx}`}>
              <div className={`${styles.timelineBar} ${idx === 0 ? styles.timelineBarActive : ''}`} />
              
              <div className={styles.expHeader}>
                <h3 className={styles.expTitle}>{exp.title}</h3>
                <span className={styles.expMeta}>
                  {exp.company} &nbsp;|&nbsp; <span className={styles.expPeriod}>{exp.period}</span>
                </span>
              </div>
              
              <p className={styles.expSummary}>
                {exp.summary}
              </p>
              
              <ul className={styles.expBullets}>
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
