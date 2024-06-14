import React, {useState} from 'react';

function ToDoList(){
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState()

    function addTask(){
        if (newTask.trim() !== ""){
            const addedTask = newTask
            setTasks(t => [...t, addedTask])
            setNewTask("")
        }  
    }

    function removeTask(index){
        setTasks(tasks.filter((_, i) => i !== index))
    }

    function moveUp(index){

       if (index > 0){
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]
        setTasks(updatedTask);
       }
    }

    function moveDown(index){

        if (index < tasks.length - 1){
        const updatedTask = [...tasks];
         [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]]
         setTasks(updatedTask);
        }
     }

    function onChangeTask(event){
        setNewTask(event.target.value)
    }

    function onKeyPress(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            addTask();
        }
    }

    return(
        <div className='toDoListContainer'>
            <h1>To Do List</h1>

            <input
                id='inputField' 
                placeholder='Write Your Task..'
                onChange={onChangeTask}
                value={newTask}
                onKeyDown={onKeyPress}
                />
            <button
            className='addButton'
                onClick={addTask}
                >Add Task</button>

            <ol>
                {tasks.map((task, index) => 
                    <>
                        <li key={index}>
                            <span className='listText'>{task}</span>
                        <button className='moveButton'
                        onClick={() => moveUp(index)}>
                           ⬆️ 
                        </button>
                        <button className='moveButton'
                        onClick={() => moveDown(index)}>
                           ⬇️ 
                        </button>
                        <button className='deleteButton' onClick={() => removeTask(index)}>
                           ❌
                        </button>
                        </li>
                    </>   
                )}
            </ol>
        </div>
    );

}

export default ToDoList
