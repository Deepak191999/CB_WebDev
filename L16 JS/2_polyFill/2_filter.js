// Array.prototype.filterfun = function (fun) {
//     let arr = this;
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//       let newVal = fun(arr[i], i, arr);
//       if (newVal == true) {
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr;
//   };

//   let arr = [1, 2, 3, 4, 5,6];

//   let arr2 = arr.filterfun((val, indx, arr) => {
//     return val % 2 == 0;
//   });

//   console.log(arr2);

//----------------------------------------------------

//
// inbuilt filter fun
// let array = [11, 12, 13, 14, 15];

// let arr1 = array.filter((val, indx, arr) => {
//   if (val % 2 == 0) {
//     console.log(val,indx,arr) ;
//   }

// });
// // console.log(arr1);

//----------------------------------------------------

// we create filter fun
Array.prototype.myFilter = function (fun) {
  arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let val = fun(arr[i], i, arr);
    newArr.push(val);
  }
  return newArr;
};

let array = [11, 12, 13, 14, 15];

let arr1 = array.myFilter((val, indx, arr) => {
  if (val % 2 == 0) {
    console.log(val, indx, arr);
  }
});
console.log(arr1);
