
// inbuilt .map fun

// let arr= [11,12,13,14,15]
// let arr1= arr.map((val,indx,arr)=>{
//   console.log(val*val,indx,arr)
//   return (val)
// })

// console.log(arr1)


//----------------------------------------------------

// we create map fun

Array.prototype.myMap=function(fun)
{
  let arr=this   //  [11,12,13,14,15]
  let newArr=[]
  for (let i = 0; i < arr.length; i++) {
    let newVal= fun(arr[i],i,arr)
    newArr.push(newVal)
  }
  return newArr
}

let arr= [11,12,13,14,15]
let arr1= arr.myMap((val,indx,arr)=>{
  console.log(val*val,indx,arr)
  return (val)
})

console.log(arr1)