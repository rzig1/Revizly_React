import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, content: "Enter Your First Task ", completed: false },
  
    
  ]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskInput.trim()) {
      const newTask = {
        id: tasks.length + 1,
        content: taskInput.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-b from-dark-300 to-blue-600">
      <div className="todo_app w-max max-w-lg bg-white p-11 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

        <form id="task_form" onSubmit={handleAddTask} className="flex mb-6 w-full gap-2">
          <input
            type="text"
            id="task_input"
            placeholder="Enter Your Task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="flex-1 p-4 border-2 border-primary-color rounded-lg focus:outline-none focus:border-dark-primary-color"
          />
        
        </form>

        <div className="list_container w-full">
          <ul id="task_list" className="flex flex-col space-y-2 w-full">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex items-center justify-between p-4 rounded-lg shadow-md transition-all duration-200 ${
                  task.completed ? "line-through bg-gray-200" : "bg-dark-white"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id={`task_${task.id}`}
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                    className="h-5 w-5 text-primary-color rounded focus:ring-2 focus:ring-dark-primary-color"
                  />
                  <label
                    htmlFor={`task_${task.id}`}
                    className={`cursor-pointer text-lg ${
                      task.completed ? "text-gray-500" : "text-gray-800"
                    }`}
                  >
                    {task.content}
                  </label>
                </div>
                <button
                  className="btn_delete text-red-600 hover:text-red-800 transition transform hover:scale-110"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default TodoApp;
