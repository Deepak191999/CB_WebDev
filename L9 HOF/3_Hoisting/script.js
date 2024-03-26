// js me file 2 bar chti hai , mtlb ek sare integer funct upr chle jate hai hoist hoga mgr value nhi jayegi uski
//#Note  let me hoisting nhi hoti ,mtlb bina before intiliaze ke error de dega

hello();
console.log(a);  // is case me agr let hota to error ata

function hello(){
    console.log("Hello World");
}

var a = 10;
console.log(a);

