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
    <article 
      className={`accordion-question ${isExpanded ? 'expanded' : ''}`}
      onClick={handleToggle}
      role="region"
      aria-expanded={isExpanded}
    >
      <header className="accordion-header">
        <h2 className="question-title">{question}</h2>
        <span className="accordion-icon" aria-hidden="true">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </header>

      {isExpanded && (
        <section className="accordion-content">
          <div 
            className="question-actions"
            role="group"
            aria-label="Question actions"
          >
            <button 
              className="action-button hint-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowHint(!showHint);
              }}
              aria-expanded={showHint}
              aria-controls="accordion-hint"
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
            
            <button 
              className="action-button answer-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowAnswer(!showAnswer);
              }}
              aria-expanded={showAnswer}
              aria-controls="accordion-answer"
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
          </div>

          {showHint && (
            <div 
              id="accordion-hint"
              className="hint-content"
              aria-label="Question hint"
            >
              <strong>Hint:</strong> {hint}
            </div>
          )}

          {showAnswer && (
            <div 
              id="accordion-answer"
              className="answer-content"
              aria-label="Question answer"
            >
              <strong>Answer:</strong> {answer}
            </div>
          )}
        </section>
      )}
    </article>
  );
};

export default AccordionQuestion; 