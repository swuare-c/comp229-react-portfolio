import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Signin from './components/pages/SignIn';
import Signup from './components/pages/SignUp';
import Signout from './components/pages/SignOut';
import ProjectForm from './components/pages/ProjectForm';
import QualificationForm from './components/pages/QualificationForm';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/ProjectForm" element={<ProjectForm />} />
        <Route path="/QualificationForm" element={<QualificationForm />} />

      </Routes>
    </Router>
  );
}

export default App;
