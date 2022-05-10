import React, { Component } from 'react';
import {Button,DatePicker} from 'antd';
import {WechatOutlined,SearchOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css';
const {RangePicker} = DatePicker;
export default class App extends Component { 
  getDataVal=(date, dateString)=>{
    console.log(date, dateString);
  }
  render() {
    return (
      <div className="diy-container">
        <div className="app-wrapper">
          <Button type='primary'>primary</Button>
          <Button>primary</Button>
          <Button type='link'>link</Button>
          <Button type='primary' icon={<SearchOutlined/>}>search</Button>
          <WechatOutlined/>
          <br />
          <DatePicker onChange={this.getDataVal}/>
          <RangePicker/>
        </div>
      </div>
    );
  }
}