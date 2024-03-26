// const express= require('express')
// const path=require('path')
// const app= express()
// const port= 4444;

// let getPath= (file)=>{
//     return path.join(__dirname,file)
// }
// app.use(express.static(path.join(__dirname,'public')));  // yha se '/' pe hit kra hai public folder

// app.use(express.urlencoded({extended:true})) // jo post me data hai vo body me ,jb vo chaiye ho to ye use krte hai

// app.get('/contact',(req,res)=>{
//     res.sendFile(getPath('contact.html'))
// })

// app.get('/hello',(req,res)=>{
//     console.log(req.query)
//     const {name,password}=req.query;
//     res.send(`hello  ${name} and password ${password}`)
// })

// //post me data url me nhi ata, ye same /hello hai pr post pe gyi hai req
// app.post('/hello',(req,res)=>{
//     console.log(req.body)
//     const {name,password}=req.body;
//     res.send(`hello ji  ${name} and password ${password}`)
// })

// //
// app.get('/learningpost',(req,res)=>{
//     res.sendFile(getPath('learningPost.html'))
// })

// app.listen(port,()=>{
//     console.log(`server is st ${port}`)
// })


// -------------------------------------Practice----------------------------------------------------
const path= require('path')
const express= require('express')
const app= express()
const port= 4444
// app.use(express.urlencoded({extended:true})) // jb post req mari tb ye use hoga iske bina error ayega

// ab upr vali jo line hai vo use nhi hota body-parser use krte hai
const bodyParser = require('body-parser');
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));




app.use(express.static(path.join(__dirname,'public')))  //home page '/'
app.get("/contactus",(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'))
})

// ye get req vali file contact.html se chailyi hai, ye tarika shi nhi hai
app.get('/hello',(req,res)=>{
    console.log("query ayi hai" ,req.query)
    const {names,pass}=req.query
    res.send(`hii ${names} your password is ${pass}`)
})


// ye post req vali file leaarnigPost.html se chailyi hai, ye tarika shi  hai
app.post('/hello',(req,res)=>{
    console.log("dubara query ayi hai" ,req.body)
    const {name,pass}=req.body;
    res.send(`hii ${name} your password is ${pass}`)
})

app.get("/learning",(req,res)=>{
    res.sendFile(path.join(__dirname, 'learningPost.html'))
})

app.listen(port,()=>{
    console.log(`server is up at http://localhost:${port}`)
})
