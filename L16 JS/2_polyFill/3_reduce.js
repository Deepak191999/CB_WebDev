// inbuilt reduce fun

// let arr= [11,12,13,14,15]
// let arr1= arr.reduce((acc,val,indx,arr)=>{
//   console.log(val,indx,arr)
//   return (acc+val)
// })

// console.log(arr1)

//----------------------------------------------------

// we create reduce fun
Array.prototype.myReduce = function (fun, initVal) {
  let arr = this;

  let acc ;
  let indx ;
  if (initVal != undefined) {
    acc = initVal;
    indx = 0;
  }
  else{
    acc = arr[0];
   indx = 1;
  }

  for (let i = indx; i < arr.length; i++) {
    acc = fun(acc, arr[i], i, arr);
  }
  return acc;
};



let arr = [11, 12, 13, 14, 15];
let arr1 = arr.myReduce((acc, val, indx, arr) => {
  console.log(val, indx, arr);
  return acc + val;
},0);

console.log(arr1);
