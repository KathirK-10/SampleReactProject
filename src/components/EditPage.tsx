import {useEffect, useState,ChangeEvent } from 'react'
import api from "../api/axios";
import { useParams } from "react-router-dom";

interface FormDataType {
  travel_name: string;
  city: string;
}

const EditPage = () => {
  const [formData, setFormData] = useState<FormDataType>({
    travel_name: "",
    city: "",
  });
  
  const {id} = useParams();
  
  const details = async () => {
    try {
      const response = await api.get(`travel/${id}`);      
      setFormData({
        travel_name: response.data.travel_name,
        city: response.data.city,
      });

    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(()=>{
    details();
  },[id])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  
    e.preventDefault();
  
    try {
  
      const response = await api.post(`edittravel${id}`,
        formData);
  
      console.log(response.data);
  
    } catch (error) {
  
      console.log(error);
  
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f4f6f9",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Edit User - {id}
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Travels Name</label>
            <input
              type="text"
              name="travel_name"
              placeholder="Enter Travels Name"
              value={formData.travel_name}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={formData.city}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};


export default EditPage