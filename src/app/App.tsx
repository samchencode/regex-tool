import React from 'react';
import PatternInput from '../features/PatternInput';
import TextDisplay from '../features/TextDisplay';
import TopNav from '../features/TopNav';
import BottomNav from '../features/BottomNav';

import './App.css';

function App() {
  return (
    <div className="app">
      <TopNav />
      <PatternInput />
      <TextDisplay />
      <BottomNav />
    </div>
  );
}

export default App;
