let btn=document.getElementById('btn')
let body=document.querySelector('body')

btn.onclick=()=>{
    console.log("CLicked Btn")
}

body.onkeypress=(e)=>{
    console.log("key press:", e.key);
}
// body.onkeydown=(e)=>{
//     console.log("key press:", e.key);
// }
// body.onkeyup=(e)=>{
//     console.log("key press:", e.key);
// }

