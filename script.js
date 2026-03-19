const taskInput=document.querySelector(".taskinput");
// let input=taskInput.value;
const addBtn= document.querySelector("#add");
const taskList=document.querySelector("#list")
addBtn.addEventListener("click",()=>{
    const task=taskInput.value;
    if(task===""){
        alert("Please enter a task!!");
        return;
    }
    const taskDiv=document.createElement("div");
    taskDiv.classList.add("task1");
    taskDiv.innerHTML=`
        <li>${task}</li>
        <i class="ri-delete-bin-line"></i>`;
        taskList.appendChild(taskDiv);
        taskInput.value="";

})
taskList.addEventListener("click",()=>{
    if(event.target.classList.contains("ri-delete-bin-line")){
        event.target.parentElement.remove();
    }
})

