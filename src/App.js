import React, {useState}  from 'react';
import './App.css';
import './wow.css';
import Parent from './Parent'

function App(props) {
  let [number, setNumber] = useState(50)
  return (
    <div className="App">
      <header className="App-header">
      <Parent num={number}></Parent>
      <button onClick={()=>{setNumber(++number)}}>Update number</button>
      </header>
    </div>
  );
}

export default App;
