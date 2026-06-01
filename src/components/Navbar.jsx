import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaYoutube, FaFacebook, FaInstagram, FaUserCircle, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { useAuthStore } from '../stores/authStore';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleSignOut = async () => {
    await signOut();
    setDropdownOpen(false);
    navigate('/');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-icon">&#10013;</span>
          <div className="logo-text">
            <span className="logo-name">Rehoboth Philadelphia</span>
            <span className="logo-tagline">Assembly</span>
          </div>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>About</Link>
          <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`} onClick={closeMenu}>Events</Link>
          <Link to="/ministries" className={`nav-link ${location.pathname === '/ministries' ? 'active' : ''}`} onClick={closeMenu}>Ministries</Link>
          <Link to="/branches" className={`nav-link ${location.pathname === '/branches' ? 'active' : ''}`} onClick={closeMenu}>Branches</Link>
          <Link to="/subscribe" className={`nav-link ${location.pathname === '/subscribe' ? 'active' : ''}`} onClick={closeMenu}>Subscribe</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</Link>
        </div>

        <div className="nav-actions">
          <div className="nav-social">
            <a href="https://www.youtube.com/@RehobothPhiladelphiaAssembly" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/RehobothPhiladelphiaAssembly" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/rehobothphiladelphia" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <FaInstagram />
            </a>
          </div>

          {user ? (
            <div className="nav-user" onMouseLeave={() => setDropdownOpen(false)}>
              <button className="user-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                {user.avatar ? (
                  <img src={user.avatar} alt="" className="user-avatar" />
                ) : (
                  <FaUserCircle className="user-avatar-icon" />
                )}
              </button>
              {dropdownOpen && (
                <div className="user-dropdown">
                  <div className="dropdown-header">
                    <p className="dropdown-name">{profile?.full_name || user.name || 'Member'}</p>
                    <p className="dropdown-email">{user.email}</p>
                  </div>
                  <Link to="/dashboard" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Dashboard</Link>
                  <Link to="/profile" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                    <FaCog /> Profile
                  </Link>
                  {profile?.role === 'admin' && (
                    <Link to="/admin" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                      Admin Panel
                    </Link>
                  )}
                  <button className="dropdown-item dropdown-signout" onClick={handleSignOut}>
                    <FaSignOutAlt /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="nav-login-btn" onClick={closeMenu}>Sign In</Link>
          )}
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
