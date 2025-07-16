import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value, error: '', success: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setValues({ ...values, error: data.error || 'Signup failed', success: false });
      } else {
        setValues({ name: '', email: '', password: '', error: '', success: true });
      }
    } catch (err) {
      setValues({ ...values, error: 'Network error, please try again.', success: false });
    }
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <h1>Sign Up</h1>

        {values.error && <p className="error-message">{values.error}</p>}
        {values.success && <p className="success-message">Signup successful!</p>}

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleChange('name')}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange('email')}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange('password')}
            required
          />
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>

        <div className="signup-footer">
          <p>Already have an account?
            <Link to="/Signin" className="btn-secondary"> Sign In</Link>
          </p>
          <Link to="/" className="btn-secondary">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
