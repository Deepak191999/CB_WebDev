// class jrur hai mgr ye 'function' bhi hai

//class ka use kre vo object create ka kam bch jayega,apne aap chaining ho jati hai


// // ruchi.__proto__==Person.prototype
//-..> controctur function hi hai
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }

    // getName(){
    //     return this.name
    // }

    //getter
    get getName(){
        return this.name;
    }

    //setter
    set setName(name){
        this.name=name
    }
}

let ruchi= new Person("Jack",18)
// console.log();
console.log(ruchi);
console.log(ruchi.getName);
ruchi.setName= "Deep"
console.log(ruchi.getName);

console.log(ruchi.__proto__==Person.prototype)
console.log(Person.__proto__==Function.prototype)
