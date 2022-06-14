import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ links }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
            {links.map(({ index, name, path }) => (
              <Link
                to={path}
                onClick={() => setActiveIndex(index)}
                key={index}
                className={`navbar__link ${
                  index === activeIndex ? 'navbar__link--active' : ''
                }`}
              >
                {name}
              </Link>
            ))}
          </ul>
          <div
            className={`nav-btn ${isOpen ? 'change' : ''} `}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="navbar__icon bar1"></div>
            <div className="navbar__icon bar2"></div>
            <div className="navbar__icon bar3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
