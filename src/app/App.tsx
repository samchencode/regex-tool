import React from 'react';
import PatternInput from '../features/PatternInput';
import TextDisplay from '../features/TextDisplay';
import BottomNav from '../features/BottomNav';

import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="top-nav">
        <h1>samchencode</h1>
      </nav>

      <PatternInput />
      <TextDisplay />
      <BottomNav />
    </div>
  );
}

export default App;
