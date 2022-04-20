import React, { Component } from 'react';
import axios from 'axios'
import PubSub from 'pubsub-js'
class index extends Component { 
  search=async()=>{
    const keyWordsVal = this.keyWordEle.value;
    if(keyWordsVal.trim()==='') {return alert("输入不能为空！")}
    // PubSub.publish('my-pubsub',{isLoading:true,isFirst:false})
    // #region
    // axios.get(`https://api.github.com/search/users?q=${keyWordsVal}`).then(res=>{
    //   console.log('成功',res);
    //   PubSub.publish('my-pubsub',{isLoading:false,isFirst:false,users:res.data.items,err:''})
    // },err=>{
    //   console.log('失败',err);
    //   PubSub.publish('my-pubsub',{isLoading:false,isFirst:false,users:[],err:err.message})
    // })
    //#endregion  
    
    // await 和 async 配合使用
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${keyWordsVal}`);
      const fetchData = await response.json();
      PubSub.publish('my-pubsub',{isLoading:false,isFirst:false,users:fetchData.items,err:''})
    }catch(err){
      // 比如断网
      console.log('请求出错',err);
      PubSub.publish('my-pubsub',{isLoading:false,isFirst:false,users:[],err:err.message})
    }
 
    // fetch(`https://api.github.com/search/users?q=${keyWordsVal}`)
    // .then(res=>{
    //   return res.json
    // })
    // .then(myJson=>{
    //   console.log('@@',myJson);
    // })
    // console.log(1);
    
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