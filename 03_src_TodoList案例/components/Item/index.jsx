import React, { Component } from 'react';
import PropTypes from 'prop-types'
export default class index extends Component {
  static propTypes={
    todo:PropTypes.object
  }
  delTodo=(id)=>{
    this.props.delTodo(id)
  }
  changeDone=(id,event)=>{
    this.props.doneTodo(id,event.target.checked)
  }
  render() {
    const {id,name,done} = this.props.todo
    return (
      <div className="todo-item">
        <div className="diy-check">
          <label>
            <input type="checkbox" checked={done}   onChange={(event)=>this.changeDone(id,event)}/>
            <span className="desc">{name}</span>
          </label>          
        </div>
        <div className="todo-item-del">
          <button onClick={()=>this.delTodo(id)} className="diy-btn diy-btn-danger">删除</button>
        </div>
      </div>
    );
  }
}
