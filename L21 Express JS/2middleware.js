// const express= require ('express')
// const app= express()

// const port= 4444;

// //creating path specific middleware
// // works for: /hello/something/something/...../...../.....
// // pathspecific
// app.use('/hello',(req,res,next)=>{
//     console.log("Running extra middleware")
//     next()
// })

// //creating middleware fun
// app.use((req,res,next)=>{
//     console.log("inside middleware - 1")
//     next()
// })

// //creating middleware fun
// // how to use this => http://localhost:4444/?password=abcd  , phle nodemon middleware.js start krna pdega
// app.use((req,res,next)=>{
//     const {password}= req.query
//     console.log("inside middleware -2  ")
//      next();  // niche vala if else chlan hai to next to yha se comment out kr dena, vrna if else condn ka koi mtlb nhi hua
//     // if(password=== 'abcd'){
//     //     next()
//     // }
//     // else{
//     //     res.send("Incorrect password")
//     // }
// })

// // note agr next me jaye call ya fun tb hi niche jayega, vrna nhi jayega

// app.get('/',(req,res)=>{
//     res.send("Hello  ji")

//     console.log("After hello i am here")
// //    res.send("After hello i am here")  //you cannot send two response
// })

// app.get('/hello',(req,res)=>{
//     res.send("hii")
// })

// app.listen(port,()=>{
//     console.log(`listening at port ${port} `)
// })

// //------------------------------------------------Practice------------------------------------------------
const express = require("express");
const app = express();

const port = 4444;

app.listen(port, () => {
  console.log(`server is up at ${port}`);
});

app.use('/hello',(req, res, next) => {
    console.log("use middleware 1");
   next()
  });
//ye jb use krna hai ,jb hello pe get kr rh hai mgr us se phle baricade kr diya ,kuch conds likh ke vo kam middleware krega, /hello pe jo req jayegi vo phle verify hogi barricade se .use jo kra hai vo, phr agge jayegi



app.use((req, res, next) => {
  console.log("use middleware 2");
  const { password } = req.query;
  if (password === "abcd") {
    next();
  } else {
    res.send("Incorrect password");
  }
});



app.get("/hello", (req, res) => {
  res.send("hello calling");
  console.log("hello");
});
app.get("/", (req, res) => {
  res.send("/ calling");
  console.log("hello");
});
