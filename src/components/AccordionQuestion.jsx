import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './AccordionQuestion.css';

const AccordionQuestion = ({ question, hint, answer, isExpanded, onToggle }) => {
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggle = (e) => {
    // Prevent toggle if clicking on buttons
    if (e.target.closest('.question-actions')) {
      return;
    }
    onToggle();
  };

  return (
    <div 
      className={`accordion-question ${isExpanded ? 'expanded' : ''}`}
      onClick={handleToggle}
    >
      <div className="accordion-header">
        <h2 className="question-title">{question}</h2>
        <span className="accordion-icon">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {isExpanded && (
        <div className="accordion-content">
          <div className="question-actions">
            <button 
              className="action-button hint-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowHint(!showHint);
              }}
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
            
            <button 
              className="action-button answer-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowAnswer(!showAnswer);
              }}
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
          </div>

          {showHint && (
            <div className="hint-content">
              <strong>Hint:</strong> {hint}
            </div>
          )}

          {showAnswer && (
            <div className="answer-content">
              <strong>Answer:</strong> {answer}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionQuestion; 