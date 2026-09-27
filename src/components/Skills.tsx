import { skillCategories } from '../data/skills';
import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <section id="skills" className="section container">
      <div className="animate-fade-in delay-100">
        <h2>Technical <span className="text-gradient">Capabilities &amp; Stack</span></h2>
        <p className={styles.introText}>Core architecture and engineering competencies honed across enterprise scale and modern AI agent builds.</p>
        
        <div className="grid grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-panel" id={`skills-group-${idx}`}>
              <h3 className={styles.categoryTitle}>
                {cat.title}
              </h3>
              <div className={styles.skillsGrid}>
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
