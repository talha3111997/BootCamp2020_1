import React from 'react'
import ReactDOM from 'react-dom'
import './wow.css'
import Room from './Room'
import App from './App'
function Hi(props){

  return <div className="heading"> Marhaba {props.name} <br></br>
        {props.age+2}
        <App></App>

          </div>
}

ReactDOM.render(<Hi name="Talha" age={20}/>, document.getElementById('root'))
