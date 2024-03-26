let person={
    city:"Delhi",
}

let p1= Object.create(person)
console.log(p1);
console.log(p1.__proto__);
console.log(p1.__proto__==person);

console.log(p1.city);
console.log(p1.__proto__.__proto__);