import React, { useState, useEffect } from 'react';
import { portfolioData } from './data';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FadeInSection from './components/shared/FadeInSection'; // <-- Import the new wrapper
import Funprojects from './components/Funprojects';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="portfolio-container">
        
       
        <Hero data={portfolioData} />
        
        <div id="experience">
          <FadeInSection>
            <Education educationList={portfolioData.education} />
          </FadeInSection>
          <FadeInSection>
            <Experience experienceList={portfolioData.experience} />
          </FadeInSection>
        </div>
        
        <div id="skills">
          <FadeInSection>
            <Skills skillList={portfolioData.skills} />
          </FadeInSection>
        </div>
        
        <div id="projects">
          <FadeInSection>
            <Projects projectList={portfolioData.projects} />
          </FadeInSection>
        </div>
        <div>
          <FadeInSection>
            <Funprojects funprojectList={portfolioData.funprojects}/>
          </FadeInSection>
        </div>
        
        <FadeInSection>
          <Footer email={portfolioData.contact.email} />
        </FadeInSection>

      </div>
    </>
  );
}

export default App;