import React, { useState, useCallback } from 'react';
import AccordionQuestion from '../components/AccordionQuestion';
import RoleFilter from '../components/RoleFilter';
import questions from '../data/nodejs.json';
import './TopicPage.css';

const NodeJS = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = !selectedLevel || q.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const handleToggle = useCallback((index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  }, [expandedIndex]);

  return (
    <div className="topic-page">
      <h1 className="topic-title">Node.js Interview Questions</h1>
      <div className="filters-section">
        <RoleFilter
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
        />
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="questions-container">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q, index) => (
            <AccordionQuestion
              key={index}
              question={q.question}
              hint={q.hint}
              answer={q.answer}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))
        ) : (
          <div className="no-results">
            No questions found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default NodeJS; 