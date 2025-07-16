import { useState } from 'react';
import './ProjectForm.css';

const ProjectForm = () => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
    success: false,
    error: '',
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, success: false, error: '' });

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          technologies: values.technologies,
          link: values.link,
        }),
      });
      const data = await response.json();

      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          title: '',
          description: '',
          technologies: '',
          link: '',
          success: true,
          error: '',
        });
      }
    } catch (err) {
      setValues({ ...values, error: 'Something went wrong' });
    }
  };

  return (
    <section className="project-form-section">
      <div className="project-form-container">
        <h2>Add New Project</h2>

        {values.success && <p className="success-message">Project added successfully!</p>}
        {values.error && <p className="error-message">{values.error}</p>}

        <form onSubmit={handleSubmit} className="project-form">
          <input
            type="text"
            placeholder="Project Title"
            value={values.title}
            onChange={handleChange('title')}
            required
          />
          <textarea
            placeholder="Project Description"
            value={values.description}
            onChange={handleChange('description')}
            required
          ></textarea>
          <input
            type="text"
            placeholder="Technologies (e.g. React, Node, MongoDB)"
            value={values.technologies}
            onChange={handleChange('technologies')}
            required
          />
          <input
            type="url"
            placeholder="Project Link (GitHub/Live)"
            value={values.link}
            onChange={handleChange('link')}
            required
          />
          <button type="submit">Submit Project</button>
        </form>
      </div>
    </section>
  );
};

export default ProjectForm;
