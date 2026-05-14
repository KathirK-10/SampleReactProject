import { useState } from "react";

function Task1() {
  const [inputage, setinputAge] = useState(0);
  const [inputname, setinputName] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function showData() {
    setName(inputname);
    setAge(inputage);
  }
  return (
    <>
      <h1>Task1</h1>
      <input type="text" onChange={(e) => setinputName(e.target.value)} />
      <input type="number" onChange={(e) => setinputAge(e.target.value)} />
      <button onClick={showData}>Show</button>
      <p>
        Name:{name}
        <br />
        Age:{age}
      </p>
    </>
  );
}
export default Task1;
