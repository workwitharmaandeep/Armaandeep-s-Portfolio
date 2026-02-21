import React from 'react';
import Section from './shared/Section';
import ProjectCard from './shared/ProjectCard';
import './Projects.css';

export default function Projects({ projectList }) {
  return (
    <Section title="Projects">
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}