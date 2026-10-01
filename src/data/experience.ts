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
      'About 70 engineers in 10 teams across the US and India, led through 4 engineering managers and 7 principal architects.',
      'Reworked runtime memory use and lock handling to cut memory-limit failures and transient UNABLE_TO_LOCK_ROW errors.',
      'Led the integration of Regrello after the October 2025 acquisition. The product is now Agentforce Operations.',
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
    summary: 'Led a 30+ engineer org building Flow.',
    bullets: ['Coached managers and senior engineers across a global org.'],
  },
  {
    title: 'Engineering Manager → Senior Engineering Manager',
    period: 'Aug 2017 – Jul 2020',
    company: 'Salesforce',
    summary: 'First management roles, leading teams on how flows are triggered.',
    bullets: [
      'Delivered before-save and after-save record-triggered flows.',
      'Delivered platform event–triggered flows.',
      'Hired and grew engineers in the US and India.',
    ],
    links: [
      {
        label: 'Flow triggers in Summer ’20',
        href: 'https://admin.salesforce.com/blog/2020/learn-moar-about-lightning-flow-goodies-coming-in-summer-20',
      },
    ],
  },
  {
    title: 'Member of Technical Staff → Lead MTS',
    period: 'Oct 2009 – Jul 2017',
    company: 'Salesforce',
    summary: 'Engineer on the Salesforce platform for eight years before moving into management.',
    bullets: [
      'Built and evolved the automation engines behind Workflow, Approvals and Process Builder.',
      'Co-designed a custom permission model that separates licensing from entitlements.',
      'Built CI tooling for test-failure triage and flaky-test detection.',
    ],
  },
];
