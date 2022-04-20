import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavlink from './components/MyNavlink'
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
                <li><MyNavlink activeClassName="on" to="/home" children="home"/></li>
                <li><MyNavlink activeClassName="on" to="/about">about</MyNavlink></li>                             
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