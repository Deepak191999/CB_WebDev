function hello(){
    console.log("Hello World");
}
var x,y;

hello();

// console.log(x(10,20)); // Won't Work , yha x ko pta hai ki vo intiliaze hai, but vo function hai y obj hai kuch nhi pata,

x = function add(a,b){
    return a+b;
}

y = function(a,b){
    return a-b;
}
console.log(y(20,10));