import React, { useState } from 'react';
import './QuestionCard.css';

const QuestionCard = ({ question, hint, answer }) => {
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question-card">
      <h2 className="question-title">{question}</h2>
      
      <div className="question-actions">
        <button 
          className="action-button hint-button"
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
        
        <button 
          className="action-button answer-button"
          onClick={() => setShowAnswer(!showAnswer)}
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
  );
};

export default QuestionCard; 