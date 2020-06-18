import React,  {useState} from 'react';

import './Room.css'
function Room(props) {
  
let [islit, setlit] = useState(false)
  
let [Age, setAge] = useState(22)
  
  return (
    <div className={`room ${islit ? "lit" : "dark"}`} >
      <p>Alhamdulilah , wow its been working </p>
        <p >
         city is : {props.city}
        </p>
        <p > The room is : {islit? 'light':'dark'} </p>
        <button onClick={()=> setlit(!islit)}> Toggle lit</button>
        <h2>The age is : {Age}</h2>
        <button onClick={()=>{
    setAge(++Age)
  }}>Click to increase age</button>
    </div>
  );
}

export default Room;
