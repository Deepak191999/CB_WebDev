class Vehicle {
    constructor(name){
        this.name=name
    }
    printName(){
        console.log(this.name);
    }
}

class Car extends Vehicle{
    constructor(name,price,color){
        super(name)   // ye name inherit hua hai "vehicle" se
        this.price=price
        this.color=color
    }
}
class Sedan extends Car{
    constructor(Owner, name,price,color){
        super(name,price,color)   // ye name inherit hua hai "vehicle" se
        this.Owner=Owner
    }
}

// new use hua hai binding ke liye

let hondaCity= new Sedan("Deepak","Honda-City",100,"grey")
console.log(hondaCity);

hondaCity.printName()



// #Note  jb vehicle.__proto__ kra to function ayega kyuki class function hi hai,lekin
// jb vehicle.prototype.__proto__ kra to object ayega , mtlb vehicle.prototype.__proto__ me objectayega,lekin vechile jo fucntion hai uska __proto__ fucntion hai


//---------------------------------------------------------------------------------------------
//Practice

// class Vehicle{
//     constructor(name){
//         this.name=name
//     }
// }

// class Car extends Vehicle{
//     constructor(name,price,company){
//         super(name)
//         this.price=price
//         this.company=company
//     }
// }


// class Suv extends Car{
//     constructor(seats,name,price,company){
//         super(name,price,company)
//         this.seats=seats
//     }
// }

// let p= new Suv(7,"Innova",22,"Toyota")
// console.log(p);