import React from 'react';
import './Navbar.css';

export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      {/* Add this new container div */}
      <div className="navbar-container"> 
        <div className="nav-brand">Armaaandeep's Portfolio.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <button className="theme-toggle-nav" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}