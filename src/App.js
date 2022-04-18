import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "May 2nd at 11:15am",
      reminder: true,
    },
    {
      id: 2,
      text: "Zoom Meeting",
      day: "May 2nd at 6:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Yoga",
      day: "May 2nd at 10:30pm",
      reminder: false,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No Tasks Available')}
    </div>

  );
}

export default App;
