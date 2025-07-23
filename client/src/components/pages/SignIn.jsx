import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../../api/authApi';
import { authenticate } from '../../auth/authHelper';
import './Signin.css';

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    success: false,
    loading: false,
  });

  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value, error: '', success: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: '', success: false });

    try {
      const data = await signin({
        email: values.email,
        password: values.password,
      });

      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            email: '',
            password: '',
            error: '',
            success: true,
            loading: false,
          });
          navigate('/');
        });
      }
    } catch (err) {
      setValues({ ...values, error: 'Network error. Please try again.', loading: false });
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
            disabled={values.loading}
          />
          <input
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange('password')}
            required
            disabled={values.loading}
          />
          <button type="submit" className="btn-primary" disabled={values.loading}>
            {values.loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="signin-footer">
          <p>
            Don't have an account?
            <Link to="/Signup" className="btn-secondary"> Sign Up</Link>
          </p>
          <Link to="/" className="btn-secondary">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Signin;
