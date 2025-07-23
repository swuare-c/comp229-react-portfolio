import { useState } from 'react';
import { isAuthenticated } from '../auth/auth-helper';
import './QualificationForm.css';

const QualificationForm = () => {
  const [values, setValues] = useState({
    title: '',
    institution: '',
    startDate: '',
    endDate: '',
    success: false,
    error: '',
    loading: false,
  });

  const { token } = isAuthenticated() || {}; // optional: get token if logged in

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value, success: false, error: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true });

    try {
      const response = await fetch('/api/qualifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({
          title: values.title,
          institution: values.institution,
          startDate: values.startDate,
          endDate: values.endDate,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setValues({ ...values, error: data.error || 'Error adding qualification', loading: false });
      } else {
        setValues({
          title: '',
          institution: '',
          startDate: '',
          endDate: '',
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
    <section className="qualification-form-section">
      <div className="qualification-form-container">
        <h2>Add Qualification</h2>

        {values.success && <p className="success-message">Qualification added successfully!</p>}
        {values.error && <p className="error-message">{values.error}</p>}

        <form onSubmit={handleSubmit} className="qualification-form">
          <input
            type="text"
            placeholder="Title (e.g., B.Sc Computer Science)"
            value={values.title}
            onChange={handleChange('title')}
            required
          />
          <input
            type="text"
            placeholder="Institution Name"
            value={values.institution}
            onChange={handleChange('institution')}
            required
          />
          <input
            type="date"
            value={values.startDate}
            onChange={handleChange('startDate')}
            required
          />
          <input
            type="date"
            value={values.endDate}
            onChange={handleChange('endDate')}
            required
          />
          <button type="submit" disabled={values.loading}>
            {values.loading ? 'Submitting...' : 'Submit Qualification'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default QualificationForm;
