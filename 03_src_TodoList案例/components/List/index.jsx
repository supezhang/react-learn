import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Item from '../Item'
export default class index extends Component {
  static propTypes={
    delTodo:PropTypes.func.isRequired,
    doneTodo:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired
  }
  render() {
    const {todos,delTodo,doneTodo} = this.props
    return (  
      <div className="todo-list">
        {
          todos.map(todo=>{
            return <Item key={todo.id} todo={todo} delTodo={delTodo} doneTodo={doneTodo}/>
          })
        }
      </div>
    );
  }
}
