let btn=document.getElementById('btn')
let body=document.querySelector('body')

function btnClickedHandler(e){
    console.log("Clicked");


}

btn.addEventListener('click',btnClickedHandler)

// btn.addEventListener('click',()=>{
//     console.log('Clicked Fun');
// })

btn.removeEventListener('click',btnClickedHandler)


//--------------------------------------------------------
//extra from my side
/// if we want to remove eventlistrner after click

// function btnClickedHandler(e){
//     console.log("Clickeddd");

// btn.removeEventListener('click',btnClickedHandler)
// }

// btn.addEventListener('click',btnClickedHandler)