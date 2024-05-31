import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navv from './components/Nav';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';


function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }
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
