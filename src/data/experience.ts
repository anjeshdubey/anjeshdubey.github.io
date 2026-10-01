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
      'I lead engineering for Salesforce Flow: authoring, runtime, triggers, testing and debugging, and observability.',
    bullets: [
      'About 70 engineers in 10 teams across the US and India, led through 4 engineering managers and 7 principal architects.',
      'Flow is one of the ways Agentforce agents take action. My teams own the runtime those actions run on.',
      'Made flows callable by outside agents: an autolaunched flow can be published as a tool on Salesforce’s hosted MCP servers.',
      'Reworked runtime memory use and lock handling to cut memory-limit failures and transient UNABLE_TO_LOCK_ROW errors.',
      'Added version comparison and test tooling so customers can check a change before activating it.',
      'Led the integration of Regrello after the October 2025 acquisition. The product is now Agentforce Operations.',
      'Moved the org to AI-assisted development, which sped up delivery and bug fixes and raised test coverage.',
    ],
    links: [
      {
        label: 'Flows as MCP tools',
        href: 'https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/flows.html',
      },
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
    bullets: [
      'Drove the retirement of Process Builder, moving customers’ new automation onto Flow.',
      'Shipped HTTP Callout, which lets admins call external services from a flow without code.',
      'Coached managers and senior engineers across a global org.',
    ],
    links: [
      {
        label: 'HTTP Callout in Spring ’23',
        href: 'https://admin.salesforce.com/blog/2023/flow-enhancements-for-admins-learn-moar-spring-23',
      },
    ],
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
    links: [{ label: 'Patents from this work', href: '#patents' }],
  },
];
