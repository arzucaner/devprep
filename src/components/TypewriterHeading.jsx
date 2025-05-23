import React, { useEffect, useState, useRef } from 'react';
import './TypewriterHeading.css';

const PHRASES = [
  'Welcome to DevPrep',
  'Your career. Your code.',
  'Practice. Learn. Get Hired.',
  'Ace your next dev interview.'
];

const TYPING_SPEED = 60; // ms per character
const PAUSE_AFTER = 1200; // ms to pause after phrase
const BACKSPACE_SPEED = 30; // ms per character

const TypewriterHeading = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < PHRASES[phraseIdx].length) {
        timeout = setTimeout(() => {
          setDisplayed(PHRASES[phraseIdx].slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), PAUSE_AFTER);
      }
    } else {
      // Backspace
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, BACKSPACE_SPEED);
      } else {
        setFade(false);
        setTimeout(() => {
          setPhraseIdx((phraseIdx + 1) % PHRASES.length);
          setTyping(true);
          setFade(true);
        }, 200);
      }
    }
    timeoutRef.current = timeout;
    return () => clearTimeout(timeout);
  }, [displayed, typing, phraseIdx]);

  return (
    <div className="typewriter-heading-container">
      <h1 className={`typewriter-heading${fade ? ' fade-in' : ' fade-out'}`}
        aria-label={PHRASES[phraseIdx]}
      >
        {displayed}
        <span className="typewriter-cursor">|</span>
      </h1>
    </div>
  );
};

export default TypewriterHeading; 