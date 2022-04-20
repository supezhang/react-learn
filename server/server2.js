const express = require('express')
const app = express();

app.use((req,res,next)=>{
  console.log('请求服务2');
  next()
})

app.get('/cars',(req,res)=>{
  const students = [
    {id:'001',name:'奔驰',price:188},
    {id:'002',name:'马自达',price:109},
    {id:'003',name:'捷达',price:20}
  ]
  res.send(students)
})

app.listen(5001,err=>{
  if(!err){
    console.log('服务2启动，地址为：http://localhost:5001/cars');
  }
})