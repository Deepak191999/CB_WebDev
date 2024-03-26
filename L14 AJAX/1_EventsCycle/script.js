let grandFather = document.querySelector(".grandFather");
let Father = document.querySelector(".Father");
let child = document.querySelector(".child");

grandFather.addEventListener("click",(e) => {
    console.log("clicked grandFather");
  },false);

Father.addEventListener("click", (e) => {
    console.log("clicked Father");
    // e.stopPropagation()
  },false);

child.addEventListener("click",(e) => {
    console.log("clicked child");
  },false);

//isme ye problem ho rhi hai,agrm hum child pe click kre to teno 3 hi clicked ho rhe hai
//event jha click kr rhe hai uski bahr vala phir click hota hai agr, invard ki trf chlana hai to "true" attribute pass krna pdega
// agr "false" likha to bhr jate hue vo print hoga // by default "false" default hota hai

//agr hum chate hai kisi event pe jaye hi na to uske phle vale pe  e.stopPropagation() use kran hoga
