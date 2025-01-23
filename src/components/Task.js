import { FaTimes } from "react-icons/fa";
import dayjs from "dayjs";

const Task = ({ task, onDelete, onToggle }) => {

  // const formattedDay = task.day instanceof Date ? dayjs(task.day).format('MMMM D, YYYY h:mm A') : task.day;
  const formattedDay = dayjs(task.day).isValid() ? dayjs(task.day).format('MMMM D, YYYY') + ' - ' + dayjs(task.day).format('h:mm A') : task.day;


  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{formattedDay}</p>
    </div>
  );
};

export default Task;
