import { useState } from "react";

const Task2 = () => {
  const [data, getData] = useState({ pname: "", pprice: "" });
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    getData({ ...data, [name]: value });
  };

  function addData() {
    setProducts([...products, data]);
    getData({ pname: "", pprice: "" });
  }
  return (
    <div>
      <h1>Task2</h1>
      <label>Product Name:</label>
      <input
        type="text"
        name="pname"
        value={data.pname}
        onChange={handleChange}
      />
      <label>Product Price:</label>
      <input
        type="number"
        name="pprice"
        value={data.pprice}
        onChange={handleChange}
      />
      <button className="btn btn-primary" onClick={addData}>
        Add
      </button>
      <label>Products:</label>
      {products.map((pro) => (
        <div>
          {pro.pname}-{pro.pprice}
        </div>
      ))}
    </div>
  );
};

export default Task2;
