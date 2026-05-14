// [ Enter task ] (Add)

import { useState } from "react";

// Tasks (Total: 3):
// 1. Learn React [Edit] [Delete]
// 2. Practice coding [Edit] [Delete]
// 3. Build project [Edit] [Delete]

const Task3 = () => {
  const [tasks, setTasks] = useState("");
  const [currtasks, setcurrTasks] = useState([]);

  function handleData() {
    setcurrTasks([...currtasks, tasks]);
  }
  function handleDelete(index) {
    setcurrTasks(currtasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Task3</h1>
      <input
        type="text"
        name="task"
        placeholder="Enter Task"
        onChange={(e) => setTasks(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleData}>
        Add
      </button>
      <br />
      <label>Tasks (Total:{currtasks.length})</label>
      {currtasks.map((row, index) => (
        <>
          <li>
            {index + 1}.{row} <button className="btn btn-success">Edit</button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        </>
      ))}
    </div>
  );
};

export default Task3;
