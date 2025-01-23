let tasks=[]


function addTask(){
    const input = document.getElementById('taskInput')
    const task = input.value.trim()
    console.log(task)
    if(task !== ''){
        tasks.push(task)
        input.value=''
        displayTasks()
    }
}

function removeTask(index){
    tasks.splice(index,1)
    displayTasks()
}

function displayTasks(){
    const taskList = document.getElementById('taskList')
    let html=''

    for(let i=0; i < tasks.length; i++){
        html += `
        <div class="task-item">
            <span class="task-text">${i+1}. ${tasks[i]}</span>
            <div class="button-group">
                <button class="edit-btn" onclick="editTask()">Edit</button>
                <button class="delete-btn" onclick="removeTask(${i})">Delete</button>
            </div>
        
        </div>
        
        
        
        `;
    }


    taskList.innerHTML=html
}