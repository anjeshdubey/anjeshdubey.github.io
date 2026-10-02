import { anchorProps } from '../data/links';
import { patents } from '../data/patents';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Patents.module.css';

export const Patents = () => {
  const ref = useScrollReveal();

  return (
    <section id="patents" className="section container">
      <div ref={ref} className="scroll-reveal">
        <h2>
          Issued <span className="text-gradient">US Patents</span>
        </h2>
        <p className={styles.introText}>
          Co-inventor on four granted US patents, all assigned to Salesforce.
        </p>

        <div className="grid grid-cols-2">
          {patents.map((patent) => (
            <a key={patent.number} {...anchorProps(patent.href)} className={`glass-panel ${styles.patentCard}`}>
              <div className={styles.patentHeader}>
                <span className={styles.patentNumber}>{patent.number}</span>
                <span className={styles.patentDate}>Granted {patent.granted}</span>
              </div>
              <h3 className={styles.patentTitle}>{patent.title}</h3>
              <span className={styles.patentSource}>View on Google Patents</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
