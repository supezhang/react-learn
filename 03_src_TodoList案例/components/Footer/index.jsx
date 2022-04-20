import React, { Component } from 'react';
import './index.css'
export default class index extends Component {
  countTodo=(event)=>{
    const dones = event.target.checked
    this.props.countTodo(dones)
  }
  delTodos=()=>{

  }
  render() {
    const {todos,delTodos}= this.props
    const done = todos.filter(todo=>{
      return todo.done
    })
    return (
      <div className="footer">
        <div className="footer-count-col">
          <div className="diy-check">
            <label>
              <input onChange={(event)=>this.countTodo(event)} type="checkbox" checked={done.length===todos.length}/>
              <span className="desc">已完成{done.length}/全部{todos.length}</span>
            </label>
          </div>
        </div>
        <div className="clear-col">
          <button className="diy-btn diy-btn-danger" onClick={delTodos}>清除所选</button>
        </div>
      </div>
    );
  }
}
