import React, { Component } from 'react';
import './index.css'
export default class Case extends Component {
  render() {
    return (
      <div className="parent">
        <h2>parent组件</h2>
        {/* <A>
          <h3>hello ！！！</h3>          
        </A> */}

        {/* 相当于vue插槽 */}
        <A render={(name)=><B name={name}></B>}/>
      </div>
    );
  }
}

class A extends Component {
  state = {name:'tom'}  
  render() {
    console.log('a',this.props)
    const {name} = this.state
    return(
      <div className="a">
        <h2>a组件</h2>
        {/* {
          this.props.children
        } */}
        {
          this.props.render(name)
        }
      </div>
    )    
  }
}
class B extends Component {
  render() {
    console.log('b',this.props)
    return(
      <div className="b">
        <h2>b组件,{this.props.name}</h2>        
      </div>
    )    
  }
}
