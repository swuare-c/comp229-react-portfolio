import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
