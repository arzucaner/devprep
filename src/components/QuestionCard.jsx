import React, { useState } from 'react';
import './QuestionCard.css';

const QuestionCard = ({ question, hint, answer }) => {
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className="question-card">
      <h2 className="question-title">{question}</h2>
      
      <div className="question-actions" role="group" aria-label="Question actions">
        <button 
          className="action-button hint-button"
          onClick={() => setShowHint(!showHint)}
          aria-expanded={showHint}
          aria-controls="hint-content"
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
        
        <button 
          className="action-button answer-button"
          onClick={() => setShowAnswer(!showAnswer)}
          aria-expanded={showAnswer}
          aria-controls="answer-content"
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
      </div>

      {showHint && (
        <section 
          id="hint-content"
          className="hint-content"
          aria-label="Question hint"
        >
          <strong>Hint:</strong> {hint}
        </section>
      )}

      {showAnswer && (
        <section 
          id="answer-content"
          className="answer-content"
          aria-label="Question answer"
        >
          <strong>Answer:</strong> {answer}
        </section>
      )}
    </article>
  );
};

export default QuestionCard; 