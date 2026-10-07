import frame from './SectionFrame.module.css';
import styles from './Principles.module.css';

const principles = [
  {
    title: 'Generated is not deployable.',
    body: 'A plausible first draft still needs validation, permissions, tests, versioning, rollout controls, and a correction loop.',
  },
  {
    title: 'Agents reason. Governed contracts commit.',
    body: 'Models should interpret and propose. Stable capabilities should own consequential changes to business systems.',
  },
  {
    title: 'One capability should travel across many surfaces.',
    body: 'A business action should not fork into different implementations for a builder, an IDE, chat, an API, and an agent.',
  },
  {
    title: 'Observability is a service, not a dashboard.',
    body: 'The same operational evidence should serve people, agents, delivery pipelines, and the product interface.',
  },
  {
    title: 'People remain accountable for consequential actions.',
    body: 'AI can propose, explain, and test. A person or an explicit policy still decides what may run and where approval is required.',
  },
];

export const Principles = () => (
  <section id="principles" className="section section-tinted">
    <div className={`container ${frame.sectionGrid}`}>
      <div className={frame.intro}>
        <p className={frame.kicker}>Product and architecture principles</p>
        <h2 className={frame.title}>Rules I use when the answer is not obvious.</h2>
        <p className={frame.lead}>
          These are working constraints, shaped by production platforms and tested again in smaller systems I can build end to end.
        </p>
      </div>

      <ol className={`${frame.content} ${styles.principleList}`}>
        {principles.map((principle, index) => (
          <li key={principle.title}>
            <span>{index + 1}</span>
            <div>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
