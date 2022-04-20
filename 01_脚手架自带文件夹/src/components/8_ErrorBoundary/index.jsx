import React, { Component } from 'react';
import './index.css'
export default class Case extends Component {
  state= {
    hasErr:''
  }
  static getDerivedStateFromError(error){
    console.log("子组件报错时，触发getDerivedStateFromError,并携带错误信息",error)
    return {hasErr:error}
  }
  // 组件出错误时候 统计错误次数 反馈给后台。服务器， 通知开发修改bug
  componentDidCatch(){
    console.log("渲染组件出错")
  }
  render() {
    return (
      <div className="parent">
        <h2>parent组件</h2>
        {/* <Child/> */}
        {
          this.state.hasErr?<h2>网络不稳定，稍后再试</h2>:<Child/>
        }
      </div>
    );
  }
}

class Child extends Component {
  state = {
    // users:[
    //   {id:'001',name:'tom',age:18},
    //   {id:'002',name:'jack',age:18},
    //   {id:'003',name:'peiqi',age:18},
    // ],
    users:'abc'
  }
  render() {
    const {users} = this.state
    return(
      <div className="a">
        <h2>a组件</h2>
        {
          users.map(user=>{
            return <h4 key={user.id}>{user.name}----{user.age}</h4>
          })
        }
      </div>
    )    
  }
}

