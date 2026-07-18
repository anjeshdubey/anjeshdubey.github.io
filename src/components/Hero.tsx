export const Hero = () => {
  return (
    <section id="about" className="section container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px' }} className="animate-fade-in">
        <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          VP / Head of Engineering
        </h2>
        <h1 style={{ marginBottom: '1.5rem' }}>
          Building AI Agent Platforms &amp; <span className="text-gradient">Zero-to-One Systems</span>
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
          Engineering leader with 15+ years at Salesforce, currently building hands-on agent runtimes and vector RAG pipelines. Passionate about driving high-velocity, founding-caliber teams.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="https://github.com/anjeshdubey" target="_blank" rel="noreferrer" className="btn btn-secondary">
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};
