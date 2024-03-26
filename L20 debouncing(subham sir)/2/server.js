const express= require('express')

const app= express()
// console.log(process.pid) 
let port=5055
app.listen(port,()=>{
console.log(`Server is listening at port ${port}`)
})

// let url= 'https://jsonplaceholder.typicode.com/posts'


app.get('/pants',(req,res)=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((r)=>{
    return r.json()
    }).then((data)=>{
        // console.log(data)
        let arr=data.slice(0,10)
        res.send(arr) 
    })  
})