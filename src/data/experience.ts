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
      'Owning the Salesforce Flow platform — the core distributed state machine & deterministic execution engine powering Agentforce across Sales, Service, Marketing, and Data Cloud.',
    bullets: [
      'Direct the distributed state machine runtime executing 700B+ in-memory process instances monthly across 60M monthly active users and 135,000 enterprise customers.',
      'Architected Flow as the core deterministic execution layer behind Agentforce, powering 55%+ of all autonomous Agentforce agent actions in production.',
      'Lead a global engineering organization of ~70 engineers across platform engineering teams, directing architecture and delivery through 4 engineering managers and 7 principal architects.',
      'Spearheaded core runtime architecture refactoring delivering a 56% memory footprint reduction and 35% compute optimization, eliminating row-lock contention (UNABLE_TO_LOCK_ROW) under high concurrency.',
      'Led Regrello acquisition integration: re-architected and launched it as Agentforce Supply Chain Automation in 60 days (acquisition to GA) — fastest in Salesforce history.',
      'Drove AI-native SDLC transformation: tripled developer velocity, reduced incident MTTR from 1 day to 2–3 hours, and elevated core test coverage from 70% to 95%.',
    ],
  },
  {
    title: 'Director, Software Development',
    period: 'Aug 2020 – Feb 2024',
    company: 'Salesforce',
    location: 'San Francisco Bay Area',
    summary:
      'Scaled multi-tenant core platform infrastructure and global engineering teams enabling hyper-growth across enterprise CRM cloud services.',
    bullets: [
      'Managed a 30+ engineer global platform organization through full SDLC; aligned technical roadmaps, high-availability architecture, and Tier-0 SLAs with C-suite stakeholders.',
      'Championed zero-downtime deployment pipelines and automated error-prevention guardrails, reducing enterprise production support incidents by 20%.',
    ],
  },
  {
    title: 'Senior Engineering Manager → Engineering Manager',
    period: 'Aug 2017 – Jul 2020',
    company: 'Salesforce',
    location: 'San Francisco Bay Area',
    summary:
      'Directed technical strategy and delivery for core automation services; scaled US and India engineering teams.',
    bullets: [
      'Established technical strategy, reliability standards, and delivery cadence for teams building core platform automation engines.',
      'Scaled organization headcount across continents, hiring, mentoring, and retaining senior engineering talent and engineering managers.',
    ],
  },
  {
    title: 'Member of Technical Staff → Lead MTS',
    period: 'Oct 2009 – Jul 2017',
    company: 'Salesforce',
    location: 'San Francisco Bay Area',
    summary:
      '15-year foundation as hands-on core platform architect building foundational distributed engines and multi-tenant systems from scratch.',
    bullets: [
      'Architected foundational distributed engines from scratch: Workflow, Approvals, and Process Builder — scaling from zero to billions of daily execution runs.',
      'Designed custom multi-tenant permission and isolation model decoupling licensing from entitlements, still actively utilized platform-wide.',
      'Built automated CI test-failure triage and flaky-test detection tooling, substantially improving platform-wide developer velocity.',
    ],
  },
];
