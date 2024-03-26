// let str='hello learning from cb'

// // for (let i = 0; i < str.length; i++) {
// //   console.log(str[i])    }


// console.log(str);

// let indx = str.indexOf('learning')
// console.log(indx);


// let arr=str.split(' ')  //split str  to arr
// console.log(arr);

// let str1= arr.join(' ')  //covert arr to string
// console.log(str1);


let file= 'https://localhost:3555/file.mp4'
arr= file.split('/')
console.log(arr);
let fileName= arr.pop();
console.log(fileName)

let fileExtension= fileName.split('.').pop()  //pop last element
console.log(fileExtension);

