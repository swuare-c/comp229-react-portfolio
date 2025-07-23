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
    <nav>
      <div>
        <div className='nav-logo'><NavLink to="/">CK</NavLink></div>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/AboutMe">About</NavLink></li>
        <li><NavLink to="/Projects">Projects</NavLink></li>
        <li><NavLink to="/Services">Services</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>

        {!auth && (
          <>
            <li><NavLink to="/Signin">Sign In</NavLink></li>
            <li><NavLink to="/Signup">Sign Up</NavLink></li>
          </>
        )}

        {auth && (
          <li>
            <button className="signout-btn" onClick={handleSignout}>Sign Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
