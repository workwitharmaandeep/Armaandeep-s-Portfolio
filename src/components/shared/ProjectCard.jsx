import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h4>{project.title}</h4>
      <p style={{whiteSpace:"pre-line"}}>{project.description}</p>
      <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
        View Project →
      </a>
    </div>
  );
}