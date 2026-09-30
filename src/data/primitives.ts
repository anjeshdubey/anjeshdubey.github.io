export interface ArchitecturalPillar {
  id: string;
  title: string;
  subtitle: string;
  capabilities: string[];
}

export const architecturalPillars: ArchitecturalPillar[] = [
  {
    id: 'agentic-systems',
    title: 'Agentic Systems & Orchestration',
    subtitle: 'State Machines, Tool Contracts & Deterministic Guardrails',
    capabilities: [
      'LangGraph StateGraph (State Machines, MemorySaver Checkpointing & Interrupts)',
      'Model Context Protocol (MCP) Headless Servers & Structured Tool Schemas',
      'Multi-Provider LLM Gateways (Anthropic Claude, Google Gemini, Groq, Together AI)',
      'Deterministic Code-Level Verification Engines (Literal Quote Verification & Grounded Citations)',
      'Structured Schema Enforcement (Pydantic v2 & Instructor Strict Outputs)',
      'Human-in-the-Loop (HITL) Checkpoints & Dynamic Approval Workflows',
      'Vector RAG Architecture (Qdrant, FastEmbed, Dense & Hybrid Retrieval)',
      'LLM-as-a-Judge Evaluation Frameworks & Simulation Test Harnesses',
    ],
  },
  {
    id: 'multi-tenant-scale',
    title: 'Multi-Tenant Platform Scale',
    subtitle: 'Distributed State Machines, High Concurrency & FinOps',
    capabilities: [
      'Distributed State Machine Runtimes Executing 700B+ In-Memory Instances Monthly',
      'Tier-0 99.99% Availability Systems (<52.6 min downtime/yr) across 135K+ Enterprises',
      'Runtime Memory Optimization (56% Footprint Reduction & 35% Compute Savings)',
      'Concurrency Control & Row-Lock Contention Mitigation (Eliminating UNABLE_TO_LOCK_ROW)',
      'Causal Transaction Tracing Propagating Identity, Intent & Audit Graphs',
      'Multi-Tenant Tenant Isolation, Governor Limits & Fair-Share Quota Scheduling',
      'FinOps Optimization & Semantic Caching via Upstash Redis (-98% Inference Cost)',
      'Real-Time Event Streaming (Server-Sent Events, WebSockets & Distributed Queues)',
    ],
  },
  {
    id: 'executive-leadership',
    title: 'Executive Engineering Leadership',
    subtitle: 'Organizational Design, Strategic M&A & Velocity',
    capabilities: [
      'Global Engineering Org Building: Scaling 0 → 70 Platform Engineers (US & India)',
      'Leadership Topology: Directing 4 Engineering Managers and 7 Principal Architects',
      'High-Velocity M&A Platform Integration: Regrello Acquisition to Enterprise GA in 60 Days',
      'AI-Native SDLC Transformation: Tripled Velocity, MTTR 1d → 2h, Test Coverage 70% → 95%',
      'C-Suite Technical Partnership: Translating Complex Distributed Systems into Strategic Roadmaps',
      'Enterprise Governance & Trust Boundaries: Zero-Trust Security, Audit Trails & Compliance',
    ],
  },
];
