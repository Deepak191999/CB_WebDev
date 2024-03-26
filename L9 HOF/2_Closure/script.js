function funGenerator() {
    let a = 1;

    function innerFun() {
        a++;
        console.log(a);
    }

    return innerFun;
}

// a=2,3,4 (fun ke liye)
let fun = funGenerator();
fun();  //2
fun(); // 3
fun(); // 4


// fun 1 alg hai fun se to isme a ka closure alg bnega
//dubar a=2,3,4
let fun1 = funGenerator();
fun1(); // 2
fun1(); // 3
fun1(); // 4
 