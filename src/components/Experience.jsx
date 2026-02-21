import React from 'react';
import Section from './shared/Section';
import './Experience.css';

export default function Experience({ experienceList }) {
  return (
    <Section title="Experience">
      <div className="experience-list">
        {experienceList.map((exp, index) => (
          <div key={index} className="experience-item">
            <h4>{exp.role} <span className="company">@ {exp.company}</span></h4>
            <span className="duration">{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}