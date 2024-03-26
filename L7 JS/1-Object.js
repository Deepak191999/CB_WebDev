let person={
    name:"Deepak",
    age:'23',
    hobby:"gym",
    " ": 'hii'

}

// console.log('Name',person.name);
// console.log(person);
console.log('hide object: ',person[" "]);


for (let key in person) {
    console.log(key ,person[key]);
}

for (const iterator of object) {
    
}
// array.forEach(element => {
    
// });