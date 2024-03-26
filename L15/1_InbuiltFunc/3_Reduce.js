//ask in interview

let arr=[1,2,3,4,5]
// reduce pure arr ko ek val me change kr dega jo tume chaiye ho us acc change kr lo
// console.log(arr)


let ans= arr.reduce((accumulator,val,indx,arr)=>{
    console.log('accumulator:',accumulator,'val:',val,"indx:",indx,)
  return(accumulator+val);
})


// let ans= arr.reduce((accumulator,val,indx,arr)=>{
//     console.log('accumulator:',accumulator,'val:',val,"indx:",indx,)
//   return(accumulator+val);
// },0)  // agr jaise value mention krdi accumulator ki 0, to value me 0th index a jayega
       
// ye kam product me nhi kr skte phir to sari value 0 ho jayegi, agr pass krna hi hai to 1 krna pdega phir 


console.log("sum",ans)

