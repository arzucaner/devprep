import React from 'react';
import './RoleFilter.css';

const RoleFilter = ({ selectedLevel, onLevelChange }) => {
  const levels = [
    { id: 'junior', label: 'Junior' },
    { id: 'mid', label: 'Mid-Level' },
    { id: 'senior', label: 'Senior' },
    { id: 'lead', label: 'Lead' }
  ];

  return (
    <div className="role-filter">
      <label className="role-filter-label">Select Level:</label>
      <div className="role-buttons">
        {levels.map(level => (
          <button
            key={level.id}
            className={`role-button ${selectedLevel === level.id ? 'active' : ''}`}
            onClick={() => onLevelChange(level.id)}
          >
            {level.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleFilter; 