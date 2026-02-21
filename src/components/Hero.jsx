import React from 'react';
import './Hero.css';

export default function Hero({ data }) {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <span className="greeting">Hello, I'm</span>
        <h1 className="hero-name">{data.name}</h1>
        <h2 className="hero-role">{data.role}</h2>
        <p className="hero-intro">{data.largeIntro}</p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View My Work</a>
          <div className="hero-socials">
            <a href={data.contact.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={data.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="hero-image-wrapper">
        <div className="image-backdrop"></div>
        <img src={data.profileImage} alt={data.name} className="hero-image" />
      </div>
    </section>
  );
}