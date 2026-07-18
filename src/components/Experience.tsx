export const Experience = () => {
  return (
    <section id="experience" className="section container">
      <div className="animate-fade-in delay-200">
        <h2>Professional <span className="text-gradient">Experience</span></h2>
        
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-gradient)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <h3>Senior Director of Engineering, Platform</h3>
              <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Salesforce | 2018 - Present</span>
            </div>
            <p style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '1rem' }}>
              Owning the Flow automation platform — the execution layer underneath Agentforce, Salesforce's AI agent platform.
            </p>
            <ul style={{ color: 'var(--text-secondary)', marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Led a 70-person engineering organization powering a platform supporting multiple product lines at 99.99% uptime.</li>
              <li>Architected the transition of synchronous monolith processes to distributed async architectures.</li>
              <li>Maintained an active player-coach role, contributing directly to critical architecture and system design reviews.</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--border-light)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <h3>Director of Engineering, Core Services</h3>
              <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Salesforce | 2014 - 2018</span>
            </div>
            <p style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '1rem' }}>
              Scaled the multi-tenant core services infrastructure enabling hyper-growth across the enterprise CRM cloud.
            </p>
            <ul style={{ color: 'var(--text-secondary)', marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Managed globally distributed engineering teams.</li>
              <li>Championed zero-downtime deployment pipelines for tier-1 microservices.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
