let listItems = document.querySelectorAll('li');
let list = document.querySelector('.list');
console.log(list);

list.addEventListener('click',(ev)=>{
    console.log(ev.target);
})



//aise nhi krenge eventlistner hum ul pe lgaynge kyuki jo baad me li add hogi unko to phir hum select nhi kr payenge
/*
for(let i = 0 ; i < listItems.length ; i++){
    // console.log(listItems[i]);
    listItems[i].addEventListener('click',(ev)=>{
        console.log(ev.target.innerText);
    })
}
*/