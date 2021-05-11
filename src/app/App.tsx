import React from 'react';
import PatternInput from '../features/PatternInput';
import TextDisplay from '../features/TextDisplay';

import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="top-nav">
        <h1>samchencode</h1>
      </nav>

      <PatternInput />
      <TextDisplay />
      
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
