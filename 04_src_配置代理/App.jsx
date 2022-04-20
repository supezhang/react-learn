import React,{ Component } from 'react'
import axios from 'axios'
import './app.css'
export default class App extends Component{

  getStudentData=()=>{
    axios.get('http://localhost:3000/api1/students').then(res=>{
      console.log('hahah',res.data);
    },err=>{
      console.log('失败',err);
    })
  }
  getCarsData=()=>{
    axios.get('http://localhost:3000/api2/cars').then(res=>{
      console.log('hahah',res.data);
    },err=>{
      console.log('失败',err);
    })
  }
  render(){
    return (
      <div>
        <h2>abc</h2>
        <button onClick={this.getStudentData}>获取学生数据</button>
        <button onClick={this.getCarsData}>获取汽车数据</button>
      </div>
    )
  }
}