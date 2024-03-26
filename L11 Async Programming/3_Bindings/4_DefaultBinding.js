// agr "." nhi lgaya to binding nhi hogi ,ek hi function rhega jo bnaya hai











function CreatePerson(){
    console.log("this here is create person",this)   // ye this deepakm ko refer kr rh hai
    function person(){
        console.log("this here is person function",this);   // ye this window ko refer krega 
    } 
    person()
}


let deepak={
    name:"Deep",
    age:24
}

CreatePerson.call(deepak)