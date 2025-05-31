import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
    <section className="home-section">
        <div className="welcome-container">
        <h2>Hi, my name is</h2>
        <h1>Christian Khan</h1>
        <h3>Full Stack Developer</h3>
        <div className='home-buttons'>
            <Link to="/Projects" className="btn-primary">Projects</Link>
            <Link to="/Contact" className="btn-secondary">Contact</Link>
        </div>
        </div>
    </section>)
}

export default Home;