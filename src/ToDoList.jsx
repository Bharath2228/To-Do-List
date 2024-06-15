import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if (newTask.trim() !== "") {
            const addedTask = { text: newTask, completed: false };
            setTasks(t => [...t, addedTask]);
            setNewTask("");
        }
    }

    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function onChangeTask(event) {
        setNewTask(event.target.value);
    }

    function toggleStrikeThrough(index) {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        ));
    }

    function onKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    }

    return (
        <div className='toDoListContainer'>
            <h1>To Do List</h1>

            <input
                id='inputField'
                type='text'
                placeholder='Write Your Task..'
                onChange={onChangeTask}
                value={newTask}
                onKeyDown={onKeyPress}
            />
            <button
                className='addButton'
                onClick={addTask}
            >
                Add Task
            </button>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            id='checkbox'
                            type='checkbox'
                            onChange={() => toggleStrikeThrough(index)}
                            checked={task.completed}
                        />
                        <span className={`listText ${task.completed ? 'strikethrough' : ''}`}>{task.text}</span>
                        <button className='moveButton' onClick={() => moveUp(index)}>⬆️</button>
                        <button className='moveButton' onClick={() => moveDown(index)}>⬇️</button>
                        <button className='deleteButton' onClick={() => removeTask(index)}>❌</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
