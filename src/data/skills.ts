export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Agent Architecture',
    skills: [
      'LangGraph (StateGraph / MemorySaver / Interrupts)',
      'Multi-Provider LLM Gateways (Together / Groq / Gemini / Anthropic)',
      'Vector RAG (Qdrant / FastEmbed / BGE-small)',
      'Structured Outputs (Instructor / Pydantic v2)',
      'Human-in-the-Loop (HITL) Guardrails',
      'Deterministic Code Verification Engine',
      'LLM-as-a-Judge & Simulation Harnesses',
      'Prompt-Injection Defense-in-Depth',
    ],
  },
  {
    title: 'Platform, Cloud & Engineering Leadership',
    skills: [
      'Tier-0 99.99% Availability Systems',
      '100B+ Daily Execution Engine Scale',
      'FastAPI & Serverless Infrastructure (Modal)',
      '0→70 Engineer Global Org Building (US & India)',
      'Regrello Acquisition Integration (GA in 60 days)',
      'Upstash Redis Caching & Rate-Limiting',
      'Python, Go, TypeScript, React 18, Java, SQL',
      'Server-Sent Events (SSE) & WebSockets',
    ],
  },
];
