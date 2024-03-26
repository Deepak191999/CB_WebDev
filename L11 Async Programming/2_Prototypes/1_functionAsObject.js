function person(name,age){
    console.log("Name",name);
    console.log("Age",age);
}

person("Deepak",22)


person.city="Delhi"  // Person is a function
// and it is acting like an object too

console.log("City",person.city);


console.log(typeof(person));



//---------------------------------------------------------
// let p2={
//     name:"Kalu",
//     age:55
// }

// console.log("Name",p2.name);
// console.log("age",p2.age);