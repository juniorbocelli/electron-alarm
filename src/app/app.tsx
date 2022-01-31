import React from 'react';
import './app.scss'; // New import!!

const App: React.FC<React.ReactFragment> = () => {
    return (
        <div className="app">
            <h1>I'm React running in Electron App!!</h1>
        </div>
    );
}

export default App;