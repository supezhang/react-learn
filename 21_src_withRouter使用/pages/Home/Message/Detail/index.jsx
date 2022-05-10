import React, { Component } from 'react';
// search 接收参数
import qs from 'querystring'

let obj = {name:'tom',age:18} //name=tom&age=18 key=value&key=value //urlencoded编码
console.log(qs.stringify(obj));
let str = 'carName=奔驰&price=199'
console.log(qs.parse(str));

class index extends Component {
  detailData=[
    {id:'01',content:"你好react"},
    {id:'02',content:"你好vue"},
    {id:'03',content:"你好java"}
  ]
  render() {
    console.log("detail:",this.props);
    // params 接收参数
    // const {id,title} = this.props.match.params

    // search 接收参数
    // const {search} = this.props.location   
    // const {id,title} = qs.parse(search.slice(1))
    // console.log('search:',id,title);

    // state 接收参数
    const {id,title} = this.props.location.state || {}


    const findResult = this.detailData.find(msgobj=>{
      return msgobj.id === id
    }) || {}
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          {/* <li>CONTENT:{findResult?findResult.content:"空"}</li> */}
          <li>CONTENT:{findResult.content}</li>
        </ul>
      </div>
    );
  }
}

export default index;