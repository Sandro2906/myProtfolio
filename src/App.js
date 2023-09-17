import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <NavBar /> 
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
