 x= 10
console.log(x);



function example() {
    // var variable is function-scoped
    var x = 1;
    if (true) {
      // let variable is block-scoped
      let y = 2;
      console.log(y); // 2
      console.log(x)
    }
    // console.log(y); // Error: y is not defined
  }
  
  example();