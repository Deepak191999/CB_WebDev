// arrow function lamda function hote hai , isme "this" use nhi hota
// arow funct hr bar same o/p deta hai   

function helloWorld(){
    console.log(this);
}

let print = ()=>{
    console.log(this);
}

let ruchi = {
    name: "Ruchi"
}

let mehak = {
    name: "Mehak"
}

print.call(ruchi);
print.call(mehak);
