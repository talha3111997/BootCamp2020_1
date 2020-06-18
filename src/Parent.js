import React from 'react';
import './App.css';
import './wow.css';
import Child from './Child'
function Parent(props) {
  return (
    <div className="App">
      <Child childNum={props.num}></Child>
    </div>
  );
}

export default Parent;
