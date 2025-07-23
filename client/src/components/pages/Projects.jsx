import { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects'); // adjust base URL if needed
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'Failed to load projects');
        }

        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects-section">
      <h1 className="projects-header">My Projects</h1>

      {loading && <p>Loading projects...</p>}
      {error && <p className="error-message">{error}</p>}

      <section className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <img src="/placeholder.jpg" alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </section>
    </section>
  );
};

export default Projects;
