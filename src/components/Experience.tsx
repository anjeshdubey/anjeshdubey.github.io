import { experiences } from '../data/experience';
import { ExperienceItem } from './ExperienceItem';
import frame from './SectionFrame.module.css';
import styles from './Experience.module.css';

export const Experience = () => (
  <section id="career" className="section section-tinted">
    <div className={`container ${frame.sectionGrid}`}>
      <div className={frame.intro}>
        <p className={frame.kicker}>Career</p>
        <h2 className={frame.title}>Builder first, then leader of builders.</h2>
        <p className={frame.lead}>
          I joined Salesforce as an engineer in 2009 and grew with the automation platform from its early engines to Flow and agent execution.
        </p>
      </div>

        <div className={`${frame.content} ${styles.timeline}`}>
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} experience={exp} isFirst={idx === 0} />
          ))}
        </div>
    </div>
  </section>
);
