import { useScrollReveal } from '../hooks/useScrollReveal';
import { MetricCard } from './MetricCard';
import styles from './Hero.module.css';

const metrics = [
  { value: '700B+ / Mo', label: 'State Machine Executions' },
  { value: '55%+', label: 'of Agentforce agent actions run on Flow' },
  { value: '~70', label: 'engineers in 10 teams across the US and India' },
  { value: '17 Yrs', label: 'at Salesforce, 9 leading teams' },
];

export const Hero = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className={`section container ${styles.heroSection}`}>
      <div ref={ref} className={`scroll-reveal ${styles.heroContent}`}>
        <h1 className={styles.heading}>
          Building AI Agent Runtimes &amp; <span className="text-gradient">Enterprise-Scale Systems</span>
        </h1>

        <p className={styles.description}>
          I lead engineering for Salesforce Flow, the platform admins use to automate work in Salesforce and one of the ways Agentforce agents take action. My teams own how a flow is written, what starts it, how it runs at scale, and how customers test and debug it.
        </p>

        {/* Metrics Ribbon */}
        <div className={styles.metricsGrid}>
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        <div className={styles.ctaRow}>
          <a href="#experience" className="btn btn-primary" id="view-experience-btn">
            Experience
          </a>
          <a href="#projects" className="btn btn-secondary" id="view-projects-btn">
            Side projects
          </a>
          <a
            href="https://linkedin.com/in/anjeshdubey"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-secondary ${styles.iconBtn}`}
            id="linkedin-profile-btn"
            aria-label="LinkedIn Profile"
          >
            <svg className={styles.btnIcon} aria-hidden="true"><use href="/icons.svg#linkedin-icon" /></svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/anjeshdubey"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-secondary ${styles.iconBtn}`}
            id="github-profile-btn"
            aria-label="GitHub Profile"
          >
            <svg className={styles.btnIcon} aria-hidden="true"><use href="/icons.svg#github-icon" /></svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
