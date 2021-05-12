import React from 'react';
import { TopNav, BottomNav } from '../features/navigation';
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
