import React, { useState } from "react";
import axios from "axios";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = async () => {

    await axios.post("http://localhost:5001/register", formData);

    alert("User Registered Successfully");

    setFormData({
      name: "",
      email: "",
      phone: ""
    });
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>User Registration Form</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="phone"
        placeholder="Enter Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={submitForm}>
        Register
      </button>

    </div>
  );
}

export default App;