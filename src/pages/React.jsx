import React from 'react';
import QuestionCard from '../components/QuestionCard';
import questions from '../data/react.json';
import './TopicPage.css';

const ReactPage = () => {
  return (
    <div className="topic-page">
      <h1 className="topic-title">React Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q, index) => (
          <QuestionCard
            key={index}
            question={q.question}
            hint={q.hint}
            answer={q.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default ReactPage; 