import React,  {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './wow.css';

function App(props) {
  
let [islit, setlit] = useState(false)
  function toggleLit(){
    setlit(!islit)
  }
let [Age, setAge] = useState(22)
  const increaseAge = ()=>{
    setAge(++Age)
  }
  return (
    <div className="App">
      <p>Alhamdulilah , its been working </p>
        <p >
         city is : {props.city}
        </p>
        <p> The room is : {islit? 'light':'dark'} </p>
        <button onClick={()=> setlit(!islit)}> Toggle lit</button>
        <h2>The age is : {Age}</h2>
        <button onClick={()=>{
    setAge(++Age)
  }}>Click to increase age</button>
    </div>
  );
}

export default App;
