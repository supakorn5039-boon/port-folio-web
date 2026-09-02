import { IconArrowUpRight } from "@tabler/icons-react";
import type { Project } from "@/data/profile";

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <article className={`project-card ${project.color} ${project.href ? "project-card--linked" : "project-card--static"}`}>
      <div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
      <div className="project-mark" aria-hidden="true"><span>{project.number}</span></div>
      <div className="project-copy">
        <span className="project-metric">{project.metric}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <small>{project.technologies}</small>
      </div>
      {project.href ? (
        <span className="project-arrow" aria-hidden="true"><IconArrowUpRight size={24} stroke={1.5} /></span>
      ) : (
        <span className="project-status">Selected case study</span>
      )}
    </article>
  );

  return project.href ? <a className="project-card-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`}>{content}</a> : content;
}
