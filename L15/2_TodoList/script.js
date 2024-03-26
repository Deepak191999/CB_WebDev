let btn = document.querySelector("button");
let input = document.querySelector("input");
let taskList = document.querySelector(".taskList");
let arr = [];

//part 2
btn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = `<div class="taskText">${input.value}
    </div>
     <div>
     <button class='up'>⬆️</button>
     <button class='down'>⬇️</button>
     <button class='delete'>❌</button>
    </div>`;
  taskList.appendChild(li);
  input.value = "";
});

taskList.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("up")) {
    let parentElement = e.target.parentElement.parentElement;
    // console.log("parentElement",parentElement)
    let upperElememt = parentElement.previousElementSibling;
    // console.log('upperElememt',parentElement)
    taskList.insertBefore(parentElement, upperElememt);
  } else if (e.target.classList.contains("down")) {
    let parentElement = e.target.parentElement.parentElement;
    let downElement = parentElement.nextElementSibling;
    taskList.insertBefore(downElement, parentElement);
  } else if (e.target.classList.contains("delete")) {
    let parentElement = e.target.parentElement.parentElement;
    console.log(parentElement);
    // taskList.remove(parentElement) //aise nhi chlega
    parentElement.remove();
  }
  else if(e.target.classList.contains("taskText")){
    console.log(e.target.innerText);
    e.target.setAttribute('contenteditable',"true")
  }
});

/* part 1
btn.addEventListener('click',()=>{
    let task=input.value
    console.log(task)

    input.value=""
    let li= document.createElement('li')
    li.innerHTML=task
    taskList.appendChild(li)

})
 */
