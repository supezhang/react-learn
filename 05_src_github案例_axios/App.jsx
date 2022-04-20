import React, { Component } from 'react';
import Search from './components/Search'
import List from './components/List'
import Empt from './components/Empt'
import './App.css'
class App extends Component {
  state={
    users:[],
    isLoading:false,
    isFirst:true,
    err:''
  }
  updateState=(stateObj)=>{
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="diy-container">
        <div className="github-user-container">
          <Search updateState={this.updateState}/>
          <List {...this.state}/> 
        </div>
      </div>
    );
  }
}

export default App;