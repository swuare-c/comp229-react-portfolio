import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value, error: '', success: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setValues({ ...values, error: data.error || 'Signin failed', success: false });
      } else {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('jwt', JSON.stringify(data));
        }
        setValues({ email: '', password: '', error: '', success: true });
        navigate('/'); // redirect to homepage after successful login
      }
    } catch (err) {
      setValues({ ...values, error: 'Network error, please try again.', success: false });
    }
  };

  return (
    <section className="signin-section">
      <div className="signin-container">
        <h1>Sign In</h1>

        {values.error && <p className="error-message">{values.error}</p>}
        {values.success && <p className="success-message">Signin successful! Redirecting...</p>}

        <form className="signin-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn-primary">Sign In</button>
        </form>

        <div className="signin-footer">
          <p>Don't have an account?
            <Link to="/Signup" className="btn-secondary"> Sign Up</Link>
          </p>
          <Link to="/" className="btn-secondary">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Signin;
