import React, { Component } from 'react';
class index extends Component {
  render() {
    const {users,isFirst,isLoading,err} = this.props    
    return (
      <div className="diy-list-content">
        {
          isFirst ? <h2>请输入关键字搜索。。。</h2>:
          isLoading? <h2>加载中。。。</h2>:
          err?<h2>请求失败：{err}。。。</h2>:
          users.length>1 ? users.map(item=>{
            return(
              <div className="diy-card-box flex-column" key={item.id}>
                <div className="card-avatar diy-pointer">
                  <img src={item.avatar_url} alt="avatar" />
                </div>
                <p className="card-desc">{item.login}</p>
                <a href={item.html_url} className="card-detail-link"></a>
              </div>
            )
          }):<h2>暂无数据。。。</h2>
        } 
      </div>
    );
  }
}

export default index;