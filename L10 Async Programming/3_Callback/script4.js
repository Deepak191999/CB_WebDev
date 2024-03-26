// function download(callbck) {
//     //callback me compress ayega
//   console.log("download start");

//   setTimeout(() => {
//     console.log("download completed");
//     callbck(upload)
//   }, 2000);
// }



// function compress(callbck) {
//   console.log("compression start");
//   setTimeout(() => {
//     console.log("compression completed");
//     callbck(allWorkDone)
//   }, 2000);

// }


// function upload(callbck) {
//   console.log("uploading start");
//   setTimeout(() => {
//     console.log("upload completed");
//    callbck()
//   }, 2000);
// }

// function allWorkDone() {
//   console.log("allWorkDone");
// }

// download(compress);



//----------------------------------------------------------------------------------
function fun1(callback){
  console.log("fun 1 Start");
  setTimeout(() => {
    console.log("fun 1 End");
    callback(fun3)
  }, 2000);
}

function fun2(callback){
  console.log("fun 2 Start");
  setTimeout(() =>{
    console.log("fun 2 End")
    callback(fun4)
  }, 2000);
}

function fun3(callback){
  console.log("fun 3 Start");
  setTimeout(() => {
    console.log("fun 3 End");
    callback(fun5)
  }, 2000);
}


function fun4(callback){
  console.log("fun 4 Start");
  setTimeout(() => {
    console.log("fun 4 End");
    callback(fun6)
  }, 2000);
}

function fun5(callback){
  console.log("fun 5 Start");
  setTimeout(() => {
    console.log("fun 5 End");
    callback()
  }, 2000);
}

function fun6(){
  console.log("fun 6 Start");
  setTimeout(() => {
    console.log("fun 6 End");
  }, 2000);
}

fun1(fun2)