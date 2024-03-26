// const btn = document.querySelector('#task');
// const taskList = document.querySelector('#taskList');
// let addBtn = document.querySelector("#add");
// let input = document.querySelector("input");

// btn.addEventListener('click',(ev)=>{
//     console.log("Clicked")
//     fetch('/gettasks')
//         .then((res)=>res.json())
//         .then((data)=>{
//             console.log(data);
//             taskList.innerHTML = '';
//             // Populate task list
//             data.forEach(task => {
//                 const li = document.createElement('li');
//                 li.textContent = task;
//                 taskList.appendChild(li);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching tasks:', error);
//         });
// });


// addBtn.addEventListener("click", () => {
//     let li = document.createElement("li");
//     li.innerHTML = `<div class="taskText">${input.value}
//       </div>
//        <div>
//        <button class='up'>⬆️</button> 
//        <button class='down'>⬇️</button>
//        <button class='delete'>❌</button>
//       </div>`;
//     taskList.appendChild(li);
//     input.value = "";
//   });



  
// --------------------------------------------------------------------------------------

// const btn = document.querySelector('#task');
// const taskList = document.querySelector('#taskList');
// let addBtn = document.querySelector("#add");
// let input = document.querySelector("input");

// btn.addEventListener('click', (ev) => {
//     console.log("Clicked")
//     fetch('/gettasks')
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             taskList.innerHTML = '';
//             // Populate task list
//             data.forEach((task, index) => {
//                 const li = document.createElement('li');
//                 li.innerHTML = `<div class="taskText">${task}</div>
//                                 <div>
//                                     <button class='up' onclick="moveTaskUp(${index})">⬆️</button>
//                                     <button class='down' onclick="moveTaskDown(${index})">⬇️</button>
//                                     <button class='delete' onclick="deleteTask(${index})">❌</button>
//                                 </div>`;
//                 taskList.appendChild(li);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching tasks:', error);
//         });
// });


// addBtn.addEventListener("click", () => {
//     let li = document.createElement("li");
//     li.innerHTML = `<div class="taskText">${input.value}</div>
//                     <div>
//                         <button class='up' onclick="moveTaskUp(${taskList.children.length})">⬆️</button>
//                         <button class='down' onclick="mov eTaskDown(${taskList.children.length})">⬇️</button>
//                         <button class='delete' onclick="deleteTask(${taskList.children.length})">❌</button>
//                     </div>`;
//     taskList.appendChild(li);
//     input.value = "";
// });

// function moveTaskUp(index) {
//     if (index === 0) return; // Already at the top
//     let item = taskList.children[index];
//     taskList.insertBefore(item, taskList.children[index - 1]);
// }

// function moveTaskDown(index) {
//     if (index === taskList.children.length - 1) return; // Already at the bottom
//     let item = taskList.children[index];
//     taskList.insertBefore(item, taskList.children[index + 1].nextSibling);
// }

// function deleteTask(index) {
//     taskList.removeChild(taskList.children[index]);
// }



