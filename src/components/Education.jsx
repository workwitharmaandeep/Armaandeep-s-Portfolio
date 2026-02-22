import React from 'react';
import Section from './shared/Section';
import './Experience.css';

export default function Education({ educationList }) {
  return (
    <Section title="Education">
      <div className="experience-list">
        {educationList.map((edu, index) => (
          <div key={index} className="experience-item">
            <h4>{edu.degree}</h4>
            <span className="company">{edu.institution}</span>
            <span className="duration">{edu.duration}</span>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}