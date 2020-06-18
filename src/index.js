import React from 'react'
import ReactDOM from 'react-dom'
import './wow.css'
import Room from './Room'
function Hi(props){

  return <div className="heading"> Marhaba {props.name} <br></br>
        {props.age+2}
        <Room city="Makkah"/>

          </div>
}

ReactDOM.render(<Hi name="Talha" age={20}/>, document.getElementById('root'))
