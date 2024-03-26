let form= document.querySelector('.myForm')
let name= document.querySelector('#name')
let password= document.querySelector('#password')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let nameVal= name.value;
    let passwordVal= password.value;

    console.log("Form submit",nameVal,passwordVal);

})  