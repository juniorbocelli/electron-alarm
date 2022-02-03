import React from 'react';
import './App.scss'; // New import!!

import MainPage from '@/app/views/MainPage';

const App: React.FC<React.ReactFragment> = () => {
  return (
    <div className="app">
      <MainPage />
    </div>
  );
}

export default App;