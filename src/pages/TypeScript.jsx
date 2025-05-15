import React from 'react';
import QuestionCard from '../components/QuestionCard';
import questions from '../data/typescript.json';
import './TopicPage.css';

const TypeScript = () => {
  return (
    <div className="topic-page">
      <h1 className="topic-title">TypeScript Interview Questions</h1>
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

export default TypeScript; 