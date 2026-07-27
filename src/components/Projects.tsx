export const Projects = () => {
  const projects = [
    {
      id: 'sentinel',
      title: 'Sentinel — AI SRE Triage Agent',
      role: 'Creator & Lead Architect',
      description: 'An AI-driven SRE triage platform that reads incident alerts (PagerDuty, Grafana, Slack), enriches context via CMDB tool calling (owners, deploys), retrieves matching runbooks via Qdrant RAG, and streams structured diagnoses live. Features a LangGraph HITL gate that interrupts execution for human sign-off when confidence is low (τ < 0.80).',
      highlights: [
        'Multi-provider LLM gateway (Together AI, Groq, Gemini, Anthropic) with Upstash Redis caching (-98% inference cost).',
        '369 passing tests (unit, functional SSE stream mocks, and real-API integration tests) with P50 cached latency <2s.',
      ],
      tech: ['Python', 'FastAPI', 'LangGraph', 'Qdrant RAG', 'Instructor / Pydantic', 'Modal Serverless', 'SSE'],
      links: [
        { label: 'Live Demo', href: 'https://anjeshdubey.github.io/sentinel/' },
        { label: 'Engineering Docs', href: 'https://anjesh.ai/sentinel/engineering/' },
        { label: 'GitHub', href: 'https://github.com/anjeshdubey/sentinel' },
      ],
    },
    {
      id: 'flowstrix',
      title: 'FlowStrix — Agent-Native Workflow Engine',
      role: 'Creator & Architect',
      description: 'An agent-native declarative workflow engine exploring what low-code automation (like Salesforce Flow) looks like when rebuilt for the AI era. Executes YAML agent contracts across 8 step primitives (lookup, reason, respond, branch, hitl, tool, wait, handoff) with dynamic graph parallelization.',
      highlights: [
        'Dynamic LangGraph parallel node execution cuts multi-tool step latency by ~50%.',
        'Instructor Ghostwriter NL-to-YAML compiler + AI simulation runner with LLM-as-a-Judge evaluators (151 passing tests).',
      ],
      tech: ['Python', 'LangGraph', 'Pydantic v2', 'Instructor', 'FastAPI', 'Qdrant', 'React 18 / TypeScript'],
      links: [
        { label: 'GitHub Repo', href: 'https://github.com/anjeshdubey/flowstrix' },
      ],
    },
    {
      id: 'audit-agent',
      title: 'Audit Agent Orchestrator — Compliance Review',
      role: 'Creator & Lead Architect',
      description: 'A citation-grounded compliance review agent automating SOC 2-style design testing across policy documents. Features a code-level verbatim quote verification engine (rejecting LLM self-reported confidence) paired with a LangGraph MemorySaver review queue for human sign-off.',
      highlights: [
        '100% citation authenticity guaranteed by literal string matching before code-derived confidence scoring.',
        'Interactive SSE live review queue allowing auditors to approve/reject evidence with notes before workpaper assembly.',
      ],
      tech: ['Python 3.11', 'LangGraph Checkpointing', 'Instructor', 'FastAPI', 'SSE', 'Pytest (100% Core Coverage)'],
      links: [
        { label: 'GitHub Repo', href: 'https://github.com/anjeshdubey/Audit-Agent-Orchestrator' },
      ],
    },
  ];

  return (
    <section id="projects" className="section container">
      <div className="animate-fade-in delay-100">
        <h2>Open-Source <span className="text-gradient">AI Agent Builds</span></h2>
        <p style={{ marginBottom: '3rem' }}>Hands-on AI agent runtimes, RAG pipelines, and deterministic HITL systems built from scratch.</p>
        
        <div className="grid grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} id={`project-card-${project.id}`} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ marginBottom: '0.4rem', fontSize: '1.35rem' }}>{project.title}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', marginBottom: '1rem', fontWeight: 600 }}>
                  {project.role}
                </div>
                <p style={{ fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>{project.description}</p>
                
                <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: '0.35rem' }}>{h}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ padding: '0.2rem 0.6rem', background: 'var(--bg-secondary)', borderRadius: '9999px', fontSize: '0.78rem', border: '1px solid var(--border-light)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                  {project.links.map((l, i) => (
                    <a key={i} href={l.href} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      {l.label} <span>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
