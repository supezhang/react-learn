import React, { Component } from 'react';
import './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import List from '../../components/List'
export default class index extends Component {
  state={
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'上班',done:false}
    ]
  }
  addTodo=(todo)=>{
    const {todos} = this.state
    this.setState({todos:[todo,...todos]})
  }
  delTodo=(id)=>{
    const {todos} = this.state   
    const newTodos = todos.filter(todo=>{
      return todo.id!==id
    })
    this.setState({todos:newTodos})
  }
  delTodos=()=>{
    const {todos} = this.state   
    const newTodos = todos.filter(todo=>{
      return !todo.done
    })
    this.setState({todos:newTodos})
  }
  doneTodo=(id,done)=>{
    const {todos} = this.state   
    const newTodos = todos.map(todo=>{
      if(todo.id===id){return {...todo,done}}
      else return todo
    })
    this.setState({todos:newTodos})
  }
  countTodo=(dones)=>{
    const {todos} = this.state
    const newTodos = todos.map(todo=>{
      return {...todo,done:dones}
    })
    this.setState({todos:newTodos})
  }
  render() {
    const {todos} = this.state
    return (
      <div className="diy-container">
        <div className="todo-wrapper">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} delTodo={this.delTodo} doneTodo={this.doneTodo}/>
          <Footer countTodo={this.countTodo} todos={todos} delTodos={this.delTodos}/>
        </div>
      </div>
    );
  }
}
