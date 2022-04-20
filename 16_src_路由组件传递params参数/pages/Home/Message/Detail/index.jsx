import React, { Component } from 'react';

class index extends Component {
  detailData=[
    {id:'01',content:"你好react"},
    {id:'02',content:"你好vue"},
    {id:'03',content:"你好java"}
  ]
  render() {
    console.log("detail:",this.props);
    const {id,title} = this.props.match.params
    const findResult = this.detailData.find(msgobj=>{
      return msgobj.id === id
    })
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult?findResult.content:"空"}</li>
        </ul>
      </div>
    );
  }
}

export default index;