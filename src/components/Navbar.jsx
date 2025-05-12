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
    { name: 'HTML', path: '/html' },
    { name: 'CSS', path: '/css' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">DevPrep</Link>
      </div>
      
      <div className="navbar-menu">
        <div 
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="dropdown-trigger">
            Interview Questions <FaChevronDown />
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {topics.map((topic) => (
                <Link 
                  key={topic.path} 
                  to={topic.path}
                  className="dropdown-item"
                >
                  {topic.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <Link to="/quiz" className="nav-link">
          Mini Quiz
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 