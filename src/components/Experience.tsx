export const Experience = () => {
  const experiences = [
    {
      title: "Senior Director, Software Engineering",
      period: "Feb 2024 – Present",
      company: "Salesforce",
      location: "San Francisco Bay Area",
      summary: "Owning Salesforce Flow — the core automation platform & deterministic execution layer underpinning Agentforce across Sales, Service, Marketing, and Data Cloud.",
      bullets: [
        "Lead a 70-person global engineering org across 10 teams in the US and India, directing platform architecture, runtime performance, and core API designs.",
        "Architected Flow as the execution layer for Agentforce: designed runtime guardrails, tracing interfaces, and structured-output translation layers for reliable AI agent execution.",
        "Maintained 99.99% Tier-0 availability (<52.6 min downtime/yr) across 100B+ daily executions with zero repeat P1 incidents.",
        "Drove AI-native SDLC transformation: tripled developer velocity, reduced bug resolution from 1 day to 2–3 hours, and elevated test coverage from 70% to 95%.",
        "Led Regrello acquisition integration: re-architected and launched it as Agentforce Supply Chain Automation in 60 days (acquisition to GA) — fastest in Salesforce history.",
      ],
    },
    {
      title: "Director, Software Development",
      period: "Aug 2020 – Feb 2024",
      company: "Salesforce",
      location: "San Francisco Bay Area",
      summary: "Scaled multi-tenant core services infrastructure and global engineering teams enabling hyper-growth across enterprise CRM cloud services.",
      bullets: [
        "Managed a 30+ engineer global product org through full SDLC; aligned technical roadmaps and microservice architectures with C-suite stakeholders.",
        "Championed zero-downtime deployment pipelines, automated error-prevention guardrails, and cut customer support cases by 20%.",
      ],
    },
    {
      title: "Engineering Manager → Senior Engineering Manager",
      period: "Aug 2017 – Jul 2020",
      company: "Salesforce",
      location: "San Francisco Bay Area",
      summary: "Directed technical strategy and delivery for core automation services; scaled US-India engineering teams.",
      bullets: [
        "Set technical strategy and delivery goals for teams shipping Salesforce's core automation products.",
        "Scaled organization headcount by recruiting, mentoring, and retaining top senior engineering talent.",
      ],
    },
    {
      title: "Member of Technical Staff → Lead MTS",
      period: "Oct 2009 – Jul 2017",
      company: "Salesforce",
      location: "San Francisco Bay Area",
      summary: "8 internal promotions over 8 years as hands-on core platform architect building foundational engines from scratch.",
      bullets: [
        "Architected foundational engines from scratch: Workflow, Approvals, and Process Builder — scaling to billions of daily execution runs.",
        "Designed custom platform permission model decoupling licensing from entitlements, still used platform-wide today.",
        "Built automated CI test-failure triage and flaky-test detection tooling, significantly improving developer productivity.",
      ],
    },
  ];

  return (
    <section id="experience" className="section container">
      <div className="animate-fade-in delay-200">
        <h2>Professional <span className="text-gradient">Experience</span></h2>
        <p style={{ marginBottom: '3rem' }}>15+ years of engineering leadership scaling enterprise infrastructure from foundational code to AI agent platforms.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-panel" id={`exp-card-${idx}`} style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: idx === 0 ? 'var(--accent-gradient)' : 'var(--border-light)' }} />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1.35rem' }}>{exp.title}</h3>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                  {exp.company} &nbsp;|&nbsp; <span style={{ color: 'var(--text-muted)' }}>{exp.period}</span>
                </span>
              </div>
              
              <p style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '1rem', fontSize: '1.05rem' }}>
                {exp.summary}
              </p>
              
              <ul style={{ color: 'var(--text-secondary)', marginLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.95rem' }}>
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
