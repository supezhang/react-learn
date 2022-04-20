import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css'
export default class App extends Component { 
  render() {
    return (
      <div className="diy-container">
        <div className="app-wrapper">
          <div className="header">
            <h2 className="tit-demo">React Router Demo</h2>
          </div>
          <div className="main">
            <div className="sidebar-col">
              <ul className="sidebar-nav">                
                <li><Link to="/home">home</Link></li>
                <li><Link to="/about">about</Link></li>                             
              </ul>
            </div>
            <div className="content-col">
              <div className="pages-content">
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}