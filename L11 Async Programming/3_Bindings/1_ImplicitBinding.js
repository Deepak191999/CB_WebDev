let person={
    print: function(){
        console.log("this :",this);
    },
    addHobbie: function(){

        //person ki hobbies me push kra 'sweeping'
        this.hobbies.push("Sweeping")
    },
    name:"Ruchi",
    age:80,
    hobbies:["Cleaning Books"]
}


person.addHobbie();

person.print();
