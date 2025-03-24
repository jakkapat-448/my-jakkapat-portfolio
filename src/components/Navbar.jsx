// components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = ({ darkMode, toggleDarkMode, activeSection, onNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId) => {
    onNavClick(sectionId);
    
    setMenuOpen(false);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>Boss Jakkapat</h1>
          <p>IT Generalist / Bot Dev</p>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`nav-content ${menuOpen ? 'show' : ''}`}>
          <div className="nav-links">
            {navItems.map(item => (
              <button 
                key={item.id}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;