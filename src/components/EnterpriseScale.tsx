import { anchorProps } from '../data/links';
import frame from './SectionFrame.module.css';
import styles from './EnterpriseScale.module.css';

const ownership = [
  ['Author', 'Turn business intent into automation people can inspect.'],
  ['Trigger', 'Start work in the right event, identity, and transaction context.'],
  ['Run', 'Execute reliably across shared, multi-tenant infrastructure.'],
  ['Prove', 'Test a change before activation and explain behavior afterward.'],
  ['Operate', 'See health, patterns, dependencies, and failures across the estate.'],
];

const lessons = [
  {
    title: 'The product is the lifecycle, not the canvas',
    body: 'Authoring, validation, activation, execution, debugging, and operations form one loop. Improving only the creation surface makes generation faster without making the result safer to own.',
  },
  {
    title: 'Agents need a narrow commitment boundary',
    body: 'An agent is good at interpreting an ambiguous request. A governed runtime should validate inputs, enforce policy, perform the transaction, and return a traceable result.',
  },
  {
    title: 'Reliability is a product decision',
    body: 'Capacity, lock behavior, queue fairness, testing, and clear errors compete with visible features. Leadership means keeping that work funded because it determines which customer problems the product can responsibly accept.',
  },
];

export const EnterpriseScale = () => (
  <section id="enterprise-scale" className="section section-dark">
    <div className={`container ${frame.sectionGrid}`}>
      <div className={frame.intro}>
        <p className={frame.kicker}>Lessons from enterprise scale</p>
        <h2 className={frame.title}>Business intent needs a reliable path to action.</h2>
        <p className={frame.lead}>
          Salesforce Flow turns an event or decision into work inside the Salesforce trust boundary. I lead the engineering areas that make that lifecycle possible.
        </p>
      </div>

      <div className={frame.content}>
        <div className={styles.caseHeader}>
          <p>What building Salesforce Flow taught me</p>
          <h3>From visual automation to a governed execution layer</h3>
          <p>
            The durable value is not a diagram. It is a reusable business capability with a clear contract, platform security, testability, operational evidence, and more than one way to create or invoke it.
          </p>
        </div>

        <div className={styles.ownershipLoop} aria-label="The Flow product lifecycle">
          {ownership.map(([title, detail]) => (
            <div key={title} className={styles.ownershipStep}>
              <strong>{title}</strong>
              <span>{detail}</span>
            </div>
          ))}
        </div>

        <div className={styles.lessons}>
          {lessons.map((lesson) => (
            <article key={lesson.title}>
              <h3>{lesson.title}</h3>
              <p>{lesson.body}</p>
            </article>
          ))}
        </div>

        <div className={styles.caseFooter}>
          <p>
            For a public overview of the product and its developer resources:
          </p>
          <div>
            <a {...anchorProps('https://developer.salesforce.com/developer-centers/flow')}>About Salesforce Flow</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
