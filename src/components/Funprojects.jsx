import React from 'react';
import Section from './shared/Section';
import ProjectCard from './shared/ProjectCard';
import './Projects.css';

export default function Funprojects({ funprojectList }) {
  return (
    <Section title="Funprojects">
      <div className="projects-grid">
        {funprojectList.map((funprojects, index) => (
          <ProjectCard key={index} project={funprojects} />
        ))}
      </div>
    </Section>
  );
}