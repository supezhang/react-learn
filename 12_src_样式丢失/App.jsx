import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Header from './components/Header'
import MyNavlink from './components/MyNavlink'
import Home from './pages/Home'
import About from './pages/About'

import './App.css'
export default class App extends Component { 
  render() {
    return (
      <div className="diy-container">
        <div className="app-wrapper">
          <Header/>
          <div className="main">
            <div className="sidebar-col">
              <ul className="sidebar-nav">                
                <li><MyNavlink activeClassName="on" to="/atguigu/home" children="home"/></li>
                <li><MyNavlink activeClassName="on" to="/atguigu/about">about</MyNavlink></li>                             
              </ul>
            </div>
            <div className="content-col">
              <div className="pages-content">
                {/* 匹配到第一个 多个path一样时候 不会再往下匹配  效率问题  */}
                <Switch>
                  <Route path="/atguigu/home" component={Home}/>
                  <Route path="/atguigu/about" component={About}/>                
                </Switch>               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}