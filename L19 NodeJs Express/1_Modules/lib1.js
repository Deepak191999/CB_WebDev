
// console.log("inside lib file")

// function sum(a,b)
// {
//     return a+b;
// }
// function subtract(a,b)
// {
//     return a-b;
// }

// //module ek object hai 
// module.exports={
//     sum,subtract
//     // "sum"=sum   // hum key value me bhi bhj skte hai jb key value same ho to ek hi name likh  skte hai
//     // "subtract"=subtract
// }

//--------------------------------------------------------
//Practice


console.log("lib called")
function sum(a,b){
    return a+b
}
function subtract(a,b)
{
    return a-b;
}

module.exports={

    sum,subtract
    //or
    // "sum":sum,
    // subtract:subtract
}