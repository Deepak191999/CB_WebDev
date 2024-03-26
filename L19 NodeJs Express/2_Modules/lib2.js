// const lib1 = require('./lib1');
// console.log("Running lib2");
// function subtract(a, b) {
//     return a - b;
// }

// let b = 1;

// module.exports = {
//     subtract,
//     b,
//     lib1
// }
//--------------------------------------------------------
//Practice

const lib1= require("./lib1")

console.log("calling lib2")
let divide= (a,b)=>{

    return a/b;
}
let y=5

module.exports={
    divide,y,lib1
}