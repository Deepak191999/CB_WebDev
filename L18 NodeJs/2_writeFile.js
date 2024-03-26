// const fs= require('fs');
// const path = require('path');
// // const filePath= './data/tasks.json'
// const filePath= path.join(__dirname,'./data/tasks.json')
// const arr= ['Hello ji j'];

// // console.log(__dirname)
// // console.log(__filename)

// // console.log('a/'+'/b');  // aiise glti hoti hai jb 2 path join krte hai isliye "path.join "use krte hai
// // console.log(path.join('a','b'));
// // console.log(path.join('a/','/b'));
// // console.log(path.join('a','/b'));
// // console.log(path.join('a/','b'));


// fs.writeFile(filePath,JSON.stringify(arr),(err)=>{
//     if(err)
//     {
//         throw err
//     }
//     console.log("likh giya success")
// })


//-------------------------------------------------------
// //Practice
const fs=require('fs')
const filePath = './data/tasks.json'

const arr = [
    {name: 'Ruchi',age: 100},
    {name: 'Mehak',age: 420},
    {name: 'Badal',age: 1},
    {name: 'Doraemon',age: 10},
];

fs.writeFile(filePath,JSON.stringify(arr),(err)=>{
    if(err) throw err
    console.log('Likh liya')
})