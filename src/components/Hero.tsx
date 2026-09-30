import { useScrollReveal } from '../hooks/useScrollReveal';
import { MetricCard } from './MetricCard';
import styles from './Hero.module.css';

const metrics = [
  { value: '15+ Yrs', label: 'Engineering Leadership' },
  { value: '700B+ / Mo', label: 'State Machine Executions' },
  { value: '55%+', label: 'Agentforce Production Layer' },
  { value: '60M MAU', label: 'Across 135K+ Enterprises' },
];

export const Hero = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className={`section container ${styles.heroSection}`}>
      <div ref={ref} className={`scroll-reveal ${styles.heroContent}`}>
        <div className={styles.statusBadge}>
          <span className={styles.statusDot}></span>
          <span className={styles.statusText}>
            VP / Head of Engineering — AI Agent Platforms
          </span>
        </div>
        
        <h1 className={styles.heading}>
          Building AI Agent Runtimes &amp; <span className="text-gradient">Enterprise-Scale Systems</span>
        </h1>
        
        <p className={styles.description}>
          Senior Director of Software Engineering at Salesforce owning the Flow platform (~70 engineers, 700B+ monthly executions) powering 55%+ of all Agentforce production actions. Architecting distributed state machine runtimes, headless MCP servers, and deterministic verification for autonomous systems.
        </p>

        {/* Metrics Ribbon */}
        <div className={styles.metricsGrid}>
          {metrics.map((m) => (
            <MetricCard key={m.label} value={m.value} label={m.label} />
          ))}
        </div>

        <div className={styles.ctaRow}>
          <a href="#writing" className="btn btn-primary" id="view-writing-btn">
            Read Systems Writing
          </a>
          <a href="#architectures" className="btn btn-secondary" id="view-architectures-btn">
            Reference Architectures
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
