export interface EssaySection {
  heading: string;
  paragraphs: string[];
  callout?: string;
  codeOrDiagram?: string;
}

export interface Essay {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  abstract: string;
  readTime: string;
  date: string;
  featured: boolean;
  thesis: string;
  sections: EssaySection[];
  takeaways: string[];
}

export const essays: Essay[] = [
  {
    id: 'reasoning-vs-commitment',
    slug: 'reasoning-vs-commitment',
    category: 'AI systems',
    title: 'Generated is not deployable',
    subtitle: 'The hard part of an enterprise agent begins after the model decides what should happen.',
    abstract:
      'Models make it cheap to draft logic. Production systems still need a clear boundary where identity, policy, transactions, tests, and human accountability take over.',
    readTime: '4 min read',
    date: 'September 2026',
    featured: true,
    thesis:
      'Reasoning can be probabilistic. A consequential action still needs to cross a governed contract before it changes a system of record.',
    takeaways: [
      'A generated answer and a deployable capability are different products.',
      'Agents should invoke stable business contracts instead of improvising writes.',
      'Identity, rollback, limits, and audit belong in the execution layer.',
      'Human review should pause and resume the same durable state, not restart the work.',
    ],
    sections: [
      {
        heading: 'Creation is no longer the bottleneck',
        paragraphs: [
          'A model can now draft a workflow, a query, or an integration in minutes. That is a meaningful change, but it does not remove the work required to trust the result. It moves attention from producing syntax to proving behavior.',
          'The questions that remain are familiar: Which identity is acting? What is the allowed scope? What happens after a partial failure? Can the change be tested, reviewed, rolled back, and explained to the next operator?',
        ],
      },
      {
        heading: 'The commitment boundary',
        paragraphs: [
          'Reasoning is where ambiguity is useful. A model can interpret a request, gather context, compare options, and propose a next step. Commitment is where ambiguity becomes risk. Updating an order, changing access, issuing a refund, or promising a delivery needs a narrower path.',
          'A governed capability provides that path. It defines its inputs and outputs, checks identity and policy, owns the transaction, and records what happened. The agent chooses an approved action. The capability performs it.',
        ],
        callout: 'Let the model stay flexible in thought. Make the route to a consequential action explicit.',
      },
      {
        heading: 'Stable capabilities beat generated scripts',
        paragraphs: [
          'If every request produces a new script, the organization gains creation speed and inherits a growing set of security assumptions, error conventions, and owners. The apparent shortcut becomes an operating problem.',
          'A reusable business capability is slower to define once and cheaper to trust many times. It can serve a user interface, an event, another service, and an agent without duplicating the business rule for each caller.',
        ],
      },
      {
        heading: 'Human review is part of the runtime',
        paragraphs: [
          'Some decisions are uncertain, high consequence, or explicitly reserved for a person. A production agent should be able to stop, preserve its state and evidence, request a decision, and continue without repeating earlier actions.',
          'That makes accountability a system property instead of a message in a prompt. The workflow knows where review is required, who can provide it, and what should happen next.',
        ],
      },
    ],
  },
  {
    id: 'mcp-headless-runtimes',
    slug: 'mcp-headless-runtimes',
    category: 'Product architecture',
    title: 'One capability, many surfaces',
    subtitle: 'Why AI should expand how a business capability is created and used without creating a different implementation for every channel.',
    abstract:
      'A visual builder, an IDE, a chat surface, an event, and an agent can share the same business capability when the contract and runtime are separate from the interface.',
    readTime: '4 min read',
    date: 'September 2026',
    featured: true,
    thesis:
      'Headless does not mean interface-free. It means the business capability is not trapped inside one interface.',
    takeaways: [
      'People and agents need different ways to understand the same capability.',
      'Typed inputs, outputs, identity, and failure behavior form the durable contract.',
      'A common runtime prevents channel-specific copies of business logic.',
      'Operational evidence should follow the work across every surface.',
    ],
    sections: [
      {
        heading: 'The canvas is a surface, not the product',
        paragraphs: [
          'Visual builders are good at helping a person inspect sequence, branches, and dependencies. They are less useful to an agent, which needs a machine-readable contract with clear inputs, outputs, and failure behavior.',
          'The mistake is to choose one interface as the source of truth. The business capability should live beneath the surface so each user can interact with it in the form that fits the job.',
        ],
      },
      {
        heading: 'The contract travels',
        paragraphs: [
          'A well-defined capability can start from a record change, a schedule, a button, a conversation, or a tool call. Each entry point should reach the same validation, policy, execution, and history.',
          'Protocols such as MCP make discovery and invocation easier for agents. The deeper architectural value is not the protocol itself. It is the decision to make business logic callable through a stable, governed contract.',
        ],
        callout: 'The same action should not become five different systems because it appears in five different places.',
      },
      {
        heading: 'Tracing must cross the surface boundary',
        paragraphs: [
          'When an agent calls a tool that starts a workflow and updates a record, the operator needs a connected account of what happened. The request, delegated identity, model decision, tool call, workflow path, and final transaction belong to one causal story.',
          'Without that story, every new interface creates another gap for an operator to reconstruct during an incident.',
        ],
      },
      {
        heading: 'More interfaces should create more reuse',
        paragraphs: [
          'A mature platform lets people author and inspect visually, work in an IDE when precision matters, invoke through an agent, and receive operational help in chat. Those experiences should strengthen a shared capability rather than fragment it.',
          'That is the practical promise of headless architecture: more ways to work, with fewer copies of the truth.',
        ],
      },
    ],
  },
];
