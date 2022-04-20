import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavlink from '../../components/MyNavlink'
import Message from './Message'
import News from './News'
class index extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <h2 className="home-tit">home内容</h2>
        <div className="tab-bar">
          <ul className="sidebar-nav layout-x">
            <li><MyNavlink activeClassName="on" to="/home/news" children="News"></MyNavlink></li>
            <li><MyNavlink activeClassName="on" to="/home/message" children="Message"></MyNavlink></li>
          </ul>
        </div>
        <div className="tab-content">
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home/news" component={News}/>
          </Switch>
        </div>        
      </div>
    );
  }
}

export default index;