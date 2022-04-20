import React, { Component } from 'react';
import axios from 'axios'
import PubSub from 'pubsub-js'
class index extends Component { 
  search=()=>{
    const keyWordsVal = this.keyWordEle.value;
    if(keyWordsVal.trim()==='') {return alert("输入不能为空！")}
    this.keyWordEle.value= ""
    PubSub.publish('my-pubsub',{isLoading:true,isFirst:false})
    axios.get(`https://api.github.com/search/users?q=${keyWordsVal}`).then(res=>{
      console.log('成功',res);
      PubSub.publish('my-pubsub',{isLoading:false,isFirst:false,users:res.data.items,err:''})
    },err=>{
      console.log('失败',err);
      PubSub.publish('my-pubsub',{isLoading:false,isFirst:false,users:[],err:err.message})
    })
  }
  render() {
    return (
      <div className="github-search-wrap">
        <h2 className="search-title">Search user info...</h2>
        <div className="search-box">
          <input type="text" className="diy-input" placeholder='keywords' ref={c=>this.keyWordEle=c}/>
          <button className="diy-btn" onClick={this.search}>search</button>
        </div>
      </div>
    );
  }
}

export default index;