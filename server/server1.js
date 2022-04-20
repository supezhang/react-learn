const express = require('express')
const app = express();

app.use((req,res,next)=>{
  console.log('请求服务1');
  next()
})

app.get('/students',(req,res)=>{
  const students = [
    {id:'001',name:'tom',age:18},
    {id:'002',name:'jerry',age:16},
    {id:'003',name:'tony',age:20}
  ]
  res.send(students)
})

app.listen(5000,err=>{
  if(!err){
    console.log('服务1启动，地址为：http://localhost:5000/students');
  }
})