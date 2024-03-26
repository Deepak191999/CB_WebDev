// function fun(city, pincode) {
//   console.log(this)
//   console.log(city);
//   console.log(pincode);
// }

// let obj = {
//   name: "Deepak",
//   age: 23,
//   hobbies: "Cricket",
// };

// let f = fun.bind(obj, "Delhi");

// f(110021);

//----------------------------------------------------------------
//we made bind fun
Function.prototype.myBind = function (obj, ...args) {
  let fun = this;

  return function (...args1) {
    fun.apply(obj, [...args, ...args1]);
  };
};



function fun(city, pincode) {
  console.log(this);
  console.log(city);
  console.log(pincode);
}

let obj = {
  name: "Deepak",
  age: 23,
  hobbies: "Cricket",
};

let f = fun.myBind(obj, "Delhi");

f(110021);
