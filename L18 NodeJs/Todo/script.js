let input= document.querySelector('input')
let btn= document.querySelector('button')
let ul= document.querySelector('ul')

btn.addEventListener('click',(e)=>{
    let task= input.value
    let li= document.createElement('li')
    li.innerText=task;

    ul.appendChild(li)
   

   let storage=localStorage.getItem('ulItems')||'[]';
   storage=JSON.parse(storage)

   storage.push(task)
   localStorage.setItem('ulItems',JSON.stringify(storage))
    
    input.value=""
})

function setUp()
{
    let storage=localStorage.getItem('ulItems');
    storage=JSON.parse(storage)
   


    storage.forEach(element => {
        let li = document.createElement('li');
        li.innerText = element;
        ul.appendChild(li);
    });
}

setUp()
//-----------------------------------------------------

// let btn = document.querySelector('.btn');
// let tasklist = document.querySelector('.tasklist');
// let inp = document.querySelector('.inp');

// btn.addEventListener('click',(ev)=>{
//     let task = inp.value;
//     let li = document.createElement('li');
//     li.innerText = task;
//     tasklist.appendChild(li);
//     let tasks_db = localStorage.getItem('tasks') || '[]';
//     tasks_db = JSON.parse(tasks_db);

//     tasks_db.push(task);
//     localStorage.setItem('tasks',JSON.stringify(tasks_db));
//     inp.value = "";
// })

// function setUp(){
//     let tasks_db = localStorage.getItem('tasks');
//     tasks_db = JSON.parse(tasks_db);
//     tasklist.innerText = '';
//     tasks_db.forEach((val)=>{
//         let li = document.createElement('li');
//         li.innerText = val;
//         tasklist.appendChild(li);
//     })
// }

// setUp();

//-----------------------------------------------------
