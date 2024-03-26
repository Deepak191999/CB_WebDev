
// function funGenerator(){
//     function innerFun(){
//         console.log("I am an inner Function");
       
//     }

//     return innerFun;
// }

// // funGenerator()  //this will won't work  , funGenerator()() aise kam krega
// let fun = funGenerator();
// console.log(fun);
// console.log(fun.toString());
// fun()   // it is calling the innerFun() ,kyuki ye ab innerfun ka point kr rh h
 

//-----------------------------------------------------------------

// function funGenerator(){
//     function innerFun(){
//         console.log("I am an inner Function");
//         function mostinner()
//         {
//             console.log('i am most inner');
//         }
//       return  mostinner
//     }

//     return innerFun;
// }


// let fun=funGenerator()
// // console.log(fun());
// fun()   // o/p-> I am an inner Function
// let fun2= fun()
// fun2()        // o/p-> I am an inner Function,i am most inner



//------------------------------------------------------------------

// function callFun(fun){
//     console.log("Recieved Fun Value:",fun);
//     // console.log("Recieved Fun Value:",fun());
//     console.log("Recieved Fun In Text:",fun.toString());
//     fun();
// }

// function hello(){
//     console.log("Hello fun calling");
// }

// function world(){
//     console.log("World fun calling");
// }

// callFun(hello);
// callFun(world);


//------------------------------------------------------------------

//  function sum(a,b){
//     return a+b;
// }
// let a= function (a,b){
//     return a+b;
// }

// console.log(a(10,20));
// console.log(sum(10,20));
