import { anchorProps } from '../data/links';
import { sideProjects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Projects.module.css';

export const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section container">
      <div ref={ref} className="scroll-reveal">
        <h2>
          Side <span className="text-gradient">Projects</span>
        </h2>
        <p className={styles.introText}>
          Three projects I built in 2026 to learn the agent stack by hand.
        </p>

        <div className={styles.projectsGrid}>
          {sideProjects.map((project) => (
            <div key={project.id} id={`project-card-${project.id}`} className={`glass-panel ${styles.projectCard}`}>
              <div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
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
