import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class index extends Component {
  goBack=()=>{
    this.props.history.goBack();
  }
  goForward=()=>{
    this.props.history.goForward()
  }
  go=()=>{
    this.props.history.go(1)
  }
  render() {
    console.log(this.props);
    return (
      <div className="header">
        <h2 className="tit-demo">React Router Demo</h2>
        <br />
        <button onClick={this.goForward}>前进</button>&nbsp;
        <button onClick={this.goBack}>后退</button>&nbsp;
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}

export default withRouter(index);

// withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter 的返回值是一个新组件