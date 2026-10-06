import frame from './SectionFrame.module.css';
import styles from './Focus.module.css';

const focusAreas = [
  {
    title: 'AI systems that can act',
    body: 'I work on the boundary between model reasoning and dependable action: durable state, explicit tool contracts, human checkpoints, and evidence that explains what happened.',
  },
  {
    title: 'Platforms that stay operable',
    body: 'A system is not finished when it produces an answer. It also needs testing, rollout controls, observability, failure recovery, and a path for the next team to change it safely.',
  },
  {
    title: 'Engineering organizations that compound',
    body: 'I build teams and technical leadership systems that keep architecture, delivery, and product judgment connected as the organization grows.',
  },
];

export const Focus = () => (
  <section className="section section-tinted">
    <div className={`container ${frame.sectionGrid}`}>
      <div className={frame.intro}>
        <p className={frame.kicker}>What I work on</p>
        <h2 className={frame.title}>From useful idea to trusted system.</h2>
        <p className={frame.lead}>
          The common thread is turning ambiguous problems into systems and teams that can carry real responsibility.
        </p>
      </div>

      <div className={`${frame.content} ${styles.focusList}`}>
        {focusAreas.map((area) => (
          <article key={area.title} className={styles.focusItem}>
            <h3>{area.title}</h3>
            <p>{area.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
