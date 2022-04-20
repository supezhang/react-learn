import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import "./index.css"
export default class index extends Component {
  static propTypes={
    addTodo:PropTypes.func.isRequired
  }
  handleKeyUp=(event)=>{
    // const val = event.target.value;
    // const keyCode = event.keyCode   
    // ⬇⬇⬇⬇
    const {keyCode,target} = event
    
    const todo = {id:nanoid(),name:target.value,done:false}
    if(keyCode!==13) return;
    if(target.value.trim()===""){alert('输入不能为空');return;}
    this.props.addTodo(todo)
    target.value=""   
  }
  render() {
    return (
      <div className="header-box">
        <input onKeyUp={this.handleKeyUp} className="diy-input" type="text" placeholder="输入名称，回车确认" />
      </div>
    );
  }
}
