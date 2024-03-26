// const express= require ('express')
// const app= express()

// const port= 4444;

// app.get('/',(req,res)=>{
//     res.send("Hello  ji")
// })
// // app.get('/greeting',(req,res)=>{
// //     res.send("Good afternoon")
// // })


// //using params

// // use like this=> http://localhost:4444/greeting/deepak
// app.get('/greeting/:name',(req,res)=>{
//     console.log(req.params)
//     // res.send(`Good afternoon, ${req.params.name}`)
//     const {name}= req.params;
//      res.send(`Good afternoon, ${name}`)
// })

// let people={}
// //using query parameter
// // use like this=> http://localhost:4444/wish?name=deepak
// app.get('/wish',(req,res)=>{
//     const {name}= req.query
//     if(people[name])
//     { people[name]++}
//     else{
//         people[name]=1;
//     }
   
//     res.send(`wishes to you ${name}, count: ${people[name]}`)
// })

// app.listen(port,(req,res)=>{
//     console.log(`listening at port ${port} `)
// })


//------------------------------------------------Practice------------------------------------------------
const express=require('express')
const app= express()
const port=4444

app.listen(port,()=>{
    console.log(`server is up at ${port}`)
})

app.get('/',(req,res)=>{
    res.send('good morning')
})

//using params
let people={}
app.get('/student/:name',(req,res)=>{
    // res.send(`welcome ${req.params.name}`)
    // console.log(req.params.name)
    // or
    const {name}= req.params  // destrucutre kr liye obj ko usme name property nikali
   
    console.log(name)
    if(people[name]){
        people[name]++
    }
    else{
        people[name]=1;
    }
    res.send(`welcome ${name}, count: ${people[name]}`)
})

//using query parameter
let coureCount={}
app.get('/course',(req,res)=>{
    // const
    // res.send(`hoo ${req.query.name}`)
    // console.log(req.query.name)

    // or
    const {name}= req.query;
    if(coureCount[name])
    {
        coureCount[name]++;
    }
    else{
        coureCount[name]=1;
    }
    res.send(`welcome ${name}, count: ${coureCount[name]}`)
})
