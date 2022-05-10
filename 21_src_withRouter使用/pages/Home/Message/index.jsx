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
  pushShow=(id,title)=>{
    // push 调转 携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    // push 调转 携带search参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

    // push 调转 携带state参数
    this.props.history.push({pathname:`/home/message/detail`,state:{id,title}})
  }
  replaceShow=(id,title)=>{
    // push 调转 携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    // push 调转 携带search参数
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

    // push 调转 携带state参数
    this.props.history.replace({pathname:'/home/message/detail',state:{id,title}})
  }
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
    const {msgArr} = this.state
    return (
      <div>
        <ul>
          {
            msgArr.map(msg=>{
              // params 传参
              // return  <li key={msg.id}>
              //           <MyNavlink activeClassName="on" to={`/home/message/detail/${msg.id}/${msg.title}`}  id={msg.id} children={msg.title}></MyNavlink>
              //           &nbsp;<button className="diy-btn" onClick={()=>this.pushShow(msg.id,msg.title)}>push查看</button>&nbsp;
              //           <button className="diy-btn" onClick={()=>this.replaceShow(msg.id,msg.title)}>replace查看</button>
              //         </li>     
             
              // search 传参
              // return  <li key={msg.id}>
              //           <MyNavlink activeClassName="on" to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}  id={msg.id} children={msg.title}></MyNavlink>
              //           &nbsp;<button className="diy-btn" onClick={()=>this.pushShow(msg.id,msg.title)}>push查看</button>&nbsp;
              //           <button className="diy-btn" onClick={()=>this.replaceShow(msg.id,msg.title)}>replace查看</button>
              //         </li>     
             
              // state 传参
              return  <li key={msg.id}>
                        <MyNavlink activeClassName="on" replace={true} to={{pathname:'/home/message/detail',state:{id:msg.id,title:msg.title}}}  id={msg.id} children={msg.title}></MyNavlink>
                        &nbsp;<button className="diy-btn" onClick={()=>this.pushShow(msg.id,msg.title)}>push查看</button>&nbsp;
                        <button className="diy-btn" onClick={()=>this.replaceShow(msg.id,msg.title)}>replace查看</button>                      
                      </li>     
            })
          }             
        </ul>
        <br />
        <div className="msg-detail-box">
          {/* {注册路由} */}
          {/* {params 传参 ：id/:title 接收} */}
          {/* <Route path="/home/message/detail/:id/:title" component={Detali}></Route> */}
        
          {/* {search 传参  无需接收} */}
          {/* <Route path="/home/message/detail" component={Detali}></Route> */}

          {/* {state 传参  无需接收} */}
          <Route path="/home/message/detail" component={Detali}></Route>
        </div>
        <br />
        <button onClick={this.goForward}>前进</button>&nbsp;
        <button onClick={this.goBack}>后退</button>&nbsp;
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}

export default index;