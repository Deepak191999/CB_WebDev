// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = 4444;

// app.use(express.static(path.join(__dirname,'public')));

// // note-> jb public folder me index.html file hai to vo chlegi ye nhi chlti, agr index.html nhi hai or ye uncomment hai to ye chelga
// app.get('/',(req,res)=>{
//     res.send("Hello From get request");
// })


// app.listen(PORT, () => {
//     console.log(`http://localhost:${PORT}`); 
// });


// //------------------------------------------------Practice------------------------------------------------
const express= require('express')
const path=require('path')
const app= express()
const port= 4444;

app.listen(port,()=>{
    console.log(`server is st ${port}`)
})

app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res)=>{
//     res.send("HEllo")
// })