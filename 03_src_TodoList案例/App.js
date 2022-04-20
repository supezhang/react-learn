import React,{ Component } from 'react'
import Todo from './pages/todo'
import './app.css'
export default class App extends Component{

  render(){
    return (
      <div>
        <Todo/>
      </div>
    )
  }
}