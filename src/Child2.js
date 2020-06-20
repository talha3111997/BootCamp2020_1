import React, { useContext, useReducer } from 'react';
import './App.css';
import './wow.css';
import numberReducer from './numberReducer'
function Child2() {
    let [state, dispatch] = useReducer(numberReducer, 22)
  return (
    <div >
      Enter your number here:  <input id="customNum" onBlur={()=>{dispatch({type: "step" , num: parseInt(document.getElementById("customNum").value)})}} placeholder="Enter the number to add"/>
      <p>child number two : {state}</p>
      <button onClick={()=> {dispatch({type: "increment"})}}>Increment</button>
      <button onClick={()=> {dispatch({type: "decrement"})}}>Decrement</button> 
       <button onClick={()=>{dispatch({type: "step" , num: 30})}}> Step Increment of 30</button>
        </div>
  );
}

export default Child2;
