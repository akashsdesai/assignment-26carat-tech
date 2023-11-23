import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Work from './Components/WorkExperience/Work';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
