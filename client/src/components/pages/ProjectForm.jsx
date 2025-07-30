import { useState } from 'react';
import { isAuthenticated } from '../../auth/authHelper'; // To get token for auth
import './ProjectForm.css';

const ProjectForm = () => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
    success: false,
    error: '',
    loading: false,
  });

  const { token } = isAuthenticated() || {};

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value, success: false, error: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, success: false, error: '' });

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          technologies: values.technologies,
          link: values.link,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setValues({ ...values, error: data.error || 'Error submitting project', loading: false });
      } else {
        setValues({
          title: '',
          description: '',
          technologies: '',
          link: '',
          success: true,
          error: '',
          loading: false,
        });
      }
    } catch (err) {
      setValues({ ...values, error: 'Something went wrong', loading: false });
    }
  };

  return (
    <section className="project-form-section">
      <div className="project-form-container">
        <h2>Add New Project</h2>

        {values.success && <p className="success-message">Project added successfully!</p>}
        {values.error && <p className="error-message">{values.error}</p>}

        <form onSubmit={handleSubmit} className="project-form" noValidate>
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
          />
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
          <button type="submit" disabled={values.loading}>
            {values.loading ? 'Submitting...' : 'Submit Project'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProjectForm;
