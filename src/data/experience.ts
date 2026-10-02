import type { LabeledLink } from './links';

export interface Experience {
  title: string;
  period: string;
  company: string;
  summary: string;
  bullets: string[];
  links?: LabeledLink[];
}

export const experiences: Experience[] = [
  {
    title: 'Senior Director, Software Engineering',
    period: 'Feb 2024 – Present',
    company: 'Salesforce',
    summary:
      'I lead engineering for Salesforce Flow, the deterministic execution engine behind Agentforce across Sales, Service, Marketing and Data Cloud: authoring, runtime, triggers, testing and debugging, and observability.',
    bullets: [
      'Run the runtime that executes 700B+ process instances a month for 60M monthly active users at 135,000 enterprise customers.',
      'Led the work that made Flow the deterministic execution layer for Agentforce. 55%+ of Agentforce agent actions in production now run on it.',
      'Lead a global engineering organization of ~70 engineers across platform engineering teams, directing architecture and delivery through 4 engineering managers, 7 principal engineers and 2 architects.',
      'Keep scale and performance work on the roadmap against feature pressure, which is what lets the runtime handle 700B+ executions a month. One example: a runtime rework that cut memory use by 56% and compute by 35% and sharply reduced lock contention under high concurrency.',
      'Led the Regrello integration end to end after the October 2025 acquisition: re-architected it to run on Salesforce in 60 days and took it live for customers in January 2026, about three months after close. Leadership recognized it as Salesforce’s fastest acquisition to GA, and it earned a President’s Award. Relaunched in April 2026 as Agentforce Operations.',
      'Moved the org to AI-native development: 3x developer velocity, bug resolution down from a day to 2–3 hours, and test coverage up from 70% to 95%.',
    ],
    links: [
      {
        label: 'Regrello acquisition',
        href: 'https://www.salesforce.com/news/stories/salesforce-signs-definitive-agreement-to-acquire-regrello/',
      },
      { label: 'Agentforce Operations', href: 'https://www.salesforce.com/agentforce/operations/' },
    ],
  },
  {
    title: 'Director, Software Development',
    period: 'Aug 2020 – Feb 2024',
    company: 'Salesforce',
    summary: 'Led a 30+ engineer global org building Flow.',
    bullets: [],
  },
  {
    title: 'Engineering Manager → Senior Engineering Manager',
    period: 'Aug 2017 – Jul 2020',
    company: 'Salesforce',
    summary: 'First management roles: built and led the US and India teams behind the core automation engines.',
    bullets: [],
  },
  {
    title: 'Member of Technical Staff → Lead MTS',
    period: 'Oct 2009 – Jul 2017',
    company: 'Salesforce',
    summary:
      'Eight years as a hands-on engineer and architect on the automation engines (Workflow, Approvals, Process Builder) and the platform’s custom permission model.',
    bullets: [],
  },
];
