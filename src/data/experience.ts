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
    period: 'Feb 2024 to present',
    company: 'Salesforce',
    location: 'San Francisco Bay Area',
    summary:
      'Lead engineering across Salesforce Flow authoring, triggers, runtime, testing, debugging, and observability.',
    bullets: [
      'Set product and architecture direction for the full path from business intent to reliable automation.',
      'Lead through engineering managers, principal engineers, and architects across the US and India.',
      'Led the engineering integration of Regrello into Salesforce and its evolution into Agentforce Operations.',
      'Keep runtime efficiency, reliability, and operability on the roadmap alongside customer-facing product work.',
    ],
  },
  {
    title: 'Director, Software Development',
    period: 'Aug 2020 to Feb 2024',
    company: 'Salesforce',
    location: 'San Francisco Bay Area',
    summary:
      'Led the global engineering organization building Salesforce Flow and expanded the platform’s scale, reliability, and reach.',
    bullets: [],
  },
  {
    title: 'Engineering Manager to Senior Engineering Manager',
    period: 'Aug 2017 to Jul 2020',
    company: 'Salesforce',
    location: 'San Francisco Bay Area',
    summary:
      'Built and led teams in the US and India responsible for core automation engines and platform delivery.',
    bullets: [],
  },
  {
    title: 'Member of Technical Staff to Lead MTS',
    period: 'Oct 2009 to Jul 2017',
    company: 'Salesforce',
    location: 'San Francisco Bay Area',
    summary:
      'Eight years as a hands-on engineer and architect on Workflow, Approvals, Process Builder, and the platform permission model.',
    bullets: [],
  },
];
