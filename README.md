# React To-Do List Application

This application is a React-based To-Do List, allowing users to manage tasks efficiently. Users can add, edit, delete, and mark tasks as completed. Additionally, it supports setting due dates and integrates with Unsplash to fetch a motivational background image.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [ToDoList Component](#todolist-component)
  - [App Component](#app-component)
- [Styling](#styling)
- [HTML Template](#html-template)
- [Contribution](#contribution)

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Reorder tasks
- Set due dates for tasks
- Fetch and set a random motivational background image from Unsplash

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-todo-list.git
    cd react-todo-list
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. Open the application in your browser at:
    ```
    http://localhost:3000
    ```
2. Use the input field to add new tasks.
3. Use the checkboxes to mark tasks as completed.
4. Click on the task text to edit it.
5. Use the up and down arrows to reorder tasks.
6. Click the calendar icon to set a due date for tasks.

## Components

### ToDoList Component

- **State Management:** Manages the state of tasks using `useState` and `useEffect` hooks.
- **Local Storage:** Loads tasks from local storage on mount and saves tasks to local storage on updates.
- **Task Manipulation:** Functions to add, remove, move, edit, save, and toggle completion status of tasks.
- **Due Dates:** Functions to set and toggle the visibility of due dates.

### App Component

- **Background Image:** Fetches a random motivational background image from Unsplash using `useEffect`.
- **Integration:** Integrates the `ToDoList` component and sets the background image dynamically.

## Styling

- **Responsive Design:** Ensures the application is usable on different screen sizes.
- **Custom Styles:** Uses custom CSS for styling various components like task items, buttons, input fields, and background.
- **Font Awesome:** Utilizes Font Awesome for icons used in task manipulation (edit, delete, move, calendar).

## HTML Template

The HTML template includes the necessary CDN links for Font Awesome and sets up the root div for the React application.

## Contribution

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
