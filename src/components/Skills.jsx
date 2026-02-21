import React from 'react';
import Section from './shared/Section';
import './Skills.css';

export default function Skills({ skillList }) {
  return (
    <Section title="Technical Skills">
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </Section>
  );
}