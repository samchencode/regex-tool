import React from 'react';
import TopNav from '../features/TopNav';
import BottomNav from '../features/BottomNav';
import Dashboard from '../features/dashboard';

import './App.css';

function App() {
  return (
    <div className="app">
      <TopNav />
      <Dashboard />
      <BottomNav />
    </div>
  );
}

export default App;
