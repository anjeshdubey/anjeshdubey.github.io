export const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Agent Architecture",
      skills: [
        "LangGraph (StateGraph / MemorySaver / Interrupts)",
        "Multi-Provider LLM Gateways (Together / Groq / Gemini / Anthropic)",
        "Vector RAG (Qdrant / FastEmbed / BGE-small)",
        "Structured Outputs (Instructor / Pydantic v2)",
        "Human-in-the-Loop (HITL) Guardrails",
        "Deterministic Code Verification Engine",
        "LLM-as-a-Judge & Simulation Harnesses",
        "Prompt-Injection Defense-in-Depth",
      ],
    },
    {
      title: "Platform, Cloud & Engineering Leadership",
      skills: [
        "Tier-0 99.99% Availability Systems",
        "100B+ Daily Execution Engine Scale",
        "FastAPI & Serverless Infrastructure (Modal)",
        "0→70 Engineer Global Org Building (US & India)",
        "Regrello Acquisition Integration (GA in 60 days)",
        "Upstash Redis Caching & Rate-Limiting",
        "Python, Go, TypeScript, React 18, Java, SQL",
        "Server-Sent Events (SSE) & WebSockets",
      ],
    },
  ];

  return (
    <section id="skills" className="section container">
      <div className="animate-fade-in delay-100">
        <h2>Technical <span className="text-gradient">Capabilities &amp; Stack</span></h2>
        <p style={{ marginBottom: '2.5rem' }}>Core architecture and engineering competencies honed across enterprise scale and modern AI agent builds.</p>
        
        <div className="grid grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-panel" id={`skills-group-${idx}`}>
              <h3 style={{ marginBottom: '1.25rem', fontSize: '1.25rem', color: 'var(--accent-primary)' }}>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      padding: '0.4rem 0.85rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
