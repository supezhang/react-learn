import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // StrictMode 检查 组件里不合理的地方
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// 记录页面性能
reportWebVitals();
