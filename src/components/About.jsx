import React from 'react';
import Section from './shared/Section';

export default function About({ aboutText }) {
  return (
    <Section title="About Me">
      <p>{aboutText}</p>
    </Section>
  );
}