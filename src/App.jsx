import React, { useRef } from 'react';
import Home from './Home.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';

function App() {
 const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <>
    <div ref={homeRef}>
      <Home scrollToSkills={() => scrollTo(skillsRef)} scrollToProjects={() => scrollTo(projectsRef)}/>
    </div>
    <div ref={skillsRef}>
      <Skills scrollToHome={() => scrollTo(homeRef)} scrollToProjects={() => scrollTo(projectsRef)} />
    </div>
    <div ref={projectsRef}>
      <Projects scrollToHome={() => scrollTo(homeRef)} scrollToSkills={() => scrollTo(skillsRef)}/>
    </div>
    </>
  )
}

export default App
