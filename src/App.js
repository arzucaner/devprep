import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JavaScript from './pages/JavaScript';
import ReactPage from './pages/React';
import ReactNative from './pages/ReactNative';
import TypeScript from './pages/TypeScript';
import NodeJS from './pages/NodeJS';
import HTML from './pages/HTML';
import CSS from './pages/CSS';
import Python from './pages/Python';
import Java from './pages/Java';
import QuizPage from './pages/QuizPage';
import './App.css';

function App() {
  return (
    <Router basename="/devprep">
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/javascript" element={<JavaScript />} />
            <Route path="/react" element={<ReactPage />} />
            <Route path="/react-native" element={<ReactNative />} />
            <Route path="/typescript" element={<TypeScript />} />
            <Route path="/nodejs" element={<NodeJS />} />
            <Route path="/html" element={<HTML />} />
            <Route path="/css" element={<CSS />} />
            <Route path="/python" element={<Python />} />
            <Route path="/java" element={<Java />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
