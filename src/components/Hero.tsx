export const Hero = () => {
  return (
    <section id="about" className="section container" style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: '850px' }} className="animate-fade-in">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-glass-light)', border: '1px solid var(--border-light)', padding: '0.4rem 1rem', borderRadius: '9999px', marginBottom: '1.5rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
          <span style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            VP / Head of Engineering — AI Agent Platforms
          </span>
        </div>
        
        <h1 style={{ marginBottom: '1.5rem' }}>
          Building AI Agent Runtimes &amp; <span className="text-gradient">Enterprise-Scale Systems</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '720px', color: 'var(--text-secondary)' }}>
          Senior Director of Software Engineering at Salesforce owning the Flow Automation Platform (~70 engineers, 100B+ daily executions). Hands-on builder architecting multi-provider LLM gateways, LangGraph state machine runtimes, vector RAG pipelines, and code-verified HITL guardrails.
        </p>

        {/* Metrics Ribbon */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }} className="text-gradient">15+ Yrs</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Engineering Leadership</div>
          </div>
          <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }} className="text-gradient">100B+</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Daily Flow Executions</div>
          </div>
          <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }} className="text-gradient">3 AI Runtimes</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Open-Source Agent Builds</div>
          </div>
          <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }} className="text-gradient">5 US Patents</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Workflow & System Design</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <a href="#projects" className="btn btn-primary" id="view-projects-btn">
            Explore AI Builds
          </a>
          <a href="https://github.com/anjeshdubey" target="_blank" rel="noreferrer" className="btn btn-secondary" id="github-profile-btn">
            GitHub
          </a>
          <a href="https://linkedin.com/in/anjeshdubey" target="_blank" rel="noreferrer" className="btn btn-secondary" id="linkedin-profile-btn">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
