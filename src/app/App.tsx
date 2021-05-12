import React from 'react';
import PatternInput from '../features/PatternInput';
import TextDisplay from '../features/TextDisplay';
import BottomNav from '../features/BottomNav';

import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="top-nav">
        <ul className="top-nav__list">
          <li className="top-nav__item top-nav__item--title">
            <h1 className="top-nav__title">samchencode</h1>
          </li>
          <li className="top-nav__item">List Matches</li>
          <li className="top-nav__item">Replace</li>
        </ul>
      </nav>

      <PatternInput />
      <TextDisplay />
      <BottomNav />
    </div>
  );
}

export default App;
