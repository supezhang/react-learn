import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import MyNavlink from '../../../components/MyNavlink'
import Detali from './Detail'
class index extends Component {
  state={
    msgArr:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'},
    ]
  }
  render() {
    const {msgArr} = this.state
    return (
      <div>
        <ul>
          {
            msgArr.map(msg=>{
              // params 传参
              return  <li key={msg.id}><MyNavlink activeClassName="on" to={`/home/message/detail/${msg.id}/${msg.title}`}  id={msg.id} children={msg.title}></MyNavlink></li>     
            })
          }             
        </ul>
        <div className="msg-detail-box">
          {/* {注册路由} */}
          {/* {params 传参} */}
          <Route path="/home/message/detail/:id/:title" component={Detali}></Route>
        </div>
      </div>
    );
  }
}

export default index;