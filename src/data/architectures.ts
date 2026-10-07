export interface ArchitectureLink {
  label: string;
  href: string;
}

export interface ReferenceArchitecture {
  id: string;
  title: string;
  type: string;
  problem: string;
  designChoice: string;
  hardPart: string;
  learning: string;
  architecture: string[];
  links: ArchitectureLink[];
}

export const referenceArchitectures: ReferenceArchitecture[] = [
  {
    id: 'axiom8',
    title: 'Axiom8',
    type: 'Adaptive learning product',
    problem:
      'Middle-school math club students needed practice that met them at their level, while volunteers needed a simple way to run shared weekly problem sessions.',
    designChoice:
      'I separated personal practice from club sessions. Adaptive answers shape each student’s learning plan; club answers stay isolated so a group activity never distorts personal mastery.',
    hardPart:
      'The difficult work is not generating more questions. It is selecting the right next question, tracking exposure and mastery, and making sure AI-assisted content is solved and checked before a student sees it.',
    learning:
      'Designing for real students and volunteers made the product boundary clearer: personalization and group facilitation are related, but they are different jobs.',
    architecture: ['Diagnostic', 'Skill model', 'Adaptive selection', 'Verified question pipeline', 'Explanation', 'Spaced review'],
    links: [{ label: 'Live product', href: 'https://axiomacademy.app/' }],
  },
  {
    id: 'flowstrix',
    title: 'FlowStrix',
    type: 'Agent workflow engine',
    problem:
      'Agent demos often hide control flow inside application code, which makes the system difficult to review, test, and change.',
    designChoice:
      'I made the workflow a typed YAML contract and compile it into a state graph with explicit steps for reasoning, tools, branching, waiting, human review, and handoff.',
    hardPart:
      'Parallel execution must reduce latency without making state merges, retries, and failure behavior unpredictable.',
    learning:
      'A declarative contract is valuable only when the runtime makes its guarantees visible. The compiler and execution trace matter as much as the syntax.',
    architecture: ['YAML contract', 'Schema validation', 'Graph compiler', 'Stateful runtime', 'Human checkpoint', 'Execution trace'],
    links: [
      { label: 'Live demo', href: 'https://anjesh.ai/FlowStrix/' },
      { label: 'Engineering notes', href: 'https://anjesh.ai/FlowStrix/engineering/' },
      { label: 'Code', href: 'https://github.com/anjeshdubey/FlowStrix' },
    ],
  },
  {
    id: 'sentinel',
    title: 'Sentinel',
    type: 'Incident triage agent',
    problem:
      'On-call engineers lose time gathering ownership, deploy, alert, and runbook context before they can form a useful diagnosis.',
    designChoice:
      'The system gathers evidence first, produces a structured diagnosis second, and pauses low-confidence results for a person instead of presenting every answer as certain.',
    hardPart:
      'Evidence arrives from different tools with different failure modes. The workflow must degrade clearly when context is missing and keep model output grounded in what it actually retrieved.',
    learning:
      'The useful unit is not a clever answer. It is a diagnosis with enough evidence and uncertainty for an engineer to decide what to do next.',
    architecture: ['Alert intake', 'Service context', 'Runbook retrieval', 'Structured diagnosis', 'Confidence gate', 'Human decision'],
    links: [
      { label: 'Live demo', href: 'https://anjesh.ai/Sentinel/' },
      { label: 'Engineering notes', href: 'https://anjesh.ai/Sentinel/engineering/' },
      { label: 'Code', href: 'https://github.com/anjeshdubey/Sentinel' },
    ],
  },
  {
    id: 'audit-agent',
    title: 'Audit Agent Orchestrator',
    type: 'Verified compliance review',
    problem:
      'A compliance agent can write a convincing control assessment while quietly inventing or misquoting the evidence beneath it.',
    designChoice:
      'The model proposes evidence and a verdict. Code checks every quoted passage against the source before scoring, and a reviewer approves or rejects the work.',
    hardPart:
      'The workflow has to preserve evidence, confidence, reviewer notes, and state across a pause without blurring what the model inferred and what the source actually said.',
    learning:
      'Deterministic checks do not replace model reasoning. They narrow the space in which the model is allowed to be wrong.',
    architecture: ['Document intake', 'Evidence retrieval', 'Exact quote check', 'Code-derived score', 'Review queue', 'Workpaper'],
    links: [
      { label: 'Live demo', href: 'https://anjesh.ai/Audit-Agent-Orchestrator/' },
      { label: 'Engineering notes', href: 'https://anjesh.ai/Audit-Agent-Orchestrator/engineering/' },
      { label: 'Code', href: 'https://github.com/anjeshdubey/Audit-Agent-Orchestrator' },
    ],
  },
];
