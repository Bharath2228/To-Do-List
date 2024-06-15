import React, { useState, useEffect } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const json = localStorage.getItem("tasks");
        const loadedTasks = JSON.parse(json);
        if(loadedTasks) {
            setTasks(loadedTasks);
        }
    }, []);

    useEffect(() => {
        if(tasks.length > 0) {
            const json = JSON.stringify(tasks);
            localStorage.setItem("tasks", json);
        }
    }, [tasks]);

    function addTask() {
        if (newTask.trim() !== "") {
            const addedTask = { text: newTask, completed: false, editing: false};
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

    function editTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index] = { ...updatedTasks[index], editing: true };
        setTasks(updatedTasks);
    }

    function saveTask(index, newText) {
        const updatedTasks = [...tasks];
        updatedTasks[index] = { ...updatedTasks[index], text: newText, editing: false };
        setTasks(updatedTasks);
    }

    function cancelEdit(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index] = { ...updatedTasks[index], editing: false};
        setTasks(updatedTasks);
    }

    function toggleStrikeThrough(index) {
        const updatedTasks = [...tasks];
        const task = updatedTasks[index];

        if (task.completed) {
            task.completed = !task.completed;
            updatedTasks.splice(index, 1);
            let firstUncompletedIndex = updatedTasks.findIndex(task => task.completed);
            if (firstUncompletedIndex === -1) {
                firstUncompletedIndex = updatedTasks.length;
            }
            updatedTasks.splice(firstUncompletedIndex, 0, task);
        } else {
            updatedTasks.splice(index, 1);
            task.completed = !task.completed;
            updatedTasks.push(task);
        }

        setTasks(updatedTasks);
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

            <div className='inputDiv'>
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
            </div>
            

            <ol className='taskList'>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className={`taskItem ${task.completed ? 'completed' : ''}`}
                    >
                        <input
                            id='checkbox'
                            type='checkbox'
                            onChange={() => toggleStrikeThrough(index)}
                            checked={task.completed}
                        />
                        {task.editing ? (
                            <>
                                <input
                                    type='text'
                                    value={task.text}
                                    onChange={(e) => {
                                        const newText = e.target.value;
                                        const updatedTasks = [...tasks];
                                        updatedTasks[index] = { ...updatedTasks[index], text: newText };
                                        setTasks(updatedTasks);
                                    }}
                                />
                                <button
                                    className='editButton'
                                    onClick={() => saveTask(index, task.text)}
                                >
                                    Save
                                </button>
                                <button
                                    className='cancelButton'
                                    onClick={() => cancelEdit(index)}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <span className={`listText ${task.completed ? 'strikethrough' : ''}`}>{task.text}</span>
                                <button
                                    className='editButton'
                                    onClick={() => editTask(index)}
                                >
                                    Edit
                                </button>
                            </>
                        )}
                        <button
                            className='moveButton'
                            onClick={() => moveUp(index)}
                        >
                            ⬆️
                        </button>
                        <button
                            className='moveButton'
                            onClick={() => moveDown(index)}
                        >
                            ⬇️
                        </button>
                        <button className='deleteButton' onClick={() => removeTask(index)}>❌</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
