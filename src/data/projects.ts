export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: 'sentinel',
    title: 'Sentinel — AI SRE Triage Agent',
    role: 'Creator & Lead Architect',
    description:
      'An AI-driven SRE triage platform that reads incident alerts (PagerDuty, Grafana, Slack), enriches context via CMDB tool calling (owners, deploys), retrieves matching runbooks via Qdrant RAG, and streams structured diagnoses live. Features a LangGraph HITL gate that interrupts execution for human sign-off when confidence is low (τ < 0.80).',
    highlights: [
      'Multi-provider LLM gateway (Together AI, Groq, Gemini, Anthropic) with Upstash Redis caching (-98% inference cost).',
      '369 passing tests (unit, functional SSE stream mocks, and real-API integration tests) with P50 cached latency <2s.',
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'Qdrant RAG', 'Instructor / Pydantic', 'Modal Serverless', 'SSE'],
    links: [
      { label: 'Live Demo', href: 'https://anjesh.ai/Sentinel/' },
      { label: 'Engineering Docs', href: 'https://anjesh.ai/Sentinel/engineering/' },
      { label: 'GitHub', href: 'https://github.com/anjeshdubey/Sentinel' },
    ],
  },
  {
    id: 'flowstrix',
    title: 'FlowStrix — Agent-Native Workflow Engine',
    role: 'Creator & Architect',
    description:
      'An agent-native declarative workflow engine exploring what low-code automation (like Salesforce Flow) looks like when rebuilt for the AI era. Executes YAML agent contracts across 8 step primitives (lookup, reason, respond, branch, hitl, tool, wait, handoff) with dynamic graph parallelization.',
    highlights: [
      'Dynamic LangGraph parallel node execution cuts multi-tool step latency by ~50%.',
      'Instructor Ghostwriter NL-to-YAML compiler + AI simulation runner with LLM-as-a-Judge evaluators (151 passing tests).',
    ],
    tech: ['Python', 'LangGraph', 'Pydantic v2', 'Instructor', 'FastAPI', 'Qdrant', 'React 18 / TypeScript'],
    links: [
      { label: 'Live Demo', href: 'https://anjesh.ai/FlowStrix/' },
      { label: 'Engineering Docs', href: 'https://anjesh.ai/FlowStrix/engineering/' },
      { label: 'GitHub', href: 'https://github.com/anjeshdubey/FlowStrix' },
    ],
  },
  {
    id: 'audit-agent',
    title: 'Audit Agent Orchestrator — Compliance Review',
    role: 'Creator & Lead Architect',
    description:
      'A citation-grounded compliance review agent automating SOC 2-style design testing across policy documents. Features a code-level verbatim quote verification engine (rejecting LLM self-reported confidence) paired with a LangGraph MemorySaver review queue for human sign-off.',
    highlights: [
      '100% citation authenticity guaranteed by literal string matching before code-derived confidence scoring.',
      'Interactive SSE live review queue allowing auditors to approve/reject evidence with notes before workpaper assembly.',
    ],
    tech: ['Python 3.11', 'LangGraph Checkpointing', 'Instructor', 'FastAPI', 'SSE', 'Pytest (100% Core Coverage)'],
    links: [
      { label: 'Live Demo', href: 'https://anjesh.ai/Audit-Agent-Orchestrator/' },
      { label: 'Engineering Docs', href: 'https://anjesh.ai/Audit-Agent-Orchestrator/engineering/' },
      { label: 'GitHub Repo', href: 'https://github.com/anjeshdubey/Audit-Agent-Orchestrator' },
    ],
  },
];
