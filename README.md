# React To-Do List Application

This application is a React-based To-Do List, designed to help users manage their tasks efficiently. It includes features such as adding, editing, deleting tasks, marking them as completed, and setting due dates. The application also enhances user experience by integrating with the Unsplash API to fetch a random motivational background image.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [ToDoList Component](#todolist-component)
  - [App Component](#app-component)
- [Styling](#styling)
- [HTML Template](#html-template)
- [APIs and Libraries](#apis-and-libraries)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contribution](#contribution)
- [Contact](#contact)

## Features

- **Task Management:** Add, edit, and delete tasks with ease.
- **Completion Status:** Mark tasks as completed and uncompleted.
- **Task Reordering:** Move tasks up and down to prioritize.
- **Due Dates:** Set and manage due dates for tasks.
- **Persistent Storage:** Saves tasks to local storage, ensuring tasks are retained across sessions.
- **Motivational Background:** Fetches a random motivational background image from Unsplash on each visit.
- **Responsive Design:** Optimized for both desktop and mobile views.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/react-todo-list.git
    cd react-todo-list
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```

## Usage

1. **Access the Application:**
    Open your browser and navigate to `http://localhost:3000`.

2. **Add a Task:**
    - Type your task into the input field.
    - Press Enter or click the "Add" button.

3. **Edit a Task:**
    - Click on the task text to edit.
    - Make changes and press Enter or click the "Save" button.

4. **Delete a Task:**
    - Click the trash icon next to the task to delete it.

5. **Complete a Task:**
    - Check the checkbox next to the task to mark it as completed.

6. **Reorder Tasks:**
    - Use the up and down arrows to move tasks.

7. **Set Due Date:**
    - Click the calendar icon and select a date from the date picker.

## Components

### ToDoList Component

- **State Management:**
  - Uses `useState` for managing tasks and input values.
  - Uses `useEffect` for loading and saving tasks to local storage.

- **Task Manipulation Functions:**
  - `addTask`: Adds a new task to the list.
  - `removeTask`: Removes a task by index.
  - `moveUp` and `moveDown`: Reorders tasks in the list.
  - `editTask`: Enables editing mode for a task.
  - `saveTask`: Saves the edited task.
  - `cancelEdit`: Cancels editing mode without saving.
  - `toggleStrikeThrough`: Marks tasks as completed/uncompleted.
  - `handleDueDateChange` and `toggleDueDateInput`: Manages due date input visibility and changes.

### App Component

- **Background Image Fetching:**
  - Uses the Unsplash API to fetch a random motivational image.
  - Sets the image as the background of the application.

## Styling

- **Responsive Design:**
  - Ensures the app works well on various screen sizes.
  - Media queries adjust styles for mobile devices.

- **Custom Styles:**
  - Styles for the task list, input fields, buttons, and background.
  - Uses CSS for layout and design, ensuring a modern look and feel.

- **Font Awesome:**
  - Utilizes Font Awesome icons for task manipulation buttons.

## HTML Template

- **Basic Structure:**
  - Includes CDN links for Font Awesome.
  - Sets up the root div for rendering the React application.

## APIs and Libraries

- **React:**
  - A JavaScript library for building user interfaces.

- **Unsplash API:**
  - Used to fetch random motivational background images.

- **Font Awesome:**
  - Provides a wide range of icons used throughout the application.

## Best Practices

- **Code Organization:**
  - Components are well-structured and separated.
  - State management is centralized for clarity and efficiency.

- **Error Handling:**
  - Proper error handling when fetching data from the Unsplash API.

- **Performance Optimization:**
  - Efficient state updates to minimize re-renders.
  - Use of local storage for persistent data without server dependency.

## Troubleshooting

- **Local Storage Issues:**
  - Ensure the browser supports local storage.
  - Clear local storage if tasks are not updating correctly.

- **API Errors:**
  - Check the network console for any issues with the Unsplash API.
  - Ensure the access key is correct and has sufficient permissions.

- **Styling Issues:**
  - Verify the CSS file is properly linked and loaded.
  - Check for conflicting styles that may cause layout issues.

## Contribution

- **Fork the Repository:**
  - Make your changes in a new branch.

- **Open Issues:**
  - Report bugs or suggest features through the issues tab on GitHub.


