const express= require('express')
const app= express()

app.get('/',(req,res)=>{
    res.send("Hello ji")
})
app.get('/greeting',(req,res)=>{
    res.send("Hello greeting")
})
app.get('/bye',(req,res)=>{
    res.send("Hello bye")
})

app.listen(4444,()=>{
    console.log("http://localhost:"+4444); 
}) 