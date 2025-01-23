import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
      e.preventDefault()

      if(!text) {
          alert("Please Add A Task")
          return
      }

      onAdd({ text, day, reminder })

      setText("")
      setDay("")
      setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        {/* <input
          type="text"
          placeholder="Add Date & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        /> */}
              <DatePicker
          selected={day}
          onChange={(date) => setDay(date)} // Update state when a date is selected
          showTimeSelect
          timeFormat="h:mm aa"
          timeIntervals={15} // 15-minute intervals
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select Date & Time"
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;

