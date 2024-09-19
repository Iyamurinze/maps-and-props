import React from 'react';
import TravelJournal from './componets/TravelJournal';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1><span role="img" aria-label="globe">🌎</span> my travel journal.</h1> 
    </header>
    <div className="main">
      <main>
      <TravelJournal />
      </main>
    </div>
    </div>



  );
}

export default App;
