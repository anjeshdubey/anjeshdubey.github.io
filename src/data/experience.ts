export interface Experience {
  title: string;
  period: string;
  company: string;
  location: string;
  summary: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Senior Director, Software Engineering',
    period: 'Feb 2024 – Present',
    company: 'Salesforce',
    location: 'San Francisco Bay Area',
    summary:
      'Owning Salesforce Flow — the core automation platform & deterministic execution layer underpinning Agentforce across Sales, Service, Marketing, and Data Cloud.',
    bullets: [
      'Lead a 70-person global engineering org across 10 teams in the US and India, directing platform architecture, runtime performance, and core API designs.',
      'Architected Flow as the execution layer for Agentforce: designed runtime guardrails, tracing interfaces, and structured-output translation layers for reliable AI agent execution.',
      'Maintained 99.99% Tier-0 availability (<52.6 min downtime/yr) across 100B+ daily executions with zero repeat P1 incidents.',
      'Drove AI-native SDLC transformation: tripled developer velocity, reduced bug resolution from 1 day to 2–3 hours, and elevated test coverage from 70% to 95%.',
      'Led Regrello acquisition integration: re-architected and launched it as Agentforce Supply Chain Automation in 60 days (acquisition to GA) — fastest in Salesforce history.',
    ],
  },
  {
    title: 'Director, Software Development',
    period: 'Aug 2020 – Feb 2024',
    company: 'Salesforce',
    location: 'San Francisco Bay Area',
    summary:
      'Scaled multi-tenant core services infrastructure and global engineering teams enabling hyper-growth across enterprise CRM cloud services.',
    bullets: [
      'Managed a 30+ engineer global product org through full SDLC; aligned technical roadmaps and microservice architectures with C-suite stakeholders.',
      'Championed zero-downtime deployment pipelines, automated error-prevention guardrails, and cut customer support cases by 20%.',
    ],
  },
  {
    title: 'Engineering Manager → Senior Engineering Manager',
    period: 'Aug 2017 – Jul 2020',
    company: 'Salesforce',
    location: 'San Francisco Bay Area',
    summary:
      'Directed technical strategy and delivery for core automation services; scaled US-India engineering teams.',
    bullets: [
      "Set technical strategy and delivery goals for teams shipping Salesforce's core automation products.",
      'Scaled organization headcount by recruiting, mentoring, and retaining top senior engineering talent.',
    ],
  },
  {
    title: 'Member of Technical Staff → Lead MTS',
    period: 'Oct 2009 – Jul 2017',
    company: 'Salesforce',
    location: 'San Francisco Bay Area',
    summary:
      '8 internal promotions over 8 years as hands-on core platform architect building foundational engines from scratch.',
    bullets: [
      'Architected foundational engines from scratch: Workflow, Approvals, and Process Builder — scaling to billions of daily execution runs.',
      'Designed custom platform permission model decoupling licensing from entitlements, still used platform-wide today.',
      'Built automated CI test-failure triage and flaky-test detection tooling, significantly improving developer productivity.',
    ],
  },
];
