import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section container">
      <div ref={ref} className="scroll-reveal">
        <h2>Open-Source <span className="text-gradient">AI Agent Builds</span></h2>
        <p className={styles.introText}>Hands-on AI agent runtimes, RAG pipelines, and deterministic HITL systems built from scratch.</p>
        
        <div className="grid grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
