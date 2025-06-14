import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const topics = [
    { name: 'JavaScript', path: '/javascript' },
    { name: 'React', path: '/react' },
    { name: 'React Native', path: '/react-native' },
    { name: 'TypeScript', path: '/typescript' },
    { name: 'Node.js', path: '/nodejs' },
    { name: 'Python', path: '/python' },
    { name: 'Java', path: '/java' },
    { name: 'HTML', path: '/html' },
    { name: 'CSS', path: '/css' },
  ];

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-brand">
          <Link to="/" aria-label="DevPrep Home">DevPrep</Link>
        </div>
        
        <div className="navbar-menu">
          <div 
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="dropdown-trigger"
              aria-expanded={isDropdownOpen}
              aria-controls="topics-menu"
              aria-haspopup="true"
            >
              Interview Questions <FaChevronDown aria-hidden="true" />
            </button>
            
            {isDropdownOpen && (
              <ul 
                id="topics-menu"
                className="dropdown-menu"
                role="menu"
                aria-label="Interview topics"
              >
                {topics.map((topic) => (
                  <li key={topic.path} role="none">
                    <Link 
                      to={topic.path}
                      className="dropdown-item"
                      role="menuitem"
                    >
                      {topic.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <Link to="/quiz" className="nav-link" role="menuitem">
            Mini Quiz
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 