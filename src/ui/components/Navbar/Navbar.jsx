import { Link, useLocation } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";

function Navbar({ toggleTheme, currentTheme }) {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return `nav-link ${location.pathname === path ? 'active' : ''}`;
  };

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="logo-text">Aletheia Toolkit</span>
      </div>
      <nav className="navbar-nav">
        <Link to="/" className={getNavLinkClass('/')}>Home</Link>
        <Link to="/about" className={getNavLinkClass('/about')}>About</Link>
        <Link to="/modules" className={getNavLinkClass('/modules')}>Modules</Link>
        <Link to="/progress" className={getNavLinkClass('/progress')}>Progress</Link>
        <button onClick={toggleTheme} className="theme-toggle-button">
          {currentTheme === 'light' ? (
            <FaMoon />
          ) : (
            <FaRegSun />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;