import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ParticleBackground from "./components/ParticleBackground";


function App() {
  return (
    <div>
    
      <div style={{background:"#111111"}}>
        <ParticleBackground />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
