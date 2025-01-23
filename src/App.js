import { Component, useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  // Default dummy data
  const dummyData = [
    {
      id: 1,
      text: "Doctors Appointment",
      day: "January 22, 2025 12:15 PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Zoom Meeting",
      day: "January 23, 2025 3:30 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Yoga",
      day: "January 25, 2025 6:30 PM",
      reminder: false,
    },
  ];
  

  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage and merge with dummy data
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // If no tasks in localStorage, use dummy data
    if (storedTasks.length === 0) {
      setTasks(dummyData);
      localStorage.setItem("tasks", JSON.stringify(dummyData));
    } else {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks Available"
      )}
    </div>
  );
};

export default App;
