import React from 'react';
import QuestionCard from '../components/QuestionCard';
import questions from '../data/javascript.json';
import './TopicPage.css';

const JavaScript = () => {
  return (
    <div className="topic-page">
      <h1 className="topic-title">JavaScript Interview Questions</h1>
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

export default JavaScript; 