import type { Project } from '../data/projects';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <div id={`project-card-${project.id}`} className={`glass-panel ${styles.projectCard}`}>
    <div>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <div className={styles.projectRole}>{project.role}</div>
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
          <span key={i} className={styles.techTag}>{t}</span>
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
);
