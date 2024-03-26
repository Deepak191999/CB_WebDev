const btn= document.querySelector('#theme')
const body=document.querySelector('body')

btn.addEventListener('click',(e)=>{
   
    if(body.classList.contains('light'))
    {
        body.classList.remove('light')
        body.classList.add('dark')
        btn.innerText= 'light theme'
    }
    else
    {
        body.classList.remove('dark')
        body.classList.add('light');
        btn.innerText='Dark theme'
    }
    
})