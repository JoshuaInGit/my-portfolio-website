import Container from './Container.jsx'
import Header from './Header.jsx' 
import AboutMe from './AboutMe.jsx'
import TechStack from './TechStack.jsx' 
import Projects from './Projects.jsx'
import Socials from './Socials.jsx' 

function App() {
  
  return(
    <>
      <Container>
        <Header/>
        <AboutMe/>
        <TechStack/>
        <Projects/>
        <Socials/>
      </Container>
    </>
  );
}

export default App
