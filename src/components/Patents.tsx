export const Patents = () => {
  const patents = [
    {
      number: "US Patent 10,447,737",
      title: "Delegating administration rights using application containers",
      date: "Granted Oct 2019",
      assignee: "Salesforce, Inc.",
    },
    {
      number: "US Patent 10,394,412",
      title: "User-customizable permissions in a computing environment",
      date: "Granted Aug 2019",
      assignee: "Salesforce, Inc.",
    },
    {
      number: "US Patent 9,710,127",
      title: "User-customizable permissions in a computing environment",
      date: "Granted Jul 2017",
      assignee: "Salesforce, Inc.",
    },
    {
      number: "US Patent 8,583,964",
      title: "Identifying bugs in a database system environment",
      date: "Granted Nov 2013",
      assignee: "Salesforce, Inc.",
    },
    {
      number: "US Patent Pub. 20200097979",
      title: "Sharing execution logic across workflow instances",
      date: "Published Mar 2020",
      assignee: "Salesforce, Inc.",
    },
  ];

  return (
    <section id="patents" className="section container">
      <div className="animate-fade-in delay-200">
        <h2>Issued <span className="text-gradient">US Patents</span></h2>
        <p style={{ marginBottom: '2.5rem' }}>Granted patents in workflow execution, multi-tenant container delegation, and permission architectures.</p>
        
        <div className="grid grid-cols-2">
          {patents.map((pat, idx) => (
            <div key={idx} className="glass-panel" id={`patent-card-${idx}`} style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--accent-primary)', fontSize: '1.05rem' }}>
                  {pat.number}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {pat.date}
                </span>
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                {pat.title}
              </h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Assignee: {pat.assignee}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
