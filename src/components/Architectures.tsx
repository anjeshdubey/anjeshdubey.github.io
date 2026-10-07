import { referenceArchitectures } from '../data/architectures';
import frame from './SectionFrame.module.css';
import styles from './Architectures.module.css';

export const Architectures = () => (
  <section id="systems" className="section">
    <div className={`container ${frame.sectionGrid}`}>
      <div className={frame.intro}>
        <p className={frame.kicker}>Independent AI systems</p>
        <h2 className={frame.title}>I build to sharpen the decisions I lead.</h2>
        <p className={frame.lead}>
          Each system starts with a real problem and makes one architectural bet explicit. The point is not a list of tools. It is what the design teaches when it meets users, state, failure, and review.
        </p>
      </div>

      <div className={`${frame.content} ${styles.systemsList}`}>
        {referenceArchitectures.map((system) => (
          <article key={system.id} id={`system-${system.id}`} className={styles.system}>
            <header className={styles.systemHeader}>
              <div>
                <p>{system.type}</p>
                <h3>{system.title}</h3>
              </div>
              <div className={styles.linksRow}>
                {system.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </header>

            <div className={styles.storyGrid}>
              <div>
                <h4>Problem</h4>
                <p>{system.problem}</p>
              </div>
              <div>
                <h4>Design choice</h4>
                <p>{system.designChoice}</p>
              </div>
              <div>
                <h4>Hard part</h4>
                <p>{system.hardPart}</p>
              </div>
              <div>
                <h4>What I learned</h4>
                <p>{system.learning}</p>
              </div>
            </div>

            <div className={styles.architecturePath} aria-label={`${system.title} architecture`}>
              {system.architecture.map((step, index) => (
                <div key={step}>
                  <span>{step}</span>
                  {index < system.architecture.length - 1 && <i aria-hidden="true" />}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
