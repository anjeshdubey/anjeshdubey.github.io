import { experiences } from '../data/experience';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExperienceItem } from './ExperienceItem';
import styles from './Experience.module.css';

export const Experience = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section container">
      <div ref={ref} className="scroll-reveal">
        <h2>
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className={styles.introText}>
          15+ years of engineering leadership scaling enterprise infrastructure from foundational state machines to AI agent platforms.
        </p>

        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} experience={exp} isFirst={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};
