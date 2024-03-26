 //// ek fun ke liye ek hi closure bnyega

function funGenerator() {
    let a = 1;
    function innerFun() {
        a++;

        function innerMostFun(){
            a++;
            console.log(a);
        }
        return innerMostFun;
    }
    return innerFun;
}

let fun = funGenerator();
let fun1 = fun();   // yha a=2 // 'a' ka closure bn gya hai ,yha a ki value 2 ho gyi
let fun2 = fun();  //a=3

// a ka closure bna fun ke liye
// a=1,2,3,

fun1();  //innerMostFun() call hoga a ki value 4
fun1();   //5
fun2();   //6  fun1, fun2 ki value aage bd rhi hai kyuki a jo closure bna hai vo dono ka same hi hai
fun2();   //7
fun1();   //8


//----------------------------------------------------------------
// Explain //upr val code explain kra hai
/*
function funGenerator() {
    let a = 1;

    function innerFun() {
        a++;

        function innerMostFun() {
            a++;
            console.log(a);
        }

        return innerMostFun;
    }

    return innerFun;
}

let fun = funGenerator();
let fun1 = fun();   // a=2
let fun2 = fun();   // a=3

fun1();  // Logs and increments a, so a=4
fun1();  // Logs and increments a, so a=5
fun2();  // Logs and increments a, so a=4
fun2();  // Logs and increments a, so a=5
fun1();  // Logs and increments a, so a=6
Here's a breakdown:

funGenerator is a function that returns another function (innerFun). Inside innerFun, there's a variable a initialized to 1.

let fun = funGenerator();: You call funGenerator, and it returns the innerFun function. The variable fun now holds a reference to innerFun.

let fun1 = fun();: You call fun(), which increments the a variable (now a becomes 2). fun1 now holds a reference to innerMostFun function.

let fun2 = fun();: You call fun() again, creating a new instance of innerFun with its own separate a. This time a is incremented to 3. fun2 holds a reference to the new instance of innerMostFun.

Calls to fun1() and fun2() log the value of a inside their respective closures:

fun1(): Increments a to 4 and logs 4.
fun1(): Increments a to 5 and logs 5.
fun2(): Increments a to 4 and logs 4.
fun2(): Increments a to 5 and logs 5.
fun1(): Increments a to 6 and logs 6.

Each call to fun1() and fun2() maintains its own separate copy of the variable a due to closures, resulting in the final logged values of a as 4, 5, and 6.

 */

//------------------------------------------------------------------------------------------
//upr val code explain kra hai
/*
function funGenerator() {
    let a = 1;
    function innerFun() {
        a++;
        console.log('innerFun',a)
        function innerMostFun(){
            a++;
            console.log('innerMostFun',a)
        }
        return innerMostFun;
    }
    return innerFun;
}

//a=1,2,3,
//innerfun closure a ka refrence lega a=3,4,5,6
//innerMostFun  a ka refrence lega a=3,4,5,
let fun = funGenerator();
let fun1 = fun();   // yha a=2
let fun2 = fun();  //a=3

// a ka closure bna fun ke liye
// a=1,2,3,

fun1();  //innerMostFun() call hoga a ki value 4
fun1();   //5
fun2();   //4
fun2();   //5
fun1();   //6

 */