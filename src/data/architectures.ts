export interface ArchitectureLink {
  label: string;
  href: string;
}

export interface ReferenceArchitecture {
  id: string;
  title: string;
  badge: string;
  role: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: ArchitectureLink[];
}

export const referenceArchitectures: ReferenceArchitecture[] = [
  {
    id: 'flowstrix',
    title: 'FlowStrix — Agent-Native Workflow Engine',
    badge: 'Declarative State Machine',
    role: 'Creator & Architect',
    description:
      'An agent-native declarative workflow engine exploring what low-code automation and state machines look like when rebuilt natively for the AI era. Executes declarative YAML agent contracts across 8 step primitives (lookup, reason, respond, branch, hitl, tool, wait, handoff) with dynamic graph parallelization.',
    highlights: [
      'Dynamic LangGraph parallel node execution cuts multi-tool step latency by ~50%.',
      'Instructor Ghostwriter NL-to-YAML compiler + AI simulation runner with LLM-as-a-Judge evaluators (151 passing tests).',
    ],
    tech: ['Python', 'LangGraph StateGraph', 'Pydantic v2', 'Instructor', 'FastAPI', 'Qdrant', 'React / TypeScript'],
    links: [
      { label: 'Live Demo', href: 'https://anjesh.ai/FlowStrix/' },
      { label: 'Engineering Docs', href: 'https://anjesh.ai/FlowStrix/engineering/' },
      { label: 'GitHub', href: 'https://github.com/anjeshdubey/FlowStrix' },
    ],
  },
  {
    id: 'sentinel',
    title: 'Sentinel — AI SRE Triage Platform',
    badge: 'Autonomous Incident Triage',
    role: 'Creator & Lead Architect',
    description:
      'An AI-driven SRE triage platform that ingests real-time incident alerts (PagerDuty, Grafana, Slack), enriches telemetry via CMDB tool calling, retrieves matching runbooks via Qdrant vector RAG, and streams structured diagnoses live. Features a LangGraph HITL interrupt gate for human sign-off when model confidence is low (τ < 0.80).',
    highlights: [
      'Multi-provider LLM gateway (Together AI, Groq, Gemini, Anthropic) with Upstash Redis semantic caching (-98% inference cost).',
      '369 passing tests (unit, functional SSE stream mocks, and real-API integration tests) with P50 cached latency <2s.',
    ],
    tech: ['Python', 'FastAPI', 'LangGraph HITL', 'Qdrant Vector RAG', 'Instructor / Pydantic', 'Modal Serverless', 'SSE'],
    links: [
      { label: 'Live Demo', href: 'https://anjesh.ai/Sentinel/' },
      { label: 'Engineering Docs', href: 'https://anjesh.ai/Sentinel/engineering/' },
      { label: 'GitHub', href: 'https://github.com/anjeshdubey/Sentinel' },
    ],
  },
  {
    id: 'audit-agent',
    title: 'Audit Agent Orchestrator — Deterministic Review',
    badge: 'Deterministic Verification',
    role: 'Creator & Lead Architect',
    description:
      'A citation-grounded compliance review agent automating SOC 2-style control testing across policy documents. Features a code-level verbatim quote verification engine that rejects LLM self-reported hallucinations, paired with a LangGraph MemorySaver review queue for human sign-off.',
    highlights: [
      '100% citation authenticity guaranteed by literal string matching before code-derived confidence scoring.',
      'Interactive SSE live review queue allowing auditors to inspect, approve, or reject evidence with notes before workpaper assembly.',
    ],
    tech: ['Python 3.11', 'LangGraph Checkpointing', 'Instructor', 'FastAPI', 'SSE Streams', 'Pytest (100% Core Coverage)'],
    links: [
      { label: 'Live Demo', href: 'https://anjesh.ai/Audit-Agent-Orchestrator/' },
      { label: 'Engineering Docs', href: 'https://anjesh.ai/Audit-Agent-Orchestrator/engineering/' },
      { label: 'GitHub Repo', href: 'https://github.com/anjeshdubey/Audit-Agent-Orchestrator' },
    ],
  },
];
