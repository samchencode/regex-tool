import React from 'react';
import { TopNav, BottomNav } from '../features/navigation';
import Routes from './routes';

import './App.css';

function App() {
  return (
    <div className="app">
      <TopNav />
      <Routes />
      <BottomNav />
    </div>
  );
}

export default App;
