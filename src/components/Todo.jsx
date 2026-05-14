// Task 2 — Todo App
// Features:
// Add task
// Delete task
// Complete task
// Edit task
// Concepts:
// Arrays in state
// .map()
// Conditional styling

import { useState } from "react";
import {
  TextField,
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Button,
  Paper,
} from "@mui/material";

const Todo = () => {
  const [list, setList] = useState([]);
  const [values, setValues] = useState("");

  function addtask() {
    if (!values) return;
    setList([...list, { text: values, completed: false }]);
    setValues("");
  }

  const handleDelete = (i) => {
    setList(list.filter((_, item) => item !== i));
  };
  return (
    <div>
      <h3>To Do List</h3>
      <TextField
        id="standard-basic"
        label="Enter task"
        variant="standard"
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <button className="btn btn-success" onClick={addtask}>
        Add Task
      </button>

      {list.map((list, index) => {
        return (
          <>
            <li
              key={index}
              style={{
                textDecoration: list.completed ? "line-through" : "none",
              }}
            >
              {list.text}
            </li>
            <Button>Edit</Button>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Todo;
