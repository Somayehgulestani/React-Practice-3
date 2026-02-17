import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { State } from './state'
// import { State2 } from './state2'
// import { State3 } from './state3'
import { ToDo } from './ToDoList'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <State />
    <State2 />
    <State3 /> */}
    <ToDo />
  </React.StrictMode>
)
