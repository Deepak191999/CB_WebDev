class person{
    constructor(name,age,marks){
        this.name=name
        this.isAdult= function(){
            return age>=18
        }
        this.getMarks= function(){
            return marks
        }
    }
}

let deepak= new person("Deepa",19,100)
console.log(deepak);
console.log(deepak.isAdult());
console.log(deepak.getMarks());


