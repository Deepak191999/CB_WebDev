function hello(){
    console.log("Hello World");
}

hello();

// Since function is a datatype, we can store it inside a variable too
var x = function add(a,b){
    return a+b;
}

console.log(x(10,20));  // yha x ko pta hai ki vo intiliaze hai, aur asliye ye work kr rh hai
// console.log(add(10,20)); // Won't work

var y = function(a,b){
    return a-b;
}
console.log(y(20,10));