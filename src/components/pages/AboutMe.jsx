import './AboutMe.css';

const AboutMe = () => {
    return (
    <section className="about-me-section">
        <div className="about-me-container">
            <img src="src\assets\placeholder.jpg" alt="Christian Khan" className="" />
        <h1>Christian Khan</h1>
          <p>
            I'm a passionate Full Stack Developer with a strong foundation in modern web technologies.
            I enjoy solving problems and creating intuitive user experiences. I am currently pursuing my studies at
            Centennial College and am actively seeking opportunities to grow and contribute in the tech industry.
          </p>
          <a href="/Christian_Khan_Resume.pdf" download="Christian_Khan_Resume.pdf" className="about-me-resume-link">Download Resume</a>
        </div>
    </section>)
}

export default AboutMe;