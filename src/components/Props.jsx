import { useRef, useState } from "react";

function Props() {
  // Refs for DOM elements
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  // Focus name input when component loads
  const handleFocusName = () => {
    nameRef.current.focus();
  };

  // Toggle password visibility
  const togglePassword = () => {
    const type = passwordRef.current.type === "password" ? "text" : "password";
    passwordRef.current.type = type;
  };

  return (
    <div className="container mt-5 w-25">
      <h3 className="text-center mb-4">Login Form</h3>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          ref={nameRef} // attach ref
          className="form-control"
          placeholder="Enter Name"
        />
        <button className="btn btn-link p-0 mt-1" onClick={handleFocusName}>
          Focus Name
        </button>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          ref={passwordRef} // attach ref
          className="form-control"
          placeholder="Enter Password"
        />
        <button className="btn btn-link p-0 mt-1" onClick={togglePassword}>
          Show / Hide Password
        </button>
      </div>

      <button className="btn btn-success w-100">Login</button>
    </div>
  );
}

export default Props;
