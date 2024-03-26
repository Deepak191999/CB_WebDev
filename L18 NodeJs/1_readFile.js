// const fs= require('fs');
// const path = require('path');
// const filePath= path.join(__dirname,'./data/tasks.json')

// //way-1
// fs.readFile(filePath,{encoding:'utf8'},(err,data)=>{
//     if(err) throw err;
//     data=JSON.parse(data)  // json ko object me convert kiya, agr iske bina print krdenge to vo "string " hogi
//     console.log('way 1',data)
// })


// //way-2
// fs.readFile(filePath,(err,data)=>{
//     if(err) throw err;
//     data=JSON.parse(data)  // json ko object me convert kiya
//     // console.log('way 2',data.toString())
//     console.log('way 2',data)
// })

//Note ye dono asyn task hai, ho ans aage piche a skta hai, je task nodejs se uthaye hai



//-------------------------------------------------------
// //Practice
const fs=require('fs')
const p= require('path')
const filePath= './data/tasks.json'

fs.readFile(filePath,(err,data)=>{
    if(err) throw err
    // Convert the Buffer to a string
    data = data.toString();

    // Parse the JSON-formatted string
    data = JSON.parse(data);

    console.log(data);
})

fs.readFile(filePath,{encoding:'utf-8'},(err,data)=>{
    if(err) throw err
    data=JSON.parse(data)
    console.log(data)
})
