// const lib2 = require('./lib2');
// console.log("Running lib1");
// function sum(a, b) {
//     return a + b;
// }

// let a = 1;

// module.exports = {
//     sum,
//     a,
//     lib2
// }

//--------------------------------------------------------
//Practice

const lib2= require('./lib2')
console.log("calling lib1")

function mutiply(a,b){
    return a*b;
}
let x=4

module.exports={
    mutiply,x,lib2
}
