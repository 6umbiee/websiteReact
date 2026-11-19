import { useState } from "react";

function Content() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleEvent = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const removeTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };
  return (
    <div id="content" className="content">
      <h3>Make your list</h3>
      <div>
        <input
          onChange={handleEvent}
          value={newTask}
          placeholder="Enter list..."
          type="text"
        />
        <button onClick={addTask}>Add task</button>
      </div>
      <ul>
        {task.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete-btn" onClick={() => removeTask(index)}>
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
