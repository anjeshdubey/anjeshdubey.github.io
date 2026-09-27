import { patents } from '../data/patents';
import styles from './Patents.module.css';

export const Patents = () => {
  return (
    <section id="patents" className="section container">
      <div className="animate-fade-in delay-200">
        <h2>Issued <span className="text-gradient">US Patents</span></h2>
        <p className={styles.introText}>Granted patents in workflow execution, multi-tenant container delegation, and permission architectures.</p>
        
        <div className="grid grid-cols-2">
          {patents.map((pat, idx) => (
            <div key={idx} className={`glass-panel ${styles.patentCard}`} id={`patent-card-${idx}`}>
              <div className={styles.patentHeader}>
                <span className={styles.patentNumber}>
                  {pat.number}
                </span>
                <span className={styles.patentDate}>
                  {pat.date}
                </span>
              </div>
              <h3 className={styles.patentTitle}>
                {pat.title}
              </h3>
              <div className={styles.patentAssignee}>
                Assignee: {pat.assignee}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
