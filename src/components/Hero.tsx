import styles from './Hero.module.css';

const boundary = [
  { title: 'Reasoning', detail: 'Interpret intent and choose a next step.' },
  { title: 'Contract', detail: 'Define identity, inputs, policy, and tests.' },
  { title: 'Execution', detail: 'Commit reliable work in systems of record.' },
  { title: 'Evidence', detail: 'Trace outcomes and preserve human review.' },
];

export const Hero = () => {
  return (
    <section id="about" className={styles.heroSection}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.identity}>Anjesh Dubey, engineering leader and builder</p>
          <h1 className={styles.heading}>
            I build reliable AI systems where reasoning meets real-world execution.
          </h1>

          <p className={styles.description}>
            I lead engineering for Salesforce Flow and build independent AI products to test ideas firsthand. My focus is the difficult boundary between what a model proposes and what a business can safely run, inspect, and improve.
          </p>

          <div className={styles.ctaRow}>
            <a href="#systems" className="btn btn-primary">
              Explore the systems
            </a>
            <a href="#enterprise-scale" className="btn btn-secondary">
              Lessons from enterprise scale
            </a>
          </div>
        </div>

        <aside className={styles.boundaryMap} aria-label="From AI reasoning to reliable outcomes">
          <p className={styles.mapIntro}>A reliable path from intent to outcome</p>
          <ol>
            {boundary.map((item) => (
              <li key={item.title}>
                <span className={styles.mapNode} aria-hidden="true" />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.mapNote}>
            The model can stay flexible. The path to a consequential action should not be improvised.
          </p>
        </aside>
      </div>
    </section>
  );
};
