import React, {useState}  from 'react';
import './App.css';
import './wow.css';
import Parent from './Parent'
import ValueContest from './ValueContest'
function App(props) {
 let value= useState(60)
  return (
    <ValueContest.Provider value={value}>
    <div className="App">
      <header className="App-header">
      <Parent ></Parent>
      </header>
    </div>
    </ValueContest.Provider>
  );
}

export default App;
