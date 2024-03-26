let a = 10;
console.log(a.__proto__ ); // true
console.log(a.__proto__== Number.prototype  ); // true

let b="Hello"
console.log(b.__proto__==String.prototype);

// dundr proto=   __proto__
console.log(String.__proto__.__proto__== Object.prototype);
console.log(String.prototype.__proto__== Object.prototype);
