import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section id="about" className={`section container ${styles.heroSection}`}>
      <div className={`animate-fade-in ${styles.heroContent}`}>
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
          <div className={`glass-panel ${styles.metricCard}`}>
            <div className={`text-gradient ${styles.metricValue}`}>15+ Yrs</div>
            <div className={styles.metricLabel}>Engineering Leadership</div>
          </div>
          <div className={`glass-panel ${styles.metricCard}`}>
            <div className={`text-gradient ${styles.metricValue}`}>100B+</div>
            <div className={styles.metricLabel}>Daily Flow Executions</div>
          </div>
          <div className={`glass-panel ${styles.metricCard}`}>
            <div className={`text-gradient ${styles.metricValue}`}>3 AI Runtimes</div>
            <div className={styles.metricLabel}>Open-Source Agent Builds</div>
          </div>
          <div className={`glass-panel ${styles.metricCard}`}>
            <div className={`text-gradient ${styles.metricValue}`}>5 US Patents</div>
            <div className={styles.metricLabel}>Workflow & System Design</div>
          </div>
        </div>

        <div className={styles.ctaRow}>
          <a href="#projects" className="btn btn-primary" id="view-projects-btn">
            Explore AI Builds
          </a>
          <a href="https://github.com/anjeshdubey" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="github-profile-btn">
            GitHub
          </a>
          <a href="https://linkedin.com/in/anjeshdubey" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="linkedin-profile-btn">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
