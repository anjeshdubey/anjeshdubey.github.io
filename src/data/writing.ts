export interface EssaySection {
  heading: string;
  paragraphs: string[];
  callout?: string;
}

export interface Essay {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  abstract: string;
  date: string;
  published: boolean;
  thesis: string;
  sections: EssaySection[];
  takeaways: string[];
}

const essays: Essay[] = [
  {
    id: 'reasoning-vs-commitment',
    slug: 'reasoning-vs-commitment',
    category: 'Runtime Architecture',
    title: 'Reasoning vs. Commitment: The Enterprise Agent Bottleneck',
    subtitle: 'Why probabilistic models are commodities, and why transactional integrity, rollback boundaries, and state machines are the real bottlenecks of enterprise agents.',
    abstract: 'Frontier LLMs have commoditized semantic classification and intent parsing. The true enterprise bottleneck is the commitment boundary: ensuring an autonomous agent’s writes execute within governed, transactional, and reversible state machine contracts.',
    date: 'September 2026',
    published: true,
    thesis: 'In enterprise architecture, reasoning can be probabilistic, but commitment must remain deterministic. The frontier of AI platform engineering is not prompt crafting—it is state machine orchestration and transactional governance.',
    takeaways: [
      'Model intelligence is a commodity; deterministic execution is the defensible enterprise moat.',
      'Agents must never write directly to raw database schemas; they must invoke governed, versioned business capabilities.',
      'Transaction rollbacks, tenant isolation, and identity propagation must be enforced at the runtime execution layer, not left to model discretion.',
      'State machines provide the necessary checkpointing for human-in-the-loop (HITL) pauses without tearing down process state.'
    ],
    sections: [
      {
        heading: 'The Commoditization of Reasoning',
        paragraphs: [
          'Over the past twenty-four months, frontier language models have radically driven down the marginal cost of cognitive reasoning. Tasks that once demanded bespoke machine learning models—intent detection, unstructured document extraction, sentiment evaluation, and conversational dialogue—can now be addressed with off-the-shelf foundation models via simple API calls.',
          'Yet despite trillions of tokens processed daily, enterprises remain hesitant to grant autonomous agents full operational authority. The hesitation is rarely about whether the model understood the prompt; it is about what happens when the agent commits a transaction to the system of record.',
          'Anyone can prompt an LLM to reason through a customer dispute or generate an orchestration plan. The enterprise crisis begins the moment the agent attempts to update an order, reallocate ledger inventory, revoke user permissions, or schedule field technicians.'
        ]
      },
      {
        heading: 'The Commitment Boundary',
        paragraphs: [
          'Enterprise platforms operate on deterministic guarantees: ACID transaction boundaries, field-level security (FLS), record-sharing models, multi-tenant resource quotas, and immutable audit logs. Relational data stores do not understand semantic nuance—a row is locked, a constraint is verified, and a state transition is either atomically committed or rolled back.',
          'When we introduce probabilistic agents into this environment, we encounter a fundamental impedance mismatch. If an agent hallucinates a parameter during reasoning, the cost is trivial. If an agent executes a partial database mutation before crashing or exceeding a governor limit, the system of record is corrupted.',
          'This establishes the Commitment Boundary: the architectural separation between where probabilistic reasoning ends and where deterministic execution begins.'
        ],
        callout: 'Rule of Enterprise Agentics: Reasoning can be probabilistic, but commitment must remain deterministic. The agent decides what should happen; the platform state machine controls how it is executed.'
      },
      {
        heading: 'Why Agents Must Not Write Bespoke Code at Runtime',
        paragraphs: [
          'An early pattern championed by demo builders was dynamic code execution: instructing the LLM to write ad-hoc Python or SQL scripts and running them against production databases. In an enterprise environment, this pattern is catastrophic.',
          'Allowing an LLM to generate bespoke data-mutation scripts bypasses compliance governance, breaks schema change management, invalidates deterministic testing, and creates an untraceable security surface. When an outage occurs at 2:00 AM, site reliability engineers cannot audit thousands of unique, ephemeral scripts generated on the fly.',
          'The winning architectural pattern is capability encapsulation. Instead of writing code, agents must discover and invoke pre-governed business capabilities—reusable autolaunched state machines that encapsulate transactional logic, permission checks, rollback handlers, and causal audit trails.'
        ]
      },
      {
        heading: 'Checkpointing and Human-in-the-Loop State Serialization',
        paragraphs: [
          'Autonomous systems will inevitably encounter edge cases where confidence drops below operational thresholds or where high-consequence policies require human authorization. A robust runtime must support deterministic pause and resume semantics.',
          'By modeling agent workflows as durable state machines, the platform can serialize process memory to persistent storage at any node in the execution graph. The agent can freeze execution, yield control, dispatch an interactive approval card to Slack, Teams, or CRM, and wait for human review.',
          'Upon human sign-off, the state machine rehydrates from memory without re-running upstream LLM inferences or risking duplicate transaction mutations. This bridges human oversight with automated throughput.'
        ]
      },
      {
        heading: 'Architecting for the Next Decade of Enterprise AI',
        paragraphs: [
          'As frontier models continue to advance, the distinction between proprietary LLMs will narrow. The lasting competitive moat for enterprise platforms will not be the model powering the agent, but the resilience of the execution platform beneath it.',
          'Platforms that master deterministic state machines, causal tracing, fine-grained identity propagation, and transactional safety boundaries will become the indispensable operating systems of the autonomous enterprise.'
        ]
      }
    ]
  },
  {
    id: 'mcp-headless-runtimes',
    slug: 'mcp-headless-runtimes',
    category: 'Headless Systems',
    title: 'Headless Runtimes and the MCP Paradigm',
    subtitle: 'Transitioning beyond canvas-based workflows into machine-readable tool contracts for autonomous agent callers.',
    abstract: 'Visual workflow builders were designed for human spatial reasoning. In the agentic era, automation engines must decouple from canvas UIs and expose their capabilities through standardized, machine-readable tool contracts like the Model Context Protocol (MCP).',
    date: 'September 2026',
    published: true,
    thesis: 'Headless does not mean lack of interface; it means that business capability is decoupled from visual canvases so that humans, systems, and autonomous agents can discover and invoke the exact same governed logic.',
    takeaways: [
      'Visual canvases are human design surfaces; agents require strict JSON/Pydantic schemas and typed input/output contracts.',
      'Model Context Protocol (MCP) provides a vendor-neutral protocol for dynamic tool discovery, capability negotiation, and execution.',
      'Causal transaction tracing must link human user intent, agent conversational turns, and backend platform execution into one unified graph.',
      'A single autolaunched state machine can serve simultaneously as an event trigger, a UI action, and an agent tool.'
    ],
    sections: [
      {
        heading: 'The Visual Canvas Paradox',
        paragraphs: [
          'For the past fifteen years, enterprise low-code automation was defined by the visual drag-and-drop canvas. Visual builders democratized workflow creation, enabling administrators and business analysts to wire triggers, decision gates, and database operations into flowchart graphs.',
          'However, visual canvases are fundamentally human-centric abstractions. They organize logic spatially—using coordinates, layout grids, and visual connectors. Autonomous agents do not perceive spatial layouts; they require declarative schemas, deterministic type definitions, input validation rules, and structured error responses.',
          'When an enterprise attempts to adapt an existing canvas engine for AI agents simply by wrapping a chat interface on top of the designer, it creates severe cognitive and architectural overhead. The engine must decouple its authoring surface from its runtime execution.'
        ]
      },
      {
        heading: 'Model Context Protocol (MCP) as the Enterprise Contract',
        paragraphs: [
          'The industry’s rapid convergence on the Model Context Protocol (MCP) marks a pivotal transition in systems architecture. MCP establishes an open, standard protocol for exposing tools, resources, and contextual prompts to language models, whether running locally or across distributed clouds.',
          'By exposing enterprise state machines via hosted MCP servers, organizations transform disparate business operations into a unified, machine-discoverable tool catalog. An autonomous agent can query the MCP server, inspect the JSON schema for an order cancellation capability, evaluate required permissions, and construct a valid execution payload without human intervention.'
        ],
        callout: 'The MCP shift turns business logic into typed API contracts. The same process that runs when an admin clicks a button is exposed as an MCP tool for an autonomous agent.'
      },
      {
        heading: 'Causal Tracing Across Autonomous Execution Chains',
        paragraphs: [
          'In human-driven workflows, causal tracing is straightforward: user ID Alice clicked button X at timestamp T, producing transaction log L. Identity, intent, and audit are tightly coupled.',
          'In autonomous agent architectures, execution causality fractures across multiple non-deterministic boundaries. An agent might consume a Slack message, make three internal LLM reasoning passes, call a search retrieval tool, invoke an MCP workflow tool, encounter a validation error, correct its input, and re-attempt execution.',
          'To ensure enterprise observability, platforms must implement causal transaction graphs. Every MCP tool invocation must propagate parent trace IDs, conversation turn IDs, agent model hashes, and authenticated user delegation contexts through the execution stack.',
          'When an auditor or SRE inspects a failure, they must be able to traverse seamlessly from the high-level prompt dialogue all the way down to the low-level database row lock.'
        ]
      },
      {
        heading: 'The Dual-Mode Enterprise: Visual and Headless Coexistence',
        paragraphs: [
          'The emergence of headless MCP runtimes does not render visual canvases obsolete. Instead, it redefines their purpose. Visual builders remain the premier governance, debugging, and inspection surface for human architects.',
          'In a mature enterprise architecture, human admins use visual surfaces to define guardrails, inspect live execution paths, review anomalies, and simulate edge cases. Meanwhile, autonomous agents interact with the same underlying engine headlessly via MCP tool contracts.',
          'By separating the execution engine from the presentation layer, the enterprise achieves agility without sacrificing institutional control.'
        ]
      }
    ]
  }
];

export const publishedEssays = essays.filter((essay) => essay.published);

const WORDS_PER_MINUTE = 230;

export const readTime = (essay: Essay): string => {
  const text = [
    essay.thesis,
    ...essay.takeaways,
    ...essay.sections.flatMap((section) => [section.heading, ...section.paragraphs, section.callout ?? '']),
  ].join(' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
};
