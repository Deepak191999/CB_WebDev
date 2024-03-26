let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9]

let arr= [...arr1,...arr2]
console.log(arr)

function sum(...args)
{
  return args.reduce((acc,val)=>acc+val)
}
console.log( sum(1,2,3,4,5))