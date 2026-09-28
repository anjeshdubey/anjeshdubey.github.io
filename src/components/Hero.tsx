import { useScrollReveal } from '../hooks/useScrollReveal';
import { MetricCard } from './MetricCard';
import styles from './Hero.module.css';

const metrics = [
  { value: '15+ Yrs', label: 'Engineering Leadership' },
  { value: '100B+', label: 'Daily Flow Executions' },
  { value: '3 AI Runtimes', label: 'Open-Source Agent Builds' },
  { value: '5 US Patents', label: 'Workflow & System Design' },
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
          Senior Director of Software Engineering at Salesforce owning the Flow Automation Platform (~70 engineers, 100B+ daily executions). Hands-on builder architecting multi-provider LLM gateways, LangGraph state machine runtimes, vector RAG pipelines, and code-verified HITL guardrails.
        </p>

        {/* Metrics Ribbon */}
        <div className={styles.metricsGrid}>
          {metrics.map((m) => (
            <MetricCard key={m.label} value={m.value} label={m.label} />
          ))}
        </div>

        <div className={styles.ctaRow}>
          <a href="#projects" className="btn btn-primary" id="view-projects-btn">
            Explore AI Builds
          </a>
          <a href="https://github.com/anjeshdubey" target="_blank" rel="noopener noreferrer" className={`btn btn-secondary ${styles.iconBtn}`} id="github-profile-btn">
            <svg className={styles.btnIcon} aria-hidden="true"><use href="/icons.svg#github-icon" /></svg>
            GitHub
          </a>
          <a href="https://linkedin.com/in/anjeshdubey" target="_blank" rel="noopener noreferrer" className={`btn btn-secondary ${styles.iconBtn}`} id="linkedin-profile-btn">
            <svg className={styles.btnIcon} aria-hidden="true"><use href="/icons.svg#linkedin-icon" /></svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
