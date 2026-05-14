import "./Login.css";
import { useState } from "react";
function Login() {
  const [inputs, setInputs] = useState({});

  function handleDataChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }
  return (
    <>
      <div className="loginContainer">
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="name"
            value={inputs.username}
            onChange={handleDataChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={inputs.password}
            onChange={handleDataChange}
          />
        </div>
        <button className="btn btn-success">Login</button>
      </div>
      <p>{inputs.username}</p>
      <p>{inputs.password}</p>
    </>
  );
}
export default Login;
