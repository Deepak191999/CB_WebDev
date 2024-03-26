// ke seprate binding ko create karne ke liye we use "new" keyword
function person(name,age){
    this.name=name
    this.age=age
}
//"new" se ek empty scope bn jayega, or generaaly new scope vha lgega jha contructor bnega

let p1= new person("person1",12)
let p2= new person("person2",22)




console.log(p1);
// console.log(p1.age);