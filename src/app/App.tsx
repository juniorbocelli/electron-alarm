import React from 'react';
import './App.scss';
import { GlobalContextProvider } from './features/globalContext';

import MainPage from '@/app/views/MainPage';

const App: React.FC<React.ReactFragment> = () => {
  return (
    <GlobalContextProvider>
      <div className="app">
        <MainPage />
      </div>
    </GlobalContextProvider>
  );
};

export default App;