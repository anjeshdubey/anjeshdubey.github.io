import type { LabeledLink } from './links';

export interface SideProject {
  id: string;
  title: string;
  description: string;
  highlight: string;
  tech: string[];
  links: LabeledLink[];
}

export const sideProjects: SideProject[] = [
  {
    id: 'flowstrix',
    title: 'FlowStrix',
    description:
      'A workflow engine for agents. A YAML file defines the steps (look up, reason, respond, branch, human approval, tool call, wait, hand off) and the engine runs them as a LangGraph state machine.',
    highlight: 'Dynamic LangGraph parallel node execution cuts multi-tool step latency by ~50%.',
    tech: ['Python', 'LangGraph StateGraph', 'Pydantic v2', 'Instructor', 'FastAPI', 'Qdrant', 'React / TypeScript'],
    links: [
      { label: 'Live demo', href: 'https://anjesh.ai/FlowStrix/' },
      { label: 'Engineering docs', href: 'https://anjesh.ai/FlowStrix/engineering/' },
      { label: 'GitHub', href: 'https://github.com/anjeshdubey/FlowStrix' },
    ],
  },
  {
    id: 'sentinel',
    title: 'Sentinel',
    description:
      'An on-call triage agent. It reads an alert from PagerDuty, Grafana or Slack, looks up the service owner and recent deploys, finds the matching runbook, and writes a structured diagnosis. Low-confidence results wait for a person to approve.',
    highlight:
      'Multi-provider LLM gateway (Together AI, Groq, Gemini, Anthropic) with Upstash Redis semantic caching.',
    tech: ['Python', 'FastAPI', 'LangGraph HITL', 'Qdrant Vector RAG', 'Instructor / Pydantic', 'Modal Serverless', 'SSE'],
    links: [
      { label: 'Live demo', href: 'https://anjesh.ai/Sentinel/' },
      { label: 'Engineering docs', href: 'https://anjesh.ai/Sentinel/engineering/' },
      { label: 'GitHub', href: 'https://github.com/anjeshdubey/Sentinel' },
    ],
  },
  {
    id: 'audit-agent',
    title: 'Audit Agent Orchestrator',
    description:
      'A compliance review agent for SOC 2-style control testing. The model pulls evidence quotes from policy documents, code checks each quote against the source text before anything is scored, and a reviewer signs off.',
    highlight:
      '100% citation authenticity guaranteed by literal string matching before code-derived confidence scoring.',
    tech: ['Python 3.11', 'LangGraph Checkpointing', 'Instructor', 'FastAPI', 'SSE Streams', 'Pytest (100% Core Coverage)'],
    links: [
      { label: 'Live demo', href: 'https://anjesh.ai/Audit-Agent-Orchestrator/' },
      { label: 'Engineering docs', href: 'https://anjesh.ai/Audit-Agent-Orchestrator/engineering/' },
      { label: 'GitHub', href: 'https://github.com/anjeshdubey/Audit-Agent-Orchestrator' },
    ],
  },
];
