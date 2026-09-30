import { architecturalPillars } from '../data/primitives';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './SystemsPrimitives.module.css';

export const SystemsPrimitives = () => {
  const ref = useScrollReveal();

  return (
    <section id="systems" className="section container">
      <div ref={ref} className="scroll-reveal">
        <h2>
          Systems &amp; <span className="text-gradient">Architectural Primitives</span>
        </h2>
        <p className={styles.introText}>
          Core platform engineering competencies and leadership domains honed across enterprise scale and modern AI agent systems.
        </p>

        <div className={styles.pillarsGrid}>
          {architecturalPillars.map((pillar) => (
            <div key={pillar.id} id={`pillar-${pillar.id}`} className={`glass-panel ${styles.pillarCard}`}>
              <div className={styles.pillarHeader}>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <div className={styles.pillarSubtitle}>{pillar.subtitle}</div>
              </div>

              <ul className={styles.capabilitiesList}>
                {pillar.capabilities.map((cap, i) => (
                  <li key={i} className={styles.capabilityItem}>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
