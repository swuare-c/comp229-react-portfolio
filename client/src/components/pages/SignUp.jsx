import { useState } from 'react';
import { signup } from '../../api/userApi';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
    loading: false,
  });

  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    setValues((prev) => ({
      ...prev,
      [field]: e.target.value,
      error: '',
      success: false,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues((prev) => ({ ...prev, loading: true }));

    try {
      const data = await signup({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (data.error) {
        setValues((prev) => ({
          ...prev,
          error: data.error,
          loading: false,
        }));
      } else {
        setValues({
          name: '',
          email: '',
          password: '',
          error: '',
          success: true,
          loading: false,
        });
        setTimeout(() => navigate('/Signin'), 1500);
      }
    } catch (err) {
      setValues((prev) => ({
        ...prev,
        error: 'Something went wrong. Please try again.',
        loading: false,
      }));
    }
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <h1>Sign Up</h1>

        {values.error && <p className="error-message">{values.error}</p>}
        {values.success && (
          <p className="success-message">Signup successful! Redirecting...</p>
        )}

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleChange('name')}
            autoComplete="name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange('email')}
            autoComplete="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange('password')}
            autoComplete="new-password"
            required
          />
          <button type="submit" className="btn-primary" disabled={values.loading}>
            {values.loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="signup-footer">
          <p>
            Already have an account?{' '}
            <Link to="/Signin" className="btn-secondary">
              Sign In
            </Link>
          </p>
          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
