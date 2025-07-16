import { useState } from 'react';
import './QualificationForm.css';

const QualificationForm = () => {
  const [values, setValues] = useState({
    title: '',
    institution: '',
    startDate: '',
    endDate: '',
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
      const response = await fetch('/api/qualification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: values.title,
          institution: values.institution,
          startDate: values.startDate,
          endDate: values.endDate,
        }),
      });
      const data = await response.json();

      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          title: '',
          institution: '',
          startDate: '',
          endDate: '',
          success: true,
          error: '',
        });
      }
    } catch (err) {
      setValues({ ...values, error: 'Something went wrong' });
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
            placeholder="Title (e.g. B.Sc Computer Science)"
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
            placeholder="Start Date"
            value={values.startDate}
            onChange={handleChange('startDate')}
            required
          />
          <input
            type="date"
            placeholder="End Date"
            value={values.endDate}
            onChange={handleChange('endDate')}
            required
          />
          <button type="submit">Submit Qualification</button>
        </form>
      </div>
    </section>
  );
};

export default QualificationForm;
