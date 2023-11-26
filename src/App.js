import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navv from './components/Nav';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navv />
      <Home />
      <About/>
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
