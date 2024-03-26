// iifee bs ek baar call hota hai dubar kbhi call nhi hoga ,na dubara milega function

//we use iife  to hide information

// (function(){
//     let a=10;
//     console.log(a);
//     console.log("Hello world");
// })()

// console.log(a);// y nhi chlega


// We can use iife's to hide info
let info = (function(name,age,hobbies,marks){
   function passesExams(){
    return marks>=33;  
   }

   function printDetails(){
    console.log("Name",name);
    console.log("Age",age);
    console.log("Hobbies",hobbies);
    console.log("Marks",marks);
   }
   return{
    passesExams,  // aise pass kra to key & value dono chize pass ho jayegi
    printDetails
   }
   
})("Deepa",23,['Drive a car'],88)


console.log("info",info);
console.log(info.passesExams());
info.printDetails()
