import { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contactnumber: '',
    message: '',
  });

  const [status, setStatus] = useState({
    success: false,
    error: '',
    loading: false,
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
    setStatus({ ...status, error: '', success: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, error: '', loading: true });

    try {
      const response = await fetch('/api/contactId', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.error) {
        setStatus({ success: false, error: data.error, loading: false });
      } else {
        setValues({
          firstname: '',
          lastname: '',
          email: '',
          contactnumber: '',
          message: '',
        });
        setStatus({ success: true, error: '', loading: false });
      }
    } catch (err) {
      setStatus({ success: false, error: 'Something went wrong. Please try again.', loading: false });
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2>Contact Me</h2>

        {status.success && <p className="success-message">✅ Message sent successfully!</p>}
        {status.error && <p className="error-message">❌ {status.error}</p>}

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label htmlFor="firstname">First Name *</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="First Name"
            value={values.firstname}
            onChange={handleChange('firstname')}
            required
          />

          <label htmlFor="lastname">Last Name *</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Last Name"
            value={values.lastname}
            onChange={handleChange('lastname')}
            required
          />

          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange('email')}
            required
          />

          <label htmlFor="contactnumber">Contact Number</label>
          <input
            id="contactnumber"
            name="contactnumber"
            type="tel"
            placeholder="Contact Number"
            value={values.contactnumber}
            onChange={handleChange('contactnumber')}
          />

          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={values.message}
            onChange={handleChange('message')}
            required
          ></textarea>

          <button type="submit" disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
