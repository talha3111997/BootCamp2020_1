import React from 'react';
import './App.css';
import './wow.css';

function Child(props) {
  return (
    <div className="App">
      <p>The child component value is : {props.childNum}</p>
    </div>
  );
}

export default Child;
