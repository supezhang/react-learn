import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
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
                <li><MyNavlink activeClassName="on" to="/home" children="home"/></li>
                <li><MyNavlink activeClassName="on" to="/about">about</MyNavlink></li>                             
              </ul>
            </div>
            <div className="content-col">
              <div className="pages-content">
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/about" component={About}/>  
                  <Redirect to="/about"/>              
                </Switch>               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}