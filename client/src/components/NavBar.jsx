import { NavLink, useNavigate } from 'react-router-dom';
import { isAuthenticated, clearJWT } from '../auth/authHelper';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const auth = isAuthenticated();

  const handleSignout = () => {
    clearJWT(() => navigate('/Signin'));
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink to="/">CK</NavLink>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/AboutMe" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        </li>
        <li>
          <NavLink to="/Projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/Services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </li>

        {!auth && (
          <>
            <li>
              <NavLink to="/Signin" className={({ isActive }) => isActive ? 'active' : ''}>Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/Signup" className={({ isActive }) => isActive ? 'active' : ''}>Sign Up</NavLink>
            </li>
          </>
        )}

        {auth && (
          <li>
            <button className="signout-btn" onClick={handleSignout}>
              Sign Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
