import React, { useEffect, useState } from 'react';
import './InfoRotator.css';

const FACTS = [
  '💡 JavaScript closures are asked in 80% of interviews.',
  "🔁 React's useEffect is the new lifecycle.",
  '📱 React Native powers Facebook, Instagram, and Shopify apps.',
  '🔐 TypeScript catches bugs before they happen.',
  '⚡ Node.js is used by Netflix, LinkedIn, and PayPal.',
  '⌛ Most recruiters decide in the first 90 seconds.',
  '💼 Practice beats perfection. Do 3 questions daily!'
];

const InfoRotator = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % FACTS.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="info-rotator-container">
      <div className={`info-rotator-box${fade ? ' fade-in' : ' fade-out'}`}>{FACTS[index]}</div>
    </div>
  );
};

export default InfoRotator; 