import React, { useState, useEffect } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const json = localStorage.getItem("task");
        const loadedTasks = JSON.parse(json);
        if (loadedTasks) {
            setTasks(loadedTasks);
        }
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
            const json = JSON.stringify(tasks);
            localStorage.setItem("task", json);
        } else {
            localStorage.removeItem("task");
        }
    }, [tasks]);

    function addTask() {
        if (newTask.trim() !== "") {
            const addedTask = { text: newTask, completed: false, editing: false, dueDate: '', showDueDateInput: false };
            setTasks(prevTasks => [addedTask, ...prevTasks]);
            setNewTask("");
        }
    }

    function removeTask(index) {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    function moveUp(index) {
        if (index > 0) {
            setTasks(prevTasks => {
                const updatedTasks = [...prevTasks];
                [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
                return updatedTasks;
            });
        }
    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            setTasks(prevTasks => {
                const updatedTasks = [...prevTasks];
                [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
                return updatedTasks;
            });
        }
    }

    function onChangeTask(event) {
        setNewTask(event.target.value);
    }

    function editTask(index) {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = { ...updatedTasks[index], editing: true };
            return updatedTasks;
        });
    }

    function handleTaskTextChange(index, newText) {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = { ...updatedTasks[index], text: newText };
            return updatedTasks;
        });
    }

    function saveTask(index, newText) {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = { ...updatedTasks[index], text: newText, editing: false };
            return updatedTasks;
        });
    }

    function cancelEdit(index) {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = { ...updatedTasks[index], editing: false };
            return updatedTasks;
        });
    }

    function toggleStrikeThrough(index) {
        const updatedTasks = [...tasks];
        const task = updatedTasks[index];

        if (task.completed) {
            task.completed = !task.completed;
            updatedTasks.splice(index, 1);
            let firstUncompletedIndex = updatedTasks.findIndex(task => !task.completed);
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

    function onEditInput(event, index, task) {
        if (event.key === 'Enter') {
            event.preventDefault();
            saveTask(index, task);
        }
    }

    function handleDueDateChange(index, newDate) {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = { ...updatedTasks[index], dueDate: newDate };
            return updatedTasks;
        });
    }

    function toggleDueDateInput(index) {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = { ...updatedTasks[index], showDueDateInput: !updatedTasks[index].showDueDateInput };
            return updatedTasks;
        });
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
                    Add
                </button>
            </div>

            <ol className='taskList'>
                {tasks.map((task, index) => (
                    <React.Fragment key={index}>
                        <li className={`taskItem ${task.completed ? 'completed' : ''}`}>
                            <input
                                className='checkbox'
                                type='checkbox'
                                onChange={() => toggleStrikeThrough(index)}
                                checked={task.completed}
                            />
                            {task.editing ? (
                                <>
                                    <input
                                        type='text'
                                        value={task.text}
                                        onChange={(e) => handleTaskTextChange(index, e.target.value)}
                                        onKeyDown={(e) => onEditInput(e, index, task.text)}
                                    />
                                    <button className='saveButton' onClick={() => saveTask(index, task.text)}>
                                        Save
                                    </button>
                                    <button className='cancelButton' onClick={() => cancelEdit(index)}>
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <span className={`listText ${task.completed ? 'strikethrough' : ''}`}>
                                    {task.text}
                                </span>
                            )}
                        </li>
                        <div className={`taskButtons ${task.completed ? 'hidden' : ''}`}>   
                            
                            <button className='dateButton' onClick={() => toggleDueDateInput(index)}>
                                Due
                            </button>
                            {task.showDueDateInput && (
                                <div className="dueDate">
                                     <input
                                        type='date'
                                        value={task.dueDate}
                                        onChange={(e) => handleDueDateChange(index, e.target.value)}
                                    />
                                </div>
                                   
                            )}
                            {!task.editing && (
                                <>
                                    <button className='editButton' onClick={() => editTask(index)}>
                                        Edit
                                    </button>
                                    <button className='moveButton' onClick={() => moveUp(index)}>
                                        ⬆️
                                    </button>
                                    <button className='moveButton' onClick={() => moveDown(index)}>
                                        ⬇️
                                    </button>
                                    <button className='deleteButton' onClick={() => removeTask(index)}>
                                        ❌
                                    </button>
                                </>
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
