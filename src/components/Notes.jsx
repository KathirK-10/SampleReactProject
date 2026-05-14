import { useState ,useEffect} from "react";
import {
  ListItemAvatar,
  ListItem,
  List,
  Avatar,
  ListItemText,
  Button,
  TextField,
} from "@mui/material";

const Notes = () => {
  const [list, setList] = useState(()=>{
    const saved=localStorage.getItem('listdata');
    return saved ? JSON.parse(saved):[];
  })
  const [inputs, setinputs] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("listdata", JSON.stringify(list));
  }, [list]);

  function handleInput(e) {
    setinputs(e.target.value);
  }
  function handleAddorUpdate() {
    if (!inputs) {
      alert("Enter Text");
      return;
    }
    if (editIndex !== null) {
      const newItems = [...list];
      newItems[editIndex] = inputs;
      setList(newItems);
      setEditIndex(null);
    } else {
      setList([...list, inputs]);
    }
    setinputs("");
  }

  function handleDelete(i) {
    setList(list.filter((_, item) => item !== i));
  }

  function handleEdit(i) {
    setinputs(list[i]);
    setEditIndex(i);
  }


  return (
    <div className="container border" style={{ margin: "100px auto", width: "500px" }}>
      <h2> Notes:{list.length} </h2>
      <TextField
        id="standard-basic"
        label="Add Notes"
        variant="standard"
        value={inputs}
        onChange={handleInput}
      />
      <Button variant="contained" onClick={handleAddorUpdate}>{editIndex != null ? "Update" : "Add"}</Button>
      {editIndex != null && (
        <Button variant="outlined" onClick={() => setEditIndex(null)(setinputs(""))}> Cancel</Button>
      )}
      <hr />
      {list.map((data, index) => (
        <List sx={{ width: "100%", bgcolor: "lightgrey" }}style={{ marginBottom: "10px" }}key={index}>
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${index + 1}. ${data}`} />
            <Button variant="outlined" onClick={() => handleEdit(index)}>
              Edit
            </Button>
            <Button variant="outlined" onClick={() => handleDelete(index)}>
              Delete
            </Button>
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default Notes;
