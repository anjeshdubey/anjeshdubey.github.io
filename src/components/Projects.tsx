import { projects } from '../data/projects';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section id="projects" className="section container">
      <div className="animate-fade-in delay-100">
        <h2>Open-Source <span className="text-gradient">AI Agent Builds</span></h2>
        <p className={styles.introText}>Hands-on AI agent runtimes, RAG pipelines, and deterministic HITL systems built from scratch.</p>
        
        <div className="grid grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} id={`project-card-${project.id}`} className={`glass-panel ${styles.projectCard}`}>
              <div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectRole}>
                  {project.role}
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <ul className={styles.highlights}>
                  {project.highlights.map((h, i) => (
                    <li key={i} className={styles.highlightItem}>{h}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className={styles.techTags}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {project.links.map((l, i) => (
                    <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      {l.label} <span>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
