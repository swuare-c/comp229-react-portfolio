import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './Home.css';

const Home = () => {
    return (
    //Home page component with a welcome message and buttons to navigate to Projects and Contact pages
    <section className="home-section">
        <div className="welcome-container">
        <h2>Hi, my name is</h2>
        <h1>Christian Khan</h1>
        <h3>Full Stack Developer</h3>
        <div className='home-buttons'>
            <Link to="/Projects" className="btn-primary">Projects</Link>
            <Link to="/Contact" className="btn-secondary">Contact</Link>
        </div>
        <div className='social-icons'>
            <a href='https://www.linkedin.com/in/christian-khan-a88358332/' target='_blank' rel='noopener noreferrer'><FaLinkedin size={40} /></a>
            <a href='https://github.com/swuare-c' target='_blank' rel='noopener noreferrer'><FaGithub size={40}/></a>
        </div>
        </div>
    </section>)
}

export default Home;