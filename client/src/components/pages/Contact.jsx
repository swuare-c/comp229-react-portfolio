import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submitted:', formData);

    navigate('/');
  };

  return (
    <section className="contact-section">
      <h1 className="contact-header">Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
        <input type="text" name="contactNumber" placeholder="Contact Number" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" rows="5" required onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
