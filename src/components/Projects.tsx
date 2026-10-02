import { anchorProps } from '../data/links';
import { sideProjects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Projects.module.css';

export const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section id="implementations" className="section container">
      <div ref={ref} className="scroll-reveal">
        <h2>
          Applied Agent Runtimes &amp; <span className="text-gradient">Reference Implementations</span>
        </h2>
        <p className={styles.introText}>
          Working architectures exploring stateful execution, declarative YAML compilers, and deterministic compliance verification, each with a live demo and public code.
        </p>

        <div className={styles.projectsGrid}>
          {sideProjects.map((project) => (
            <div key={project.id} id={`project-card-${project.id}`} className={`glass-panel ${styles.projectCard}`}>
              <div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <p className={styles.projectHighlight}>{project.highlight}</p>
              </div>

              <div className={styles.techTags}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.linksRow}>
                {project.links.map((link) => (
                  <a key={link.href} {...anchorProps(link.href)} className={styles.projectLink}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
