export const Projects = () => {
  const projects = [
    {
      title: 'Sentinel',
      role: 'Creator & Lead Architect',
      description: 'An AI-driven SRE Agent deployed on Modal that automates root cause analysis and incident triage by integrating directly with GitHub and live logging systems.',
      tech: ['Python', 'FastAPI', 'LangChain', 'Modal', 'React'],
      links: [
        { label: 'Live Demo', href: 'https://anjeshdubey.github.io/sentinel/' },
        { label: 'Docs', href: 'https://anjeshdubey.github.io/sentinel/engineering/' },
        { label: 'Code', href: 'https://github.com/anjeshdubey/sentinel' },
      ],
    },
    {
      title: 'FlowStrix',
      role: 'Open Source Maintainer',
      description: 'An agent-native workflow engine allowing developers to compose deterministic directed acyclic graphs (DAGs) for multi-agent LLM systems with built-in state management.',
      tech: ['Python', 'Pydantic', 'AsyncIO', 'Vector Search'],
      links: [
        { label: 'Live Demo', href: 'https://anjeshdubey.github.io/FlowStrix/' },
        { label: 'Docs', href: 'https://anjeshdubey.github.io/FlowStrix/engineering/' },
        { label: 'Code', href: 'https://github.com/anjeshdubey/FlowStrix' },
      ],
    },
  ];

  return (
    <section id="projects" className="section container">
      <div className="animate-fade-in delay-100">
        <h2>Currently <span className="text-gradient">Building</span></h2>
        <p style={{ marginBottom: '3rem' }}>Hands-on active projects demonstrating my player-coach engineering philosophy.</p>
        
        <div className="grid grid-cols-2">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-panel">
              <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
              <div style={{ fontSize: '0.875rem', color: 'var(--accent-secondary)', marginBottom: '1rem', fontWeight: 600 }}>
                {project.role}
              </div>
              <p>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{ padding: '0.25rem 0.75rem', background: 'var(--bg-secondary)', borderRadius: '9999px', fontSize: '0.875rem', border: '1px solid var(--border-light)' }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                {project.links.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    {l.label} <span>→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
