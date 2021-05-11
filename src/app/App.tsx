import React from 'react';
import PatternInput from '../features/PatternInput';

import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="top-nav">
        <h1>samchencode</h1>
      </nav>

      <PatternInput />

      <div className="text-display__container">
        <h3 className="text-display__label">Input</h3>
        <div className="text-display">
          <textarea className="text-display__input" placeholder="Input text to search...">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
            vero.
          </textarea>
          <textarea className="text-display__highlight-overlay">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
            vero.
          </textarea>
        </div>
      </div>

      <nav className="bottom-nav">
        <ul className="bottom-nav__list">
          <li className="bottom-nav__item">Input</li>
          <li className="bottom-nav__item">List</li>
          <li className="bottom-nav__item">Replace</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
