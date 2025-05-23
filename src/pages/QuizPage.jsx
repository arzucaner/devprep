import React, { useState, useEffect } from 'react';
import './QuizPage.css';

const TOPICS = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'React', value: 'react' },
  { label: 'React Native', value: 'react-native' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Node.js', value: 'nodejs' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
];

const QUIZ_FILES = {
  javascript: require('../data/quiz/javascript-quiz.json'),
  react: require('../data/quiz/react-quiz.json'),
  'react-native': require('../data/quiz/react-native-quiz.json'),
  typescript: require('../data/quiz/typescript-quiz.json'),
  nodejs: require('../data/quiz/nodejs-quiz.json'),
  html: require('../data/quiz/html-quiz.json'),
  css: require('../data/quiz/css-quiz.json'),
};

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getFeedback(score, total) {
  const percent = (score / total) * 100;
  if (percent === 100) return '🎉 Perfect score! You nailed it!';
  if (percent >= 80) return '💪 Great job! You\'re close to perfect.';
  if (percent >= 60) return '👍 Good effort. You\'re getting there!';
  if (percent >= 40) return '🧠 Keep going, study a bit more!';
  return '😅 Time to review! Don\'t give up!';
}

function getScoreColor(percent) {
  if (percent >= 80) return 'score-green';
  if (percent >= 60) return 'score-orange';
  return 'score-red';
}

const QuizPage = () => {
  const [topic, setTopic] = useState('javascript');
  const [quiz, setQuiz] = useState(shuffleArray(QUIZ_FILES['javascript']));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setQuiz(shuffleArray(QUIZ_FILES[topic]));
    setCurrent(0);
    setSelected([]);
    setShowResult(false);
  }, [topic]);

  const handleOption = (idx) => {
    if (selected[current] !== undefined) return;
    const newSelected = [...selected];
    newSelected[current] = idx;
    setSelected(newSelected);
  };

  const handleNext = () => {
    if (current < quiz.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleTryAgain = () => {
    setQuiz(shuffleArray(QUIZ_FILES[topic]));
    setCurrent(0);
    setSelected([]);
    setShowResult(false);
  };

  const handleChooseTopic = () => {
    setShowResult(false);
    setCurrent(0);
    setSelected([]);
  };

  const score = selected.filter((sel, i) => sel === quiz[i].answer).length;
  const percent = Math.round((score / quiz.length) * 100);
  const scoreColor = getScoreColor(percent);

  return (
    <div className="quiz-page">
      <h1 className="quiz-title">Mini Quiz</h1>
      <div className="quiz-topic-select" style={{ display: showResult ? 'none' : undefined }}>
        <label htmlFor="topic-select">Select Topic: </label>
        <select
          id="topic-select"
          value={topic}
          onChange={e => setTopic(e.target.value)}
        >
          {TOPICS.map(t => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>
      {!showResult ? (
        <div key={current} className="quiz-question-section fade-in">
          <div className="quiz-question">
            <span>Question {current + 1} of {quiz.length}</span>
            <h2>{quiz[current].question}</h2>
          </div>
          <div className="quiz-options">
            {quiz[current].options.map((opt, idx) => (
              <button
                key={idx}
                className={`quiz-option-btn${selected[current] === idx ? ' selected' : ''}`}
                onClick={() => handleOption(idx)}
                disabled={selected[current] !== undefined}
              >
                {opt}
              </button>
            ))}
          </div>
          <button
            className="quiz-next-btn"
            onClick={handleNext}
            disabled={selected[current] === undefined}
          >
            {current === quiz.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      ) : (
        <div key="results" className="quiz-result-section fade-in">
          <div className={`quiz-score ${scoreColor}`}>
            <span className="score-main">You scored {score} / {quiz.length}</span>
            <span className="score-percent">({percent}%)</span>
          </div>
          <p className="quiz-feedback">{getFeedback(score, quiz.length)}</p>
          <div className="quiz-review-section">
            <h3>Review Your Answers</h3>
            <ul className="quiz-review-list">
              {quiz.map((q, i) => {
                const isCorrect = selected[i] === q.answer;
                return (
                  <li key={i} className="quiz-review-item">
                    <div className="quiz-review-question">{i + 1}. {q.question}</div>
                    <div className="quiz-review-answers">
                      {q.options.map((opt, idx) => {
                        let className = 'quiz-review-option';
                        if (selected[i] === idx) {
                          className += isCorrect && idx === q.answer ? ' correct' : ' wrong';
                        }
                        if (q.answer === idx && selected[i] !== idx) {
                          className += ' correct';
                        }
                        return (
                          <span key={idx} className={className}>
                            {opt}
                            {selected[i] === idx && isCorrect && idx === q.answer ? ' ✔️' : ''}
                            {selected[i] === idx && !isCorrect ? ' ❌' : ''}
                            {q.answer === idx && selected[i] !== idx ? ' ✔️' : ''}
                          </span>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="quiz-result-actions">
            <button className="quiz-try-again-btn" onClick={handleTryAgain}>🔁 Try Again</button>
            <button className="quiz-choose-topic-btn" onClick={handleChooseTopic}>🏠 Choose Another Topic</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage; 