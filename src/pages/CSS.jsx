import React, { useState, useCallback } from 'react';
import AccordionQuestion from '../components/AccordionQuestion';
import RoleFilter from '../components/RoleFilter';
import questions from '../data/css.json';
import '../pages/TopicPage.css';

const CSSPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = useCallback((index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  }, [expandedIndex]);

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.question.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = !selectedLevel || question.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="topic-page">
      <h1 className="topic-title">CSS Interview Questions</h1>
      
      <div className="filters-section">
        <RoleFilter
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
        />
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search CSS questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="questions-container">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question, index) => (
            <AccordionQuestion
              key={index}
              question={question.question}
              hint={question.hint}
              answer={question.answer}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))
        ) : (
          <div className="no-results">
            {searchQuery || selectedLevel ? (
              <p>No questions found matching your search criteria.</p>
            ) : (
              <p>No questions available at the moment.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CSSPage; 