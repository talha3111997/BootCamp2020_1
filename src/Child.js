import React, { useContext } from 'react';
import './App.css';
import './wow.css';
import ValueContest from './ValueContest';
import Child2 from './Child2';

function Child() {
    let value = useContext(ValueContest)
  return (
    <div className="App">
      <p>The child component value is : {value[0]}</p>
      <button onClick={()=>{value[1](++value[0])}}>Update bro</button>

  <Child2>child2 call {}</Child2>
  
    </div>
  );
}

export default Child;
